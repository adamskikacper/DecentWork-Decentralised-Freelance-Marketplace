import {
 createContext,
 useContext,
 useEffect,
 useState,
 useCallback,
 ReactNode,
} from "react";
import { Session, User } from "@supabase/supabase-js";
import { useNavigate } from "react-router-dom";
import { authService } from "@/services/authService";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/useToast";

type UserType = "freelancer" | "client" | null;

type AuthContextType = {
 user: User | null;
 userType: UserType;
 session: Session | null;
 signIn: (email: string, password: string) => Promise<void>;
 signUp: (
  email: string,
  password: string,
  userType: "freelancer" | "client"
 ) => Promise<void>;
 signOut: () => Promise<void>;
 loading: boolean;
 redirectToDashboard: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
 const [user, setUser] = useState<User | null>(null);
 const [userType, setUserType] = useState<UserType>(null);
 const [session, setSession] = useState<Session | null>(null);
 const [loading, setLoading] = useState(true);
 const [authInitialized, setAuthInitialized] = useState(false);
 const navigate = useNavigate();
 const { toast } = useToast();

 const updateUserType = useCallback(
  async (userId: string) => {
   if (!userId) return;

   console.log("Fetching user type for:", userId);

   try {
    if (user?.user_metadata?.user_type) {
     const metadataUserType = user.user_metadata.user_type as UserType;
     console.log("Found user type in metadata:", metadataUserType);
     setUserType(metadataUserType);
    }

    const fetchedUserType = await authService.getUserType(userId);

    if (fetchedUserType) {
     console.log(`User type from database: ${fetchedUserType}`);
     setUserType(fetchedUserType);

     if (
      user?.user_metadata?.user_type &&
      user.user_metadata.user_type !== fetchedUserType
     ) {
      console.log(
       `Updating profile with user type from metadata: ${user.user_metadata.user_type}`
      );
      await supabase
       .from("profiles")
       .update({ user_type: user.user_metadata.user_type })
       .eq("id", userId);
     }
    } else if (!userType && user?.user_metadata?.user_type) {
     setUserType(user.user_metadata.user_type as UserType);
    }
   } catch (error) {
    console.error("Error updating user type:", error);

    if (!userType && user?.user_metadata?.user_type) {
     const fallbackType = user.user_metadata.user_type as UserType;
     console.log(`Falling back to metadata user type: ${fallbackType}`);
     setUserType(fallbackType);
    }
   }
  },
  [user, userType]
 );

 useEffect(() => {
  if (authInitialized) return;

  let mounted = true;

  const setupAuthListener = () => {
   const {
    data: { subscription },
   } = authService.onAuthStateChange(async (newSession, newUser) => {
    if (!mounted) return;

    console.log(
     "Auth state changed:",
     newUser ? "User logged in" : "User logged out"
    );
    setSession(newSession);
    setUser(newUser);

    if (newUser) {
     await updateUserType(newUser.id);
    } else {
     setUserType(null);
    }

    setLoading(false);
    setAuthInitialized(true);
   });

   return subscription;
  };

  const initializeAuth = async () => {
   try {
    const currentSession = await authService.getSession();
    console.log(
     "Initial session check:",
     currentSession ? "Session exists" : "No session"
    );

    if (!mounted) return;

    setSession(currentSession);
    setUser(currentSession?.user ?? null);

    if (currentSession?.user) {
     await updateUserType(currentSession.user.id);
    }
   } catch (error) {
    console.error("Error initializing auth:", error);
   } finally {
    if (mounted) {
     setLoading(false);
     setAuthInitialized(true);
    }
   }
  };

  const subscription = setupAuthListener();
  initializeAuth();

  return () => {
   mounted = false;
   subscription.unsubscribe();
  };
 }, [updateUserType]);

 const signIn = async (email: string, password: string) => {
  setLoading(true);
  try {
   const { session: newSession, user: newUser } = await authService.signIn(
    email,
    password
   );

   if (newUser) {
    console.log("User signed in successfully:", newUser.id);
    console.log("User metadata:", newUser.user_metadata);

    const metadataUserType = newUser.user_metadata?.user_type as UserType;
    const dbUserType = await authService.getUserType(newUser.id);

    console.log("User type from metadata:", metadataUserType);
    console.log("User type from database:", dbUserType);

    const finalUserType = metadataUserType || dbUserType;
    console.log("Setting final user type:", finalUserType);
    setUserType(finalUserType);

    setUser(newUser);
    setSession(newSession);

    console.log("Final user type for redirection:", finalUserType);

    await new Promise((resolve) => setTimeout(resolve, 100));

    navigate("/dashboard");
   }
  } catch (error) {
   console.error("Error during sign in:", error);
   toast({
    title: "Login Failed",
    description: "There was a problem with login. Please try again.",
    variant: "destructive",
   });
   throw error;
  } finally {
   setLoading(false);
  }
 };

 const signUp = async (
  email: string,
  password: string,
  userType: "freelancer" | "client"
 ) => {
  setLoading(true);
  try {
   await authService.signUp(email, password, userType);
   setUserType(userType);
   toast({
    title: "Account Created",
    description:
     "Your account has been created successfully. Please verify your email.",
   });
  } catch (error) {
   console.error("Error during sign up:", error);
   toast({
    title: "Signup Failed",
    description: "There was a problem creating your account. Please try again.",
    variant: "destructive",
   });
   throw error;
  } finally {
   setLoading(false);
  }
 };

 const signOut = async () => {
  try {
   setLoading(true);
   await authService.signOut();
   setUser(null);
   setSession(null);
   setUserType(null);
   navigate("/");
   toast({
    title: "Logged Out",
    description: "You have been successfully logged out.",
   });
  } catch (error) {
   console.error("Error during sign out:", error);
   toast({
    title: "Logout Failed",
    description: "There was a problem logging out. Please try again.",
    variant: "destructive",
   });
   throw error;
  } finally {
   setLoading(false);
  }
 };

 const redirectToDashboard = useCallback(() => {
  console.log(`Redirecting with user type: ${userType}`);

  navigate("/dashboard");
 }, [userType, navigate]);

 const value = {
  user,
  userType,
  session,
  signIn,
  signUp,
  signOut,
  loading,
  redirectToDashboard,
 };

 return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
 const context = useContext(AuthContext);
 if (context === undefined) {
  throw new Error("useAuth must be used within an AuthProvider");
 }
 return context;
};

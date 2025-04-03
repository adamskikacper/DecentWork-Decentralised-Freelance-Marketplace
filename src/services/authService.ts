import { supabase } from "@/integrations/supabase/client";
import { User, Session } from "@supabase/supabase-js";

type UserType = "freelancer" | "client" | null;

// Cache for user types to reduce redundant requests
const userTypeCache = new Map<string, { type: UserType; timestamp: number }>();
const CACHE_TTL = 60000; // Cache TTL: 1 minute

/**
 * Service for handling authentication operations with Supabase
 */
export const authService = {
 /**
  * Sign in a user with email and password
  */
 async signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
   email,
   password,
  });

  if (error) {
   console.error("Error during sign in:", error);
   throw error;
  }

  return data;
 },

 /**
  * Sign up a new user with email, password and user type
  */
 async signUp(
  email: string,
  password: string,
  userType: "freelancer" | "client"
 ) {
  console.log(`Signing up user with type: ${userType}`);

  // Create the user account with user_type in metadata
  const { data, error } = await supabase.auth.signUp({
   email,
   password,
   options: {
    data: {
     user_type: userType,
    },
   },
  });

  if (error) {
   console.error("Error during sign up:", error);
   throw error;
  }

  if (data.user) {
   console.log(`User created with ID: ${data.user.id}`);

   // Wait a bit to ensure the profile row has been created by the trigger
   await new Promise((resolve) => setTimeout(resolve, 1000));

   // Update profile with user type
   const { error: profileError } = await supabase
    .from("profiles")
    .update({ user_type: userType })
    .eq("id", data.user.id);

   if (profileError) {
    console.error("Error updating profile user type:", profileError);
   } else {
    console.log(`Profile updated successfully with user type: ${userType}`);
   }
  }

  return data;
 },

 /**
  * Sign out the current user
  */
 async signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
   console.error("Error during sign out:", error);
   throw error;
  }
 },

 /**
  * Get the current session
  */
 async getSession() {
  try {
   const { data } = await supabase.auth.getSession();
   return data.session;
  } catch (error) {
   console.error("Error getting session:", error);
   return null;
  }
 },

 /**
  * Check cache for user type
  */
 getCachedUserType(userId: string): UserType | null {
  if (!userId) return null;

  const cached = userTypeCache.get(userId);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
   console.log(`Using cached user type: ${cached.type}`);
   return cached.type;
  }

  return null;
 },

 /**
  * Cache user type
  */
 cacheUserType(userId: string, userType: UserType) {
  if (!userId || userType === null) return;

  userTypeCache.set(userId, {
   type: userType,
   timestamp: Date.now(),
  });

  console.log(`Cached user type: ${userType} for user: ${userId}`);
 },

 /**
  * Get the user type from the database
  * Enhanced with caching, better retry mechanism and error handling
  */
 async getUserType(userId: string): Promise<UserType> {
  if (!userId) {
   console.log("getUserType called with no userId");
   return null;
  }

  console.log("Fetching user type for:", userId);

  // First check cache
  const cachedType = this.getCachedUserType(userId);
  if (cachedType) {
   console.log("Returning cached user type:", cachedType);
   return cachedType;
  }

  // Try to get user type from metadata first as it's faster
  try {
   const { data, error } = await supabase.auth.getUser();
   if (error) {
    console.error("Error getting user metadata:", error);
   } else if (data.user?.user_metadata?.user_type) {
    const metadataUserType = data.user.user_metadata.user_type as UserType;
    console.log(`Found user type in metadata: ${metadataUserType}`);
    this.cacheUserType(userId, metadataUserType);
    return metadataUserType;
   } else {
    console.log("No user type found in metadata");
   }
  } catch (error) {
   console.error("Error accessing user metadata:", error);
   // Continue to database fallback
  }

  // Try to get user type from database with retries
  const maxRetries = 3;
  const backoffFactor = 1.5;
  let retryCount = 0;
  let dbUserType: UserType = null;
  let lastError: any = null;

  while (retryCount < maxRetries) {
   try {
    console.log(
     `Attempting database query (attempt ${retryCount + 1}/${maxRetries})`
    );

    // Create a timeout promise to race against the database query
    const timeoutPromise = new Promise<null>((_, reject) => {
     setTimeout(() => reject(new Error("Request timeout")), 5000);
    });

    // Database query promise
    const dbQueryPromise = supabase
     .from("profiles")
     .select("user_type")
     .eq("id", userId)
     .maybeSingle();

    // Race the timeout against the database query
    const { data, error } = await Promise.race([
     dbQueryPromise,
     timeoutPromise.then(() => {
      throw new Error("Request timeout");
     }),
    ]);

    if (error) {
     console.error("Error fetching user type:", error);
     lastError = error;
     retryCount++;
     if (retryCount < maxRetries) {
      const delay = 500 * Math.pow(backoffFactor, retryCount);
      console.log(
       `Retrying in ${delay}ms... (attempt ${retryCount}/${maxRetries})`
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
      continue;
     }
    }

    if (data?.user_type) {
     console.log(`User type from database: ${data.user_type}`);
     dbUserType = data.user_type as UserType;
     this.cacheUserType(userId, dbUserType);
     break;
    } else {
     console.log("No user type found in database");
     retryCount++;

     if (retryCount < maxRetries) {
      const delay = 500 * Math.pow(backoffFactor, retryCount);
      console.log(
       `Retrying in ${delay}ms... (attempt ${retryCount}/${maxRetries})`
      );
      await new Promise((resolve) => setTimeout(resolve, delay));
     }
    }
   } catch (error) {
    console.error("Exception in getUserType:", error);
    lastError = error;
    retryCount++;

    if (retryCount < maxRetries) {
     const delay = 500 * Math.pow(backoffFactor, retryCount);
     console.log(
      `Retrying in ${delay}ms... (attempt ${retryCount}/${maxRetries})`
     );
     await new Promise((resolve) => setTimeout(resolve, delay));
    }
   }
  }

  // If we got the user type from database, return it
  if (dbUserType) {
   console.log("Returning user type from database:", dbUserType);
   return dbUserType;
  }

  // If we've exhausted retries, try again with user metadata as a last resort
  if (lastError) {
   console.warn(
    "Exhausted retries for database query, falling back to metadata check"
   );
   try {
    const { data, error } = await supabase.auth.getUser();
    if (error) {
     console.error(
      "Error getting user metadata in last resort attempt:",
      error
     );
    } else if (data.user?.user_metadata?.user_type) {
     const metadataUserType = data.user.user_metadata.user_type as UserType;
     console.log(
      `Last resort: Found user type in metadata: ${metadataUserType}`
     );
     this.cacheUserType(userId, metadataUserType);
     return metadataUserType;
    } else {
     console.log("No user type found in metadata during last resort attempt");
    }
   } catch (error) {
    console.error(
     "Error accessing user metadata in last resort attempt:",
     error
    );
   }
  }

  console.warn("Failed to determine user type through all available methods");
  return null;
 },

 /**
  * Set up the auth state change listener
  */
 onAuthStateChange(
  callback: (session: Session | null, user: User | null) => void
 ) {
  return supabase.auth.onAuthStateChange((_, session) => {
   callback(session, session?.user ?? null);
  });
 },
};

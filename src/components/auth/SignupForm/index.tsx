import React, { useState } from "react";
import { Button } from "@/components/UI/button";
import { Input } from "@/components/UI/input";
import { Label } from "@/components/UI/label";
import { CardContent, CardFooter } from "@/components/UI/card";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";

const SignupForm = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [userType, setUserType] = useState<"freelancer" | "client">(
  "freelancer"
 );
 const [isSubmitting, setIsSubmitting] = useState(false);
 const { signUp } = useAuth();
 const { toast } = useToast();

 const handleSignUp = async (e: React.FormEvent) => {
  e.preventDefault();
  if (!email || !password) {
   toast({
    title: "Error",
    description: "Email and password are required",
    variant: "destructive",
   });
   return;
  }

  console.log(`Signing up with user type: ${userType}`);
  setIsSubmitting(true);
  try {
   await signUp(email, password, userType);
   toast({
    title: "Success",
    description: "Account created successfully. Please verify your email.",
   });
  } catch (error: any) {
   console.error("Signup error:", error);
   toast({
    title: "Error",
    description: error.message || "Failed to create account. Please try again.",
    variant: "destructive",
   });
  } finally {
   setIsSubmitting(false);
  }
 };

 return (
  <form onSubmit={handleSignUp}>
   <CardContent className="space-y-4">
    <div className="space-y-2">
     <Label htmlFor="reg-email">Email</Label>
     <Input
      id="reg-email"
      type="email"
      placeholder="name@example.com"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="reg-password">Password</Label>
     <Input
      id="reg-password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
     />
    </div>
    <div className="space-y-2">
     <Label>Account Type</Label>
     <div className="flex space-x-4">
      <Button
       type="button"
       variant={userType === "client" ? "default" : "outline"}
       onClick={() => {
        console.log("Setting user type to client");
        setUserType("client");
       }}
       className="flex-1"
      >
       Client
      </Button>
      <Button
       type="button"
       variant={userType === "freelancer" ? "default" : "outline"}
       onClick={() => {
        console.log("Setting user type to freelancer");
        setUserType("freelancer");
       }}
       className="flex-1"
      >
       Freelancer
      </Button>
     </div>
    </div>
   </CardContent>
   <CardFooter>
    <Button type="submit" className="w-full" disabled={isSubmitting}>
     {isSubmitting ? "Creating Account..." : "Create Account"}
    </Button>
   </CardFooter>
  </form>
 );
};

export default SignupForm;

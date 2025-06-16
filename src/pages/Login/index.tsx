import React, { useEffect } from "react";

import { useAuth } from "@/hooks/useAuth";
import LoginForm from "@/components/Auth/LoginForm";
import SignupForm from "@/components/Auth/SignupForm";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/UI";

const Login = () => {
 const { user, userType, redirectToDashboard } = useAuth();

 // Redirect if already logged in
 useEffect(() => {
  if (user && userType) {
   console.log("Login page: User is logged in with type:", userType);
   console.log("Attempting redirect from login page...");
   redirectToDashboard();
  }
 }, [user, userType, redirectToDashboard]);

 return (
  <div className="min-h-screen flex items-center justify-center px-4 py-24">
   <div className="w-full max-w-md">
    <Tabs defaultValue="login" className="w-full">
     <TabsList className="grid w-full grid-cols-2 mb-4">
      <TabsTrigger value="login">Login</TabsTrigger>
      <TabsTrigger value="register">Register</TabsTrigger>
     </TabsList>

     <TabsContent value="login">
      <Card>
       <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
         Enter your credentials to access your account
        </CardDescription>
       </CardHeader>
       <LoginForm />
      </Card>
     </TabsContent>

     <TabsContent value="register">
      <Card>
       <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>Register as a client or freelancer</CardDescription>
       </CardHeader>
       <SignupForm />
      </Card>
     </TabsContent>
    </Tabs>
   </div>
  </div>
 );
};

export default Login;

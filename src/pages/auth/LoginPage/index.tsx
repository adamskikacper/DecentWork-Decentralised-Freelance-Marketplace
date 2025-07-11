import React, { useState } from "react";
import { AuthTemplate, FormField, ActionButton } from "@/components";
import { Input } from "@/shared/ui";
import { Separator } from "@/shared/ui";

export const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const validateForm = () => {
    const newErrors: { email?: string; password?: string } = {};

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // TODO: Replace with actual authentication
      console.log("Login attempt:", { email, password });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Navigate to dashboard
      window.location.href = "/dashboard";
    } catch (error) {
      console.error("Login failed:", error);
      setErrors({ email: "Invalid email or password" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthTemplate
      title="Sign in to your account"
      subtitle="Welcome back! Please enter your details."
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <FormField
          label="Email address"
          id="email"
          required
          error={errors.email}
        >
          <Input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <FormField
          label="Password"
          id="password"
          required
          error={errors.password}
        >
          <Input
            id="password"
            type="password"
            autoComplete="current-password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormField>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a href="/forgot-password" className="font-medium text-primary hover:text-primary/80">
              Forgot your password?
            </a>
          </div>
        </div>

        <ActionButton
          type="submit"
          loading={isLoading}
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Signing in..." : "Sign in"}
        </ActionButton>

        <div className="relative">
          <Separator />
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">Or continue with</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <ActionButton
            type="button"
            variant="outline"
            onClick={() => console.log("Google login")}
            className="w-full"
          >
            Google
          </ActionButton>
          <ActionButton
            type="button"
            variant="outline"
            onClick={() => console.log("GitHub login")}
            className="w-full"
          >
            GitHub
          </ActionButton>
        </div>

        <div className="text-center">
          <span className="text-sm text-gray-600">
            Don't have an account?{" "}
            <a href="/signup" className="font-medium text-primary hover:text-primary/80">
              Sign up
            </a>
          </span>
        </div>
      </form>
    </AuthTemplate>
  );
};
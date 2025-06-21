import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import {
 InputOTP,
 InputOTPGroup,
 InputOTPSlot,
 InputOTPSeparator,
} from "./index";
import { Button } from "../Button";
import { Label } from "../Label";

/**
 * InputOTP component provides one-time password input with customizable length and validation.
 * Built for secure authentication flows with proper accessibility.
 */
const meta = {
 title: "UI/InputOTP",
 component: InputOTP,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  maxLength: {
   control: "number",
   description: "Maximum number of characters",
  },
  disabled: {
   control: "boolean",
   description: "Whether the input is disabled",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof InputOTP>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default OTP input
 */
export const Default: Story = {
 render: () => (
  <InputOTP maxLength={6}>
   <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
   </InputOTPGroup>
  </InputOTP>
 ),
};

/**
 * 4-digit PIN
 */
export const FourDigitPIN = {
 render: () => (
  <div className="space-y-2">
   <Label>Enter your 4-digit PIN</Label>
   <InputOTP maxLength={4}>
    <InputOTPGroup>
     <InputOTPSlot index={0} />
     <InputOTPSlot index={1} />
     <InputOTPSlot index={2} />
     <InputOTPSlot index={3} />
    </InputOTPGroup>
   </InputOTP>
  </div>
 ),
};

/**
 * 6-digit verification code
 */
export const SixDigitCode = {
 render: () => (
  <div className="space-y-2">
   <Label>Enter verification code</Label>
   <InputOTP maxLength={6}>
    <InputOTPGroup>
     <InputOTPSlot index={0} />
     <InputOTPSlot index={1} />
     <InputOTPSlot index={2} />
    </InputOTPGroup>
    <InputOTPSeparator />
    <InputOTPGroup>
     <InputOTPSlot index={3} />
     <InputOTPSlot index={4} />
     <InputOTPSlot index={5} />
    </InputOTPGroup>
   </InputOTP>
  </div>
 ),
};

/**
 * Interactive OTP with value display
 */
export const Interactive = {
 render: () => {
  const [value, setValue] = useState("");

  return (
   <div className="space-y-4">
    <div className="space-y-2">
     <Label>Enter OTP</Label>
     <InputOTP maxLength={6} value={value} onChange={setValue}>
      <InputOTPGroup>
       <InputOTPSlot index={0} />
       <InputOTPSlot index={1} />
       <InputOTPSlot index={2} />
       <InputOTPSlot index={3} />
       <InputOTPSlot index={4} />
       <InputOTPSlot index={5} />
      </InputOTPGroup>
     </InputOTP>
    </div>

    <div className="text-sm text-muted-foreground">
     <p>
      Current value: <span className="font-mono">{value || "empty"}</span>
     </p>
     <p>Length: {value.length}/6</p>
     <p>Complete: {value.length === 6 ? "Yes" : "No"}</p>
    </div>
   </div>
  );
 },
};

/**
 * Phone verification flow
 */
export const PhoneVerification = {
 render: () => {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = async () => {
   if (otp.length !== 6) return;

   setIsVerifying(true);
   // Simulate API call
   await new Promise((resolve) => setTimeout(resolve, 2000));
   setIsVerifying(false);
   setIsVerified(true);
  };

  const handleResend = () => {
   setOtp("");
   setIsVerified(false);
   console.log("Resending OTP...");
  };

  if (isVerified) {
   return (
    <div className="text-center space-y-4 max-w-sm">
     <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
      <svg
       className="w-8 h-8 text-green-600"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 13l4 4L19 7"
       />
      </svg>
     </div>
     <h3 className="text-lg font-medium">Phone Verified!</h3>
     <p className="text-muted-foreground">
      Your phone number has been successfully verified.
     </p>
    </div>
   );
  }

  return (
   <div className="space-y-6 max-w-sm">
    <div className="text-center space-y-2">
     <h3 className="text-lg font-medium">Verify Your Phone</h3>
     <p className="text-muted-foreground">
      We sent a 6-digit code to +1 (555) 123-4567
     </p>
    </div>

    <div className="space-y-4">
     <div className="space-y-2">
      <Label>Enter verification code</Label>
      <InputOTP
       maxLength={6}
       value={otp}
       onChange={setOtp}
       disabled={isVerifying}
      >
       <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
       </InputOTPGroup>
       <InputOTPSeparator />
       <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
       </InputOTPGroup>
      </InputOTP>
     </div>

     <Button
      onClick={handleVerify}
      disabled={otp.length !== 6 || isVerifying}
      className="w-full"
     >
      {isVerifying ? "Verifying..." : "Verify"}
     </Button>

     <div className="text-center">
      <Button
       variant="link"
       onClick={handleResend}
       disabled={isVerifying}
       className="text-sm"
      >
       Didn't receive the code? Resend
      </Button>
     </div>
    </div>
   </div>
  );
 },
};

/**
 * Two-factor authentication
 */
export const TwoFactorAuth = {
 render: () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
   e.preventDefault();

   if (code.length !== 6) {
    setError("Please enter a complete 6-digit code");
    return;
   }

   setError("");
   setIsLoading(true);

   // Simulate authentication
   await new Promise((resolve) => setTimeout(resolve, 1500));

   if (code === "123456") {
    console.log("Authentication successful!");
    setError("");
   } else {
    setError("Invalid code. Please try again.");
   }

   setIsLoading(false);
  };

  return (
   <form onSubmit={handleSubmit} className="space-y-6 max-w-sm">
    <div className="text-center space-y-2">
     <h3 className="text-lg font-medium">Two-Factor Authentication</h3>
     <p className="text-muted-foreground">
      Enter the 6-digit code from your authenticator app
     </p>
    </div>

    <div className="space-y-4">
     <div className="space-y-2">
      <Label>Authentication Code</Label>
      <InputOTP
       maxLength={6}
       value={code}
       onChange={(value) => {
        setCode(value);
        if (error) setError("");
       }}
       disabled={isLoading}
      >
       <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
       </InputOTPGroup>
      </InputOTP>

      {error && <p className="text-sm text-red-600">{error}</p>}
     </div>

     <Button
      type="submit"
      disabled={isLoading || code.length === 0}
      className="w-full"
     >
      {isLoading ? "Verifying..." : "Verify & Continue"}
     </Button>

     <div className="text-center">
      <Button variant="link" className="text-sm">
       Use backup code instead
      </Button>
     </div>
    </div>

    <div className="text-xs text-muted-foreground text-center">
     <p>Tip: Try entering "123456" for a successful demo</p>
    </div>
   </form>
  );
 },
};

/**
 * Banking PIN entry
 */
export const BankingPIN = {
 render: () => {
  const [pin, setPin] = useState("");
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 3;

  const handleSubmit = (e: React.FormEvent) => {
   e.preventDefault();

   if (pin.length !== 4) return;

   if (pin === "1234") {
    console.log("PIN accepted");
    setAttempts(0);
    setPin("");
   } else {
    setAttempts((prev) => prev + 1);
    setPin("");
   }
  };

  const isLocked = attempts >= maxAttempts;

  return (
   <form onSubmit={handleSubmit} className="space-y-6 max-w-sm">
    <div className="text-center space-y-2">
     <div className="w-12 h-12 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
      <svg
       className="w-6 h-6 text-blue-600"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
      >
       <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
       />
      </svg>
     </div>
     <h3 className="text-lg font-medium">Enter Your PIN</h3>
     <p className="text-muted-foreground">
      Enter your 4-digit security PIN to continue
     </p>
    </div>

    {isLocked ? (
     <div className="text-center space-y-4">
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
       <p className="text-red-800 font-medium">Account Locked</p>
       <p className="text-red-600 text-sm mt-1">
        Too many incorrect attempts. Please contact support.
       </p>
      </div>
     </div>
    ) : (
     <div className="space-y-4">
      <div className="space-y-2">
       <InputOTP maxLength={4} value={pin} onChange={setPin} type="password">
        <InputOTPGroup>
         <InputOTPSlot index={0} />
         <InputOTPSlot index={1} />
         <InputOTPSlot index={2} />
         <InputOTPSlot index={3} />
        </InputOTPGroup>
       </InputOTP>

       {attempts > 0 && (
        <p className="text-sm text-red-600">
         Incorrect PIN. {maxAttempts - attempts} attempts remaining.
        </p>
       )}
      </div>

      <Button type="submit" disabled={pin.length !== 4} className="w-full">
       Continue
      </Button>

      <div className="text-center">
       <Button variant="link" className="text-sm">
        Forgot your PIN?
       </Button>
      </div>
     </div>
    )}

    <div className="text-xs text-muted-foreground text-center">
     <p>Tip: Try "1234" for the correct PIN</p>
    </div>
   </form>
  );
 },
};

/**
 * Disabled state
 */
export const Disabled = {
 render: () => (
  <div className="space-y-2">
   <Label>Disabled OTP Input</Label>
   <InputOTP maxLength={6} disabled value="123">
    <InputOTPGroup>
     <InputOTPSlot index={0} />
     <InputOTPSlot index={1} />
     <InputOTPSlot index={2} />
     <InputOTPSlot index={3} />
     <InputOTPSlot index={4} />
     <InputOTPSlot index={5} />
    </InputOTPGroup>
   </InputOTP>
  </div>
 ),
};

/**
 * Different lengths
 */
export const DifferentLengths = {
 render: () => (
  <div className="space-y-6">
   <div className="space-y-2">
    <Label>4-digit Code</Label>
    <InputOTP maxLength={4}>
     <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
     </InputOTPGroup>
    </InputOTP>
   </div>

   <div className="space-y-2">
    <Label>6-digit Code</Label>
    <InputOTP maxLength={6}>
     <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
     </InputOTPGroup>
    </InputOTP>
   </div>

   <div className="space-y-2">
    <Label>8-digit Code with Separators</Label>
    <InputOTP maxLength={8}>
     <InputOTPGroup>
      <InputOTPSlot index={0} />
      <InputOTPSlot index={1} />
      <InputOTPSlot index={2} />
      <InputOTPSlot index={3} />
     </InputOTPGroup>
     <InputOTPSeparator />
     <InputOTPGroup>
      <InputOTPSlot index={4} />
      <InputOTPSlot index={5} />
      <InputOTPSlot index={6} />
      <InputOTPSlot index={7} />
     </InputOTPGroup>
    </InputOTP>
   </div>
  </div>
 ),
};

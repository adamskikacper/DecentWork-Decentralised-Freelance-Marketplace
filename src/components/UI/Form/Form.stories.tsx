import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
// import { useForm } from "react-hook-form";
import {
 Form,
 FormControl,
 FormDescription,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "./index";
import { Button } from "../Button";
import { Input } from "../Input";
import { Textarea } from "../Textarea";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "../Select";
import { Checkbox } from "../Checkbox";
import { RadioGroup, RadioGroupItem } from "../RadioGroup";
import { Switch } from "../Switch";

/**
 * Form component provides comprehensive form handling with validation.
 * Built on React Hook Form with shadcn/ui form components.
 */
const meta = {
 title: "UI/Form",
 component: Form,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic form
 */
export const Basic = {
 render: () => {
  const form = useForm({
   defaultValues: {
    username: "",
    email: "",
   },
  });

  const onSubmit = (data: any) => {
   console.log("Form submitted:", data);
  };

  return (
   <Form {...form}>
    <form
     onSubmit={form.handleSubmit(onSubmit)}
     className="space-y-4 w-[400px]"
    >
     <FormField
      control={form.control}
      name="username"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Username</FormLabel>
        <FormControl>
         <Input placeholder="Enter your username" {...field} />
        </FormControl>
        <FormDescription>This is your public display name.</FormDescription>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
         <Input type="email" placeholder="Enter your email" {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />

     <Button type="submit">Submit</Button>
    </form>
   </Form>
  );
 },
};

/**
 * Form with validation
 */
export const WithValidation = {
 render: () => {
  const form = useForm({
   defaultValues: {
    name: "",
    email: "",
    age: "",
   },
  });

  const onSubmit = (data: any) => {
   console.log("Form submitted:", data);
  };

  return (
   <Form {...form}>
    <form
     onSubmit={form.handleSubmit(onSubmit)}
     className="space-y-4 w-[400px]"
    >
     <FormField
      control={form.control}
      name="name"
      rules={{
       required: "Name is required",
       minLength: { value: 2, message: "Name must be at least 2 characters" },
      }}
      render={({ field }) => (
       <FormItem>
        <FormLabel>Full Name</FormLabel>
        <FormControl>
         <Input placeholder="Enter your full name" {...field} />
        </FormControl>
        <FormDescription>Enter your first and last name.</FormDescription>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="email"
      rules={{
       required: "Email is required",
       pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
       },
      }}
      render={({ field }) => (
       <FormItem>
        <FormLabel>Email Address</FormLabel>
        <FormControl>
         <Input type="email" placeholder="Enter your email" {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="age"
      rules={{
       required: "Age is required",
       min: { value: 18, message: "Must be at least 18 years old" },
       max: { value: 120, message: "Must be less than 120 years old" },
      }}
      render={({ field }) => (
       <FormItem>
        <FormLabel>Age</FormLabel>
        <FormControl>
         <Input type="number" placeholder="Enter your age" {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />

     <Button type="submit">Submit</Button>
    </form>
   </Form>
  );
 },
};

/**
 * Complex form with multiple field types
 */
export const ComplexForm = {
 render: () => {
  const form = useForm({
   defaultValues: {
    personalInfo: {
     firstName: "",
     lastName: "",
     email: "",
     phone: "",
    },
    preferences: {
     category: "",
     notifications: false,
     newsletter: false,
     theme: "light",
    },
    bio: "",
    terms: false,
   },
  });

  const onSubmit = (data: any) => {
   console.log("Form submitted:", data);
  };

  return (
   <Form {...form}>
    <form
     onSubmit={form.handleSubmit(onSubmit)}
     className="space-y-6 w-[500px]"
    >
     <div className="space-y-4">
      <h3 className="text-lg font-medium">Personal Information</h3>

      <div className="grid grid-cols-2 gap-4">
       <FormField
        control={form.control}
        name="personalInfo.firstName"
        rules={{ required: "First name is required" }}
        render={({ field }) => (
         <FormItem>
          <FormLabel>First Name</FormLabel>
          <FormControl>
           <Input placeholder="John" {...field} />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />

       <FormField
        control={form.control}
        name="personalInfo.lastName"
        rules={{ required: "Last name is required" }}
        render={({ field }) => (
         <FormItem>
          <FormLabel>Last Name</FormLabel>
          <FormControl>
           <Input placeholder="Doe" {...field} />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
      </div>

      <FormField
       control={form.control}
       name="personalInfo.email"
       rules={{
        required: "Email is required",
        pattern: {
         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         message: "Invalid email address",
        },
       }}
       render={({ field }) => (
        <FormItem>
         <FormLabel>Email</FormLabel>
         <FormControl>
          <Input type="email" placeholder="john@example.com" {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />

      <FormField
       control={form.control}
       name="personalInfo.phone"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Phone (Optional)</FormLabel>
         <FormControl>
          <Input type="tel" placeholder="+1 (555) 123-4567" {...field} />
         </FormControl>
         <FormDescription>
          We'll only use this for important updates.
         </FormDescription>
         <FormMessage />
        </FormItem>
       )}
      />
     </div>

     <div className="space-y-4">
      <h3 className="text-lg font-medium">Bio</h3>

      <FormField
       control={form.control}
       name="bio"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Tell us about yourself</FormLabel>
         <FormControl>
          <Textarea
           placeholder="Write a brief bio..."
           className="min-h-[100px]"
           {...field}
          />
         </FormControl>
         <FormDescription>
          Share a bit about your background and interests.
         </FormDescription>
         <FormMessage />
        </FormItem>
       )}
      />
     </div>

     <div className="space-y-4">
      <h3 className="text-lg font-medium">Preferences</h3>

      <FormField
       control={form.control}
       name="preferences.category"
       rules={{ required: "Please select a category" }}
       render={({ field }) => (
        <FormItem>
         <FormLabel>Category</FormLabel>
         <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
           <SelectTrigger>
            <SelectValue placeholder="Select a category" />
           </SelectTrigger>
          </FormControl>
          <SelectContent>
           <SelectItem value="developer">Developer</SelectItem>
           <SelectItem value="designer">Designer</SelectItem>
           <SelectItem value="manager">Manager</SelectItem>
           <SelectItem value="other">Other</SelectItem>
          </SelectContent>
         </Select>
         <FormMessage />
        </FormItem>
       )}
      />

      <FormField
       control={form.control}
       name="preferences.theme"
       render={({ field }) => (
        <FormItem className="space-y-3">
         <FormLabel>Theme Preference</FormLabel>
         <FormControl>
          <RadioGroup
           onValueChange={field.onChange}
           defaultValue={field.value}
           className="flex flex-col space-y-1"
          >
           <div className="flex items-center space-x-2">
            <RadioGroupItem value="light" id="light" />
            <FormLabel htmlFor="light">Light</FormLabel>
           </div>
           <div className="flex items-center space-x-2">
            <RadioGroupItem value="dark" id="dark" />
            <FormLabel htmlFor="dark">Dark</FormLabel>
           </div>
           <div className="flex items-center space-x-2">
            <RadioGroupItem value="system" id="system" />
            <FormLabel htmlFor="system">System</FormLabel>
           </div>
          </RadioGroup>
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />

      <FormField
       control={form.control}
       name="preferences.notifications"
       render={({ field }) => (
        <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
         <div className="space-y-0.5">
          <FormLabel className="text-base">Push Notifications</FormLabel>
          <FormDescription>
           Receive notifications about updates and news.
          </FormDescription>
         </div>
         <FormControl>
          <Switch checked={field.value} onCheckedChange={field.onChange} />
         </FormControl>
        </FormItem>
       )}
      />

      <FormField
       control={form.control}
       name="preferences.newsletter"
       render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0">
         <FormControl>
          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
         </FormControl>
         <div className="space-y-1 leading-none">
          <FormLabel>Subscribe to newsletter</FormLabel>
          <FormDescription>
           Get weekly updates about new features and tips.
          </FormDescription>
         </div>
        </FormItem>
       )}
      />
     </div>

     <FormField
      control={form.control}
      name="terms"
      rules={{ required: "You must accept the terms and conditions" }}
      render={({ field }) => (
       <FormItem className="flex flex-row items-start space-x-3 space-y-0">
        <FormControl>
         <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <div className="space-y-1 leading-none">
         <FormLabel>Accept terms and conditions *</FormLabel>
         <FormDescription>
          You agree to our Terms of Service and Privacy Policy.
         </FormDescription>
         <FormMessage />
        </div>
       </FormItem>
      )}
     />

     <div className="flex gap-4">
      <Button type="submit" className="flex-1">
       Create Account
      </Button>
      <Button type="button" variant="outline" onClick={() => form.reset()}>
       Reset
      </Button>
     </div>
    </form>
   </Form>
  );
 },
};

/**
 * Login form
 */
export const LoginForm = {
 render: () => {
  const form = useForm({
   defaultValues: {
    email: "",
    password: "",
    rememberMe: false,
   },
  });

  const onSubmit = (data: any) => {
   console.log("Login attempt:", data);
  };

  return (
   <Form {...form}>
    <form
     onSubmit={form.handleSubmit(onSubmit)}
     className="space-y-4 w-[350px]"
    >
     <div className="space-y-2 text-center">
      <h2 className="text-2xl font-bold">Sign In</h2>
      <p className="text-muted-foreground">
       Enter your credentials to access your account
      </p>
     </div>

     <FormField
      control={form.control}
      name="email"
      rules={{
       required: "Email is required",
       pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "Invalid email address",
       },
      }}
      render={({ field }) => (
       <FormItem>
        <FormLabel>Email</FormLabel>
        <FormControl>
         <Input type="email" placeholder="Enter your email" {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="password"
      rules={{
       required: "Password is required",
       minLength: {
        value: 6,
        message: "Password must be at least 6 characters",
       },
      }}
      render={({ field }) => (
       <FormItem>
        <FormLabel>Password</FormLabel>
        <FormControl>
         <Input type="password" placeholder="Enter your password" {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="rememberMe"
      render={({ field }) => (
       <FormItem className="flex flex-row items-start space-x-3 space-y-0">
        <FormControl>
         <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <div className="space-y-1 leading-none">
         <FormLabel>Remember me</FormLabel>
         <FormDescription>Keep me signed in on this device</FormDescription>
        </div>
       </FormItem>
      )}
     />

     <Button type="submit" className="w-full">
      Sign In
     </Button>

     <div className="text-center">
      <Button variant="link" className="text-sm">
       Forgot your password?
      </Button>
     </div>
    </form>
   </Form>
  );
 },
};

/**
 * Contact form
 */
export const ContactForm = {
 render: () => {
  const form = useForm({
   defaultValues: {
    name: "",
    email: "",
    subject: "",
    message: "",
    priority: "medium",
    subscribe: false,
   },
  });

  const onSubmit = (data: any) => {
   console.log("Contact form submitted:", data);
  };

  return (
   <Form {...form}>
    <form
     onSubmit={form.handleSubmit(onSubmit)}
     className="space-y-4 w-[450px]"
    >
     <div className="space-y-2 text-center">
      <h2 className="text-2xl font-bold">Contact Us</h2>
      <p className="text-muted-foreground">
       We'd love to hear from you. Send us a message!
      </p>
     </div>

     <div className="grid grid-cols-2 gap-4">
      <FormField
       control={form.control}
       name="name"
       rules={{ required: "Name is required" }}
       render={({ field }) => (
        <FormItem>
         <FormLabel>Name</FormLabel>
         <FormControl>
          <Input placeholder="Your name" {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />

      <FormField
       control={form.control}
       name="email"
       rules={{
        required: "Email is required",
        pattern: {
         value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
         message: "Invalid email address",
        },
       }}
       render={({ field }) => (
        <FormItem>
         <FormLabel>Email</FormLabel>
         <FormControl>
          <Input type="email" placeholder="your@email.com" {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </div>

     <FormField
      control={form.control}
      name="subject"
      rules={{ required: "Subject is required" }}
      render={({ field }) => (
       <FormItem>
        <FormLabel>Subject</FormLabel>
        <FormControl>
         <Input placeholder="What's this about?" {...field} />
        </FormControl>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="priority"
      render={({ field }) => (
       <FormItem>
        <FormLabel>Priority</FormLabel>
        <Select onValueChange={field.onChange} defaultValue={field.value}>
         <FormControl>
          <SelectTrigger>
           <SelectValue placeholder="Select priority" />
          </SelectTrigger>
         </FormControl>
         <SelectContent>
          <SelectItem value="low">Low</SelectItem>
          <SelectItem value="medium">Medium</SelectItem>
          <SelectItem value="high">High</SelectItem>
          <SelectItem value="urgent">Urgent</SelectItem>
         </SelectContent>
        </Select>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="message"
      rules={{
       required: "Message is required",
       minLength: {
        value: 10,
        message: "Message must be at least 10 characters",
       },
      }}
      render={({ field }) => (
       <FormItem>
        <FormLabel>Message</FormLabel>
        <FormControl>
         <Textarea
          placeholder="Tell us more about your inquiry..."
          className="min-h-[120px]"
          {...field}
         />
        </FormControl>
        <FormDescription>
         Please provide as much detail as possible.
        </FormDescription>
        <FormMessage />
       </FormItem>
      )}
     />

     <FormField
      control={form.control}
      name="subscribe"
      render={({ field }) => (
       <FormItem className="flex flex-row items-start space-x-3 space-y-0">
        <FormControl>
         <Checkbox checked={field.value} onCheckedChange={field.onChange} />
        </FormControl>
        <div className="space-y-1 leading-none">
         <FormLabel>Subscribe to updates</FormLabel>
         <FormDescription>
          Get notified about new features and updates.
         </FormDescription>
        </div>
       </FormItem>
      )}
     />

     <Button type="submit" className="w-full">
      Send Message
     </Button>
    </form>
   </Form>
  );
 },
};

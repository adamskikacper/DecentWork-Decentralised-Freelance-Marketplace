import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/shared/ui/Form";
import { Input } from "@/shared/ui/Input";
import { Textarea } from "@/shared/ui/Textarea";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/Avatar";
import { Button } from "@/shared/ui/Button";
import { Camera } from "lucide-react";
import { useForm } from "react-hook-form";

interface BasicInfoFormData {
 firstName: string;
 lastName: string;
 email: string;
 location: string;
 bio: string;
}

export const BasicInfoSection = () => {
 const form = useForm<BasicInfoFormData>({
  defaultValues: {
   firstName: "",
   lastName: "",
   email: "",
   location: "",
   bio: "",
  },
 });

 const onSubmit = (data: BasicInfoFormData) => {
  console.log(data);
 };

 return (
  <Card>
   <CardHeader>
    <CardTitle>Basic Information</CardTitle>
   </CardHeader>
   <CardContent>
    <Form {...form}>
     <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="flex items-center space-x-4">
       <Avatar className="w-20 h-20">
        <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
        <AvatarFallback>JD</AvatarFallback>
       </Avatar>
       <div>
        <Button variant="outline" size="sm" type="button">
         <Camera className="w-4 h-4 mr-2" />
         Change Photo
        </Button>
        <p className="text-sm text-muted-foreground mt-1">
         JPG, PNG or GIF. Max size 2MB.
        </p>
       </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
       <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
         <FormItem>
          <FormLabel>First Name</FormLabel>
          <FormControl>
           <Input placeholder="Enter your first name" {...field} />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
       <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
         <FormItem>
          <FormLabel>Last Name</FormLabel>
          <FormControl>
           <Input placeholder="Enter your last name" {...field} />
          </FormControl>
          <FormMessage />
         </FormItem>
        )}
       />
      </div>

      <FormField
       control={form.control}
       name="email"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Email</FormLabel>
         <FormControl>
          <Input
           type="email"
           placeholder="Enter your email"
           disabled
           {...field}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />

      <FormField
       control={form.control}
       name="location"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Location</FormLabel>
         <FormControl>
          <Input placeholder="City, Country" {...field} />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />

      <FormField
       control={form.control}
       name="bio"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Bio</FormLabel>
         <FormControl>
          <Textarea
           placeholder="Tell us about yourself..."
           className="min-h-[100px]"
           {...field}
          />
         </FormControl>
         <FormMessage />
        </FormItem>
       )}
      />
     </form>
    </Form>
   </CardContent>
  </Card>
 );
};

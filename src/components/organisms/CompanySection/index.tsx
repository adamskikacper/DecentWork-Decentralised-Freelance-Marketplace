import { Label } from "@/shared/ui/Label";
import { Input } from "@/shared/ui/Input";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/shared/ui/Select";

export const CompanySection = () => {
 return (
  <div className="space-y-4">
   <div className="space-y-2">
    <Label htmlFor="companyName">Company Name</Label>
    <Input id="companyName" placeholder="Enter company name" />
   </div>

   <div className="space-y-2">
    <Label htmlFor="companySize">Company Size</Label>
    <Select>
     <SelectTrigger>
      <SelectValue placeholder="Select company size" />
     </SelectTrigger>
     <SelectContent>
      <SelectItem value="1-10">1-10 employees</SelectItem>
      <SelectItem value="11-50">11-50 employees</SelectItem>
      <SelectItem value="51-200">51-200 employees</SelectItem>
      <SelectItem value="201-500">201-500 employees</SelectItem>
      <SelectItem value="500+">500+ employees</SelectItem>
     </SelectContent>
    </Select>
   </div>

   <div className="space-y-2">
    <Label htmlFor="industry">Industry</Label>
    <Select>
     <SelectTrigger>
      <SelectValue placeholder="Select industry" />
     </SelectTrigger>
     <SelectContent>
      <SelectItem value="technology">Technology</SelectItem>
      <SelectItem value="finance">Finance</SelectItem>
      <SelectItem value="healthcare">Healthcare</SelectItem>
      <SelectItem value="education">Education</SelectItem>
      <SelectItem value="retail">Retail</SelectItem>
      <SelectItem value="manufacturing">Manufacturing</SelectItem>
      <SelectItem value="consulting">Consulting</SelectItem>
      <SelectItem value="other">Other</SelectItem>
     </SelectContent>
    </Select>
   </div>

   <div className="space-y-2">
    <Label htmlFor="companyDescription">Company Description</Label>
    <textarea
     id="companyDescription"
     className="flex min-h-[80px] w-full rounded-md border border-input bg-input-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
     placeholder="Briefly describe your company..."
    />
   </div>
  </div>
 );
};

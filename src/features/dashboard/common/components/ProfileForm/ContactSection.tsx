import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card";
import { Label } from "@/shared/ui/Label";
import { Input } from "@/shared/ui/Input";
import { Globe, Github, Linkedin } from "lucide-react";

export const ContactSection = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Contact Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="portfolio">Portfolio Website</Label>
          <div className="relative">
            <Globe className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              id="portfolio" 
              placeholder="https://yourportfolio.com"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="github">GitHub Profile</Label>
          <div className="relative">
            <Github className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              id="github" 
              placeholder="https://github.com/yourusername"
              className="pl-10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="linkedin">LinkedIn Profile</Label>
          <div className="relative">
            <Linkedin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input 
              id="linkedin" 
              placeholder="https://linkedin.com/in/yourprofile"
              className="pl-10"
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
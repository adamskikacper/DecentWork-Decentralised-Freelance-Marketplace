import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/shared/ui/Form";
import { Input } from "@/shared/ui/Input";
import { Globe, Github, Linkedin } from "lucide-react";
import { useForm } from "react-hook-form";

interface ContactFormData {
  portfolio: string;
  github: string;
  linkedin: string;
}

export const ContactSection = () => {
  const form = useForm<ContactFormData>({
    defaultValues: {
      portfolio: "",
      github: "",
      linkedin: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Socials</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="portfolio"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Portfolio Website</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Globe className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="https://yourportfolio.com"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="github"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>GitHub Profile</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Github className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="https://github.com/yourusername"
                        className="pl-10"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn Profile</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Linkedin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="pl-10"
                        {...field}
                      />
                    </div>
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
import {
 BasicInfoSection,
 ContactSection,
 ProfessionalSection,
 PortfolioSection,
} from "@/components";
import { Button } from "@/shared/ui";
import { Save, X } from "lucide-react";

export const FreelancerProfile = () => {
 return (
  <div className="space-y-6">
   <BasicInfoSection />
   <ProfessionalSection />
   <ContactSection />
   <PortfolioSection />
   <div className="flex items-center justify-end">
    <div className="flex gap-2">
     <Button variant="outline">
      <X className="w-4 h-4 mr-2" />
      Cancel
     </Button>
     <Button>
      <Save className="w-4 h-4 mr-2" />
      Save Changes
     </Button>
    </div>
   </div>
  </div>
 );
};

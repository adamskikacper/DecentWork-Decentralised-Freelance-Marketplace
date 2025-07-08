import { BasicInfoSection } from "@/features/dashboard/common/components/ProfileForm/BasicInfoSection";
import { ContactSection } from "@/features/dashboard/common/components/ProfileForm/ContactSection";
import { ProfessionalSection } from "./ProfessionalSection";
import { PortfolioSection } from "./PortfolioSection";
import { Button } from "@/shared/ui/Button";
import { Save, X } from "lucide-react";

export const FreelancerProfile = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Freelancer Profile</h1>
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

      <BasicInfoSection />
      <ContactSection />
      <ProfessionalSection />
      <PortfolioSection />
    </div>
  );
};
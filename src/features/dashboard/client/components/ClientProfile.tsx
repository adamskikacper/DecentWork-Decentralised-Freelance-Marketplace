import { BasicInfoSection } from "@/features/dashboard/common/components/ProfileForm/BasicInfoSection";
import { CompanySection } from "./CompanySection";
import { Button } from "@/shared/ui/Button";
import { Save, X } from "lucide-react";

export const ClientProfile = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Client Profile</h1>
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
      <CompanySection />
    </div>
  );
};
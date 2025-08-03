import React, { useState } from "react";
import { PageLayout } from "@/components/templates";
import { useAuth } from "@/app/providers/AuthProvider";
import { DashboardSection } from "@/components/organisms/DashboardSection";
import {
 BasicInfoSection,
 ContactSection,
 ProfessionalSection,
 PortfolioSection,
 CompanySection,
 NoDataCard,
} from "@/components";
import { Button, Card, CardContent } from "@/shared/ui";
import {
 Briefcase,
 Building,
 FolderOpen,
 Globe,
 Save,
 User,
 X,
} from "lucide-react";

export const ProfilePage = () => {
 const { userType } = useAuth();
 const [showBasicInfo, setShowBasicInfo] = useState(false);
 const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);
 const [showSocials, setShowSocials] = useState(false);
 const [showProjects, setShowProjects] = useState(false);
 const [showCompanyInfo, setShowCompanyInfo] = useState(false);

 return (
  <PageLayout
   breadcrumbs={[
    { label: "Dashboard", href: "/dashboard" },
    { label: "Profile" },
   ]}
  >
   <div className="space-y-8">
    {userType === "freelancer" && (
     <>
      <DashboardSection
       title="Basic Information"
       description="Your personal details and contact information."
      >
       {!showBasicInfo ? (
        <NoDataCard
         title="No basic information"
         description="Add your personal details and contact information."
         icon={<User className="w-12 h-12" />}
         action={
          <Button onClick={() => setShowBasicInfo(true)}>
           Add Basic Information
          </Button>
         }
        />
       ) : (
        <Card>
         <CardContent className="pt-6">
          <div className="space-y-4">
           <BasicInfoSection />
           <div className="flex justify-end">
            <Button variant="outline" onClick={() => setShowBasicInfo(false)}>
             Cancel
            </Button>
           </div>
          </div>
         </CardContent>
        </Card>
       )}
      </DashboardSection>

      <DashboardSection
       title="Professional Information"
       description="Your skills, experience, and professional details."
      >
       {!showProfessionalInfo ? (
        <NoDataCard
         title="No professional information"
         description="Add your skills, experience, and professional details."
         icon={<Briefcase className="w-12 h-12" />}
         action={
          <Button onClick={() => setShowProfessionalInfo(true)}>
           Add Professional Information
          </Button>
         }
        />
       ) : (
        <Card>
         <CardContent className="pt-6">
          <div className="space-y-4">
           <ProfessionalSection />
           <div className="flex justify-end">
            <Button
             variant="outline"
             onClick={() => setShowProfessionalInfo(false)}
            >
             Cancel
            </Button>
           </div>
          </div>
         </CardContent>
        </Card>
       )}
      </DashboardSection>

      <DashboardSection
       title="Socials"
       description="Your online presence and professional links."
      >
       {!showSocials ? (
        <NoDataCard
         title="No social links"
         description="Add your online presence and professional links."
         icon={<Globe className="w-12 h-12" />}
         action={
          <Button onClick={() => setShowSocials(true)}>Add Social Links</Button>
         }
        />
       ) : (
        <Card>
         <CardContent className="pt-6">
          <div className="space-y-4">
           <ContactSection />
           <div className="flex justify-end">
            <Button variant="outline" onClick={() => setShowSocials(false)}>
             Cancel
            </Button>
           </div>
          </div>
         </CardContent>
        </Card>
       )}
      </DashboardSection>

      <DashboardSection
       title="Projects"
       description="Showcase your portfolio and project links."
      >
       {!showProjects ? (
        <NoDataCard
         title="No projects"
         description="Add your portfolio and project links."
         icon={<FolderOpen className="w-12 h-12" />}
         action={
          <Button onClick={() => setShowProjects(true)}>Add Projects</Button>
         }
        />
       ) : (
        <Card>
         <CardContent className="pt-6">
          <div className="space-y-4">
           <PortfolioSection />
           <div className="flex justify-end">
            <Button variant="outline" onClick={() => setShowProjects(false)}>
             Cancel
            </Button>
           </div>
          </div>
         </CardContent>
        </Card>
       )}
      </DashboardSection>

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
     </>
    )}

    {userType === "client" && (
     <>
      <DashboardSection
       title="Basic Information"
       description="Your personal details and contact information."
      >
       {!showBasicInfo ? (
        <NoDataCard
         title="No basic information"
         description="Add your personal details and contact information."
         icon={<User className="w-12 h-12" />}
         action={
          <Button onClick={() => setShowBasicInfo(true)}>
           Add Basic Information
          </Button>
         }
        />
       ) : (
        <Card>
         <CardContent className="pt-6">
          <div className="space-y-4">
           <BasicInfoSection />
           <div className="flex justify-end">
            <Button variant="outline" onClick={() => setShowBasicInfo(false)}>
             Cancel
            </Button>
           </div>
          </div>
         </CardContent>
        </Card>
       )}
      </DashboardSection>

      <DashboardSection
       title="Company Information"
       description="Your company details and business information."
      >
       {!showCompanyInfo ? (
        <NoDataCard
         title="No company information"
         description="Add your company details and business information."
         icon={<Building className="w-12 h-12" />}
         action={
          <Button onClick={() => setShowCompanyInfo(true)}>
           Add Company Information
          </Button>
         }
        />
       ) : (
        <Card>
         <CardContent className="pt-6">
          <div className="space-y-4">
           <CompanySection />
           <div className="flex justify-end">
            <Button variant="outline" onClick={() => setShowCompanyInfo(false)}>
             Cancel
            </Button>
           </div>
          </div>
         </CardContent>
        </Card>
       )}
      </DashboardSection>

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
     </>
    )}
   </div>
  </PageLayout>
 );
};

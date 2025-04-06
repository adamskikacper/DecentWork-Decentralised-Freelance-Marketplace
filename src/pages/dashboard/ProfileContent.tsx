import { memo } from "react";
import { User } from "../../types";
import SectionHeader from "../../components/Layout/SectionHeader";
import Breadcrumbs from "@/components/Layout/Breadcrumbs";
import { DASHBOARD_LINKS } from "@/constants";

interface ProfileContentProps {
 user: Partial<User>;
}

const ProfileContent = memo(({ user }: ProfileContentProps) => {
 return (
  <>
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
     { label: "Profile" },
    ]}
   />
   <SectionHeader
    title="Profile Settings"
    description="Manage your account settings and preferences."
   />

   <div className="glass-card rounded-xl p-6">
    <form className="space-y-6">
     <div>
      <label htmlFor="profileName" className="block text-sm font-medium mb-2">
       Full Name
      </label>
      <input
       id="profileName"
       type="text"
       className="w-full px-4 py-2 rounded-md border border-border bg-background"
       defaultValue={user.name}
      />
     </div>

     <div>
      <label htmlFor="profileEmail" className="block text-sm font-medium mb-2">
       Email Address
      </label>
      <input
       id="profileEmail"
       type="email"
       className="w-full px-4 py-2 rounded-md border border-border bg-background"
       defaultValue={user.email}
      />
     </div>

     <div>
      <label htmlFor="profileBio" className="block text-sm font-medium mb-2">
       Bio
      </label>
      <textarea
       id="profileBio"
       className="w-full px-4 py-2 rounded-md border border-border bg-background min-h-[120px]"
       placeholder="Tell us about yourself"
      />
     </div>

     <button
      type="submit"
      className="w-full px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
     >
      Save Changes
     </button>
    </form>
   </div>
  </>
 );
});

ProfileContent.displayName = "ProfileContent";

export default ProfileContent;

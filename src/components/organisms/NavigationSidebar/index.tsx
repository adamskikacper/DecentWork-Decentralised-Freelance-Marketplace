import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import { UserCard } from "@/components/molecules";
import { DASHBOARD_LINKS } from "@/shared/constants";
import {
 User,
 PlusCircle,
 Briefcase,
 Search,
 MessageCircle,
 Home as HomeIcon,
 FileText,
} from "lucide-react";
import {
 Sidebar,
 SidebarContent,
 SidebarHeader,
 SidebarMenu,
 SidebarMenuButton,
 SidebarMenuItem,
 SidebarFooter,
 SidebarSeparator,
} from "@/shared/ui";

export interface NavigationItem {
 to: string;
 icon: React.ComponentType<{ className?: string }>;
 label: string;
}

export interface NavigationSidebarProps {
 className?: string;
}

export const NavigationSidebar = ({ className }: NavigationSidebarProps) => {
 const { user, userType } = useAuth();
 const location = useLocation();

 const getNavigationItems = (): NavigationItem[] => {
  const baseItems: NavigationItem[] = [
   {
    to: "/dashboard/home",
    icon: HomeIcon,
    label: "Dashboard",
   },
  ];

  const userSpecificItems: NavigationItem[] =
   userType === "client"
    ? [
       {
        to: "/dashboard/freelancers",
        icon: User,
        label: "Freelancers",
       },
       {
        to: "/dashboard/post-job",
        icon: PlusCircle,
        label: "Post a Job",
       },
       {
        to: "/dashboard/jobs",
        icon: Briefcase,
        label: "Jobs",
       },
      ]
    : [
       {
        to: DASHBOARD_LINKS.FIND_JOBS,
        icon: Search,
        label: "Find Jobs",
       },
       {
        to: "/dashboard/my-jobs",
        icon: FileText,
        label: "My Jobs",
       },
      ];

  const commonItems: NavigationItem[] = [
   {
    to: "/dashboard/messages",
    icon: MessageCircle,
    label: "Messages",
   },
   {
    to: "/dashboard/profile",
    icon: User,
    label: "Profile",
   },
  ];

  return [...baseItems, ...userSpecificItems, ...commonItems];
 };

 const isLinkActive = (linkPath: string): boolean => {
  return (
   location.pathname === linkPath ||
   location.pathname.startsWith(linkPath + "/")
  );
 };

 const navigationItems = getNavigationItems();

 return (
  <Sidebar className={className}>
   <SidebarHeader className="border-b">
    <div className="px-2 py-2">
     <h2 className="text-lg font-semibold text-sidebar-foreground">DecentWork</h2>
    </div>
   </SidebarHeader>

   <SidebarContent>
    <SidebarMenu>
     {navigationItems.map((item) => {
      const Icon = item.icon;
      const active = isLinkActive(item.to);

      return (
       <SidebarMenuItem key={item.to}>
        <SidebarMenuButton asChild isActive={active}>
         <Link to={item.to}>
          <Icon className="w-4 h-4" />
          <span>{item.label}</span>
         </Link>
        </SidebarMenuButton>
       </SidebarMenuItem>
      );
     })}
    </SidebarMenu>
   </SidebarContent>

   <SidebarFooter className="border-t">
    <SidebarSeparator />
    <div className="p-2">
     <UserCard
      name={user?.name || "User"}
      title={user?.title || "Member"}
      variant="compact"
     />
    </div>
   </SidebarFooter>
  </Sidebar>
 );
};

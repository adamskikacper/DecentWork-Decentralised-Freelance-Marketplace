import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { Bell, Menu, X } from "lucide-react";
import { Button } from "@/components/UI/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";

export interface DashboardHeaderProps
 extends React.HTMLAttributes<HTMLDivElement> {
 /**
  * Whether to show the mobile menu toggle
  * @default true
  */
 showMobileMenu?: boolean;
 /**
  * Whether the mobile menu is open
  * @default false
  */
 mobileMenuOpen?: boolean;
 /**
  * Callback when the mobile menu toggle is clicked
  */
 onMobileMenuToggle?: () => void;
 /**
  * Custom user name to display
  */
 userName?: string;
 /**
  * Custom user avatar URL
  */
 userAvatar?: string;
}

/**
 * DashboardHeader - Header component for the dashboard
 * Provides navigation, notifications, and user menu
 */
const DashboardHeader = ({
 showMobileMenu = true,
 mobileMenuOpen = false,
 onMobileMenuToggle,
 userName,
 userAvatar,
 className,
 ...props
}: DashboardHeaderProps) => {
 const { user, signOut } = useAuth();

 // Use props or get from auth context
 const displayName = userName || user?.email?.split("@")[0] || "User";
 const avatarUrl = userAvatar || "";

 // Get initials for avatar fallback
 const getInitials = (name: string) => {
  return name
   .split(" ")
   .map((n) => n[0])
   .join("")
   .toUpperCase();
 };

 return (
  <header
   className={cn(
    "sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
    className
   )}
   {...props}
  >
   <div className="container flex h-16 items-center justify-between py-4">
    <div className="flex gap-6 md:gap-10">
     {/* Logo */}
     <Link to="/" className="hidden items-center space-x-2 md:flex">
      <span className="hidden font-bold sm:inline-block">
       Freelance Marketplace
      </span>
     </Link>

     {/* Mobile menu button */}
     {showMobileMenu && (
      <Button
       variant="ghost"
       className="px-0 text-base hover:bg-transparent focus:ring-0 md:hidden"
       onClick={onMobileMenuToggle}
      >
       {mobileMenuOpen ? (
        <X className="h-5 w-5" />
       ) : (
        <Menu className="h-5 w-5" />
       )}
       <span className="sr-only">Toggle Menu</span>
      </Button>
     )}
    </div>

    <div className="flex items-center gap-4">
     {/* Notifications */}
     <Button
      variant="ghost"
      size="icon"
      className="relative h-8 w-8 rounded-full"
      aria-label="Notifications"
     >
      <Bell className="h-4 w-4" />
      <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary" />
     </Button>

     {/* User menu */}
     <DropdownMenu>
      <DropdownMenuTrigger asChild>
       <Button
        variant="ghost"
        className="relative h-8 w-8 rounded-full"
        aria-label="User menu"
       >
        <Avatar className="h-8 w-8">
         {avatarUrl && <AvatarImage src={avatarUrl} alt={displayName} />}
         <AvatarFallback>{getInitials(displayName)}</AvatarFallback>
        </Avatar>
       </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
       <DropdownMenuLabel>{displayName}</DropdownMenuLabel>
       <DropdownMenuSeparator />
       <DropdownMenuItem asChild>
        <Link to="/dashboard">Old Dashboard</Link>
       </DropdownMenuItem>
       <DropdownMenuItem asChild>
        <Link to="/dashboardv2">New Dashboard</Link>
       </DropdownMenuItem>
       <DropdownMenuItem asChild>
        <Link to="/dashboard/profile">Profile</Link>
       </DropdownMenuItem>
       <DropdownMenuItem asChild>
        <Link to="/dashboard/settings">Settings</Link>
       </DropdownMenuItem>
       <DropdownMenuSeparator />
       <DropdownMenuItem onClick={() => signOut()}>Logout</DropdownMenuItem>
      </DropdownMenuContent>
     </DropdownMenu>
    </div>
   </div>
  </header>
 );
};

export default DashboardHeader;

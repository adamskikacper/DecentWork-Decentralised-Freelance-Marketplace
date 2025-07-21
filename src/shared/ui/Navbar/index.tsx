import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/app/providers/AuthProvider";
import { useToast } from "@/shared/hooks/ui/useToast";
import { useNavigation } from "@/shared/hooks/ui";
import { Home } from "lucide-react";
import { Button } from "@/shared/ui";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";
import {
 APP_NAME,
 NAV_LINKS,
 USER_TYPES,
 TOAST_MESSAGES,
} from "@/shared/constants";

export const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const { user, userType, signOut } = useAuth();
 const { goHome, goToLogin } = useNavigation();
 const { toast } = useToast();

 useEffect(() => {
  const handleScroll = () => {
   const isScrolled = window.scrollY > 20;
   if (isScrolled !== scrolled) {
    setScrolled(isScrolled);
   }
  };

  window.addEventListener("scroll", handleScroll);
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, [scrolled]);

 const handleLogout = async (e: React.MouseEvent) => {
  e.preventDefault();
  try {
   await signOut();
   toast(TOAST_MESSAGES.LOGOUT_SUCCESS);
   goHome();
  } catch (error) {
   console.error("Logout error:", error);
   toast(TOAST_MESSAGES.LOGOUT_ERROR);
  }
 };

 const getDashboardLink = () => {
  if (userType === USER_TYPES.FREELANCER) {
   return NAV_LINKS.DASHBOARD;
  } else if (userType === USER_TYPES.CLIENT) {
   return NAV_LINKS.DASHBOARD;
  }
  return NAV_LINKS.HOME;
 };

 return (
  <header
   className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    scrolled
     ? "bg-white/20 dark:bg-black/20 backdrop-blur-lg shadow-sm"
     : "bg-transparent"
   }`}
  >
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4 md:py-6">
     {/* Logo */}
     <Link to={NAV_LINKS.HOME} className="flex items-center space-x-2">
      <span className="text-heading-5 tracking-tight">{APP_NAME}</span>
     </Link>

     {/* Desktop Navigation */}
     <nav className="hidden md:flex items-center space-x-6">
      <Link
       to={NAV_LINKS.HOME}
       className="text-label-md transition-colors hover:text-primary flex items-center gap-1"
      >
       <Home size={16} />
       <span>Home</span>
      </Link>
      {user && (
       <Link
        to={getDashboardLink()}
        className="text-label-md transition-colors hover:text-primary"
       >
        Dashboard
       </Link>
      )}
      <ThemeToggle />
      {user ? (
       <Button onClick={handleLogout}>Logout</Button>
      ) : (
       <Button
        onClick={() => {
         goToLogin();
         setMobileMenuOpen(false);
        }}
       >
        Login
       </Button>
      )}
     </nav>

     {/* Mobile Menu Button and Theme Toggle */}
     <div className="md:hidden flex items-center gap-2">
      <ThemeToggle />
      <Button
       variant="ghost"
       size="icon"
       className="p-2"
       onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
       <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
       >
        {mobileMenuOpen ? (
         <path
          d="M18 6L6 18M6 6L18 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        ) : (
         <path
          d="M4 6H20M4 12H20M4 18H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        )}
       </svg>
      </Button>
     </div>
    </div>
   </div>

   {/* Mobile Menu */}
   <div
    className={`md:hidden transition-all duration-300 ease-in-out transform ${
     mobileMenuOpen
      ? "opacity-100 translate-y-0 h-auto"
      : "opacity-0 -translate-y-4 h-0 pointer-events-none"
    } bg-white/95 dark:bg-black/95 backdrop-blur-lg shadow-md overflow-hidden`}
   >
    <div className="px-4 py-8 space-y-6">
     <Link
      to={NAV_LINKS.HOME}
      className="py-2 text-label-lg transition-colors hover:text-primary flex items-center gap-2"
      onClick={() => setMobileMenuOpen(false)}
     >
      <Home size={18} />
      <span>Home</span>
     </Link>

     {user && (
      <Link
       to={getDashboardLink()}
       className="block py-2 text-label-lg transition-colors hover:text-primary"
       onClick={() => setMobileMenuOpen(false)}
      >
       Dashboard
      </Link>
     )}
     {user ? (
      <Button
       onClick={(e) => {
        setMobileMenuOpen(false);
        handleLogout(e);
       }}
      >
       Logout
      </Button>
     ) : (
      <Button
       onClick={() => {
        goToLogin();
        setMobileMenuOpen(false);
       }}
      >
       Login
      </Button>
     )}
    </div>
   </div>
  </header>
 );
};

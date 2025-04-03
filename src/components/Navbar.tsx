import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Home } from "lucide-react";
import { APP_NAME, NAV_LINKS, USER_TYPES, TOAST_MESSAGES } from "@/constants";

const Navbar = () => {
 const [scrolled, setScrolled] = useState(false);
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const { user, userType, signOut } = useAuth();
 const navigate = useNavigate();
 const location = useLocation();
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
   navigate(NAV_LINKS.HOME);
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
    scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
   }`}
  >
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4 md:py-6">
     {/* Logo */}
     <Link to={NAV_LINKS.HOME} className="flex items-center space-x-2">
      <span className="text-xl font-bold tracking-tight">{APP_NAME}</span>
     </Link>

     {/* Desktop Navigation */}
     <nav className="hidden md:flex items-center space-x-8">
      <Link
       to={NAV_LINKS.HOME}
       className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1"
      >
       <Home size={16} />
       <span>Home</span>
      </Link>
      <Link
       to={NAV_LINKS.JOBS}
       className="text-sm font-medium transition-colors hover:text-primary"
      >
       Find Work
      </Link>
      {user && (
       <Link
        to={getDashboardLink()}
        className="text-sm font-medium transition-colors hover:text-primary"
       >
        Dashboard
       </Link>
      )}
      {user ? (
       <button
        onClick={handleLogout}
        className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
       >
        Logout
       </button>
      ) : (
       <Link
        to={NAV_LINKS.LOGIN}
        className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-sm font-medium"
       >
        Login
       </Link>
      )}
     </nav>

     {/* Mobile Menu Button */}
     <button
      className="md:hidden flex items-center p-2 rounded-md"
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
     </button>
    </div>
   </div>

   {/* Mobile Menu */}
   <div
    className={`md:hidden transition-all duration-300 ease-in-out transform ${
     mobileMenuOpen
      ? "opacity-100 translate-y-0 h-auto"
      : "opacity-0 -translate-y-4 h-0 pointer-events-none"
    } bg-white/95 backdrop-blur-lg shadow-md overflow-hidden`}
   >
    <div className="px-4 py-8 space-y-6">
     <Link
      to={NAV_LINKS.HOME}
      className="block py-2 text-base font-medium transition-colors hover:text-primary flex items-center gap-2"
      onClick={() => setMobileMenuOpen(false)}
     >
      <Home size={18} />
      <span>Home</span>
     </Link>
     <Link
      to={NAV_LINKS.JOBS}
      className="block py-2 text-base font-medium transition-colors hover:text-primary"
      onClick={() => setMobileMenuOpen(false)}
     >
      Find Work
     </Link>
     {user && (
      <Link
       to={getDashboardLink()}
       className="block py-2 text-base font-medium transition-colors hover:text-primary"
       onClick={() => setMobileMenuOpen(false)}
      >
       Dashboard
      </Link>
     )}
     {user ? (
      <button
       onClick={(e) => {
        setMobileMenuOpen(false);
        handleLogout(e);
       }}
       className="block w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-center"
      >
       Logout
      </button>
     ) : (
      <Link
       to={NAV_LINKS.LOGIN}
       className="block w-full px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-center"
       onClick={() => setMobileMenuOpen(false)}
      >
       Login
      </Link>
     )}
    </div>
   </div>
  </header>
 );
};

export default Navbar;

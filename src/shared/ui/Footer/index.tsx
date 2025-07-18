import React from "react";
import { Link } from "react-router-dom";
import {
 APP_NAME,
 AUTHOR,
 COPYRIGHT_YEAR,
 FOOTER_CONTENT,
 NAV_LINKS,
} from "@/shared/constants";

export const Footer = () => {
 return (
  <footer className="bg-secondary/30 border-t border-border py-12">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
    {/* Brand & Description */}
    <div className="flex flex-col items-start space-y-4">
     <Link to={NAV_LINKS.HOME} className="text-heading-5 tracking-tight">
      {APP_NAME}
     </Link>
     <p className="text-body-sm text-muted-foreground max-w-md">
      {FOOTER_CONTENT.DESCRIPTION}
     </p>
    </div>

    {/* Navigation Links */}
    <nav>
     <ul className="flex flex-wrap gap-6">
      {[
       { text: "Home", url: NAV_LINKS.HOME },
       { text: "Dashboard", url: NAV_LINKS.DASHBOARD },
      ].map((link) => (
       <li key={link.text}>
        <Link
         to={link.url}
         className="text-caption-md text-muted-foreground hover:text-foreground transition-colors"
        >
         {link.text}
        </Link>
       </li>
      ))}
     </ul>
    </nav>

    {/* Copyright */}
    <div className="pt-8 border-t border-border flex justify-center">
     <p className="text-caption-md text-muted-foreground text-center">
      © {COPYRIGHT_YEAR} {APP_NAME}. All rights reserved. {AUTHOR}
     </p>
    </div>
   </div>
  </footer>
 );
};

import React from "react";
import { Link } from "react-router-dom";
import {
 APP_NAME,
 COPYRIGHT_YEAR,
 FOOTER_CONTENT,
 NAV_LINKS,
} from "@/constants";

export const Footer = () => {
 return (
  <footer className="bg-secondary/30 border-t border-border py-12 md:py-20">
   <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
     {/* Brand */}
     <div className="space-y-4">
      <Link to={NAV_LINKS.HOME} className="flex items-center space-x-2">
       <span className="text-xl font-bold tracking-tight">{APP_NAME}</span>
      </Link>
      <p className="text-sm text-muted-foreground max-w-xs">
       {FOOTER_CONTENT.DESCRIPTION}
      </p>
      <div className="flex space-x-4">
       <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors"
       >
        <svg
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          d="M23 3.01006C22.0424 3.68553 20.9821 4.20217 19.86 4.54006C19.2577 3.84757 18.4573 3.35675 17.567 3.13398C16.6767 2.91122 15.7395 2.96725 14.8821 3.29451C14.0247 3.62177 13.2884 4.20446 12.773 4.96377C12.2575 5.72309 11.9877 6.62239 12 7.54006V8.54006C10.2426 8.58562 8.50127 8.19587 6.93101 7.4055C5.36074 6.61513 4.01032 5.44869 3 4.01006C3 4.01006 -1 13.0101 8 17.0101C5.94053 18.408 3.48716 19.109 1 19.0101C10 24.0101 21 19.0101 21 7.51006C20.9991 7.23151 20.9723 6.95365 20.92 6.68006C21.9406 5.67355 22.6608 4.40277 23 3.01006Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        </svg>
       </a>
       <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors"
       >
        <svg
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
         <path
          d="M6 9H2V21H6V9Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
         <path
          d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        </svg>
       </a>
       <a
        href="#"
        className="text-muted-foreground hover:text-foreground transition-colors"
       >
        <svg
         width="20"
         height="20"
         viewBox="0 0 24 24"
         fill="none"
         xmlns="http://www.w3.org/2000/svg"
        >
         <path
          d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
         <path
          d="M16 8V8.01"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
         <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
         />
        </svg>
       </a>
      </div>
     </div>

     {/* Links */}
     <div>
      <h3 className="text-sm font-semibold mb-4">Platform</h3>
      <ul className="space-y-3">
       {FOOTER_CONTENT.PLATFORM_LINKS.map((link, index) => (
        <li key={index}>
         <Link
          to={link.url}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
         >
          {link.text}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Links */}
     <div>
      <h3 className="text-sm font-semibold mb-4">Resources</h3>
      <ul className="space-y-3">
       {FOOTER_CONTENT.RESOURCE_LINKS.map((link, index) => (
        <li key={index}>
         <Link
          to={link.url}
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
         >
          {link.text}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Newsletter */}
     <div>
      <h3 className="text-sm font-semibold mb-4">Stay updated</h3>
      <p className="text-sm text-muted-foreground mb-4">
       {FOOTER_CONTENT.NEWSLETTER_TEXT}
      </p>
      <div className="flex gap-2">
       <input
        type="email"
        placeholder="Your email"
        className="flex-1 px-4 py-2 text-sm rounded-md bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/20"
       />
       <button className="px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-md">
        Subscribe
       </button>
      </div>
     </div>
    </div>

    <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
     <p className="text-sm text-muted-foreground mb-4 md:mb-0">
      © {COPYRIGHT_YEAR} {APP_NAME}. All rights reserved.
     </p>
     <div className="flex flex-wrap gap-6">
      {FOOTER_CONTENT.LEGAL_LINKS.map((link, index) => (
       <Link
        key={index}
        to={link.url}
        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
       >
        {link.text}
       </Link>
      ))}
     </div>
    </div>
   </div>
  </footer>
 );
};

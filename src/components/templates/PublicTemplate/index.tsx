import React from "react";

export interface PublicTemplateProps {
 children: React.ReactNode;
 showHeader?: boolean;
 showFooter?: boolean;
 className?: string;
}

export const PublicTemplate = ({
 children,
 showHeader = true,
 showFooter = true,
 className = "",
}: PublicTemplateProps) => {
 return (
  <div className={`min-h-screen bg-white ${className}`}>
   {showHeader && (
    <header className="bg-white border-b border-gray-200">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-6">
       <div className="flex items-center">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
         <span className="text-white font-bold">D</span>
        </div>
        <span className="ml-2 text-xl font-bold text-gray-900">DecentWork</span>
       </div>

       <nav className="hidden md:flex space-x-8">
        <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
         Dashboard
        </a>
        <a href="/about" className="text-gray-600 hover:text-gray-900">
         About
        </a>
       </nav>

       <div className="flex items-center space-x-4">
        <a href="/login" className="text-gray-600 hover:text-gray-900">
         Sign In
        </a>
        <a
         href="/signup"
         className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90"
        >
         Get Started
        </a>
       </div>
      </div>
     </div>
    </header>
   )}

   <main className="flex-1">{children}</main>

   {showFooter && (
    <footer className="bg-gray-50 border-t border-gray-200">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
       <div className="col-span-1 md:col-span-2">
        <div className="flex items-center">
         <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">D</span>
         </div>
         <span className="ml-2 text-xl font-bold text-gray-900">
          DecentWork
         </span>
        </div>
        <p className="mt-4 text-gray-600 max-w-md">
         Connecting talented freelancers with amazing projects. Build your
         future with decentralized work.
        </p>
       </div>

       <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
         For Clients
        </h3>
        <ul className="mt-4 space-y-2">
         <li>
          <a href="/post-job" className="text-gray-600 hover:text-gray-900">
           Post a Job
          </a>
         </li>
         <li>
          <a href="/find-talent" className="text-gray-600 hover:text-gray-900">
           Find Talent
          </a>
         </li>
        </ul>
       </div>

       <div>
        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
         For Freelancers
        </h3>
        <ul className="mt-4 space-y-2">
         <li>
          <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
           Dashboard
          </a>
         </li>
         <li>
          <a href="/profile" className="text-gray-600 hover:text-gray-900">
           Create Profile
          </a>
         </li>
        </ul>
       </div>
      </div>

      <div className="mt-8 pt-8 border-t border-gray-200">
       <p className="text-center text-gray-500">
        © 2024 DecentWork. All rights reserved.
       </p>
      </div>
     </div>
    </footer>
   )}
  </div>
 );
};

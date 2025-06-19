import React from "react";

export const LoadingScreen = () => {
 return (
  <div className="min-h-screen flex items-center justify-center">
   <div className="text-center">
    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-primary"></div>
    <p className="mt-2">Loading dashboard...</p>
   </div>
  </div>
 );
};

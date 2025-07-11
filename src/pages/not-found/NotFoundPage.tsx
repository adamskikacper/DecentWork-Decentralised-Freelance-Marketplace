import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import { PublicPageLayout } from "@/components/templates";
import { usePageTracking } from "@/shared/hooks";
import { Home, ArrowLeft } from "lucide-react";

export const NotFoundPage = () => {
 const { logError } = usePageTracking();

 React.useEffect(() => {
  logError("404 Error: User attempted to access non-existent route");
 }, [logError]);

 return (
  <PublicPageLayout
   title="404 - Page Not Found"
   description="The page you're looking for doesn't exist"
   breadcrumbs={[]}
   showHeader={true}
   showFooter={false}
  >
   <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
    <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-6">
     <span className="text-4xl font-bold text-muted-foreground">404</span>
    </div>
    
    <h1 className="text-3xl font-bold mb-2">Page Not Found</h1>
    <p className="text-muted-foreground mb-8 max-w-md">
     The page you're looking for doesn't exist or has been moved.
    </p>

    <div className="flex flex-col sm:flex-row gap-4">
     <Button asChild>
      <Link to="/">
       <Home className="w-4 h-4 mr-2" />
       Return Home
      </Link>
     </Button>
     
     <Button variant="outline" onClick={() => window.history.back()}>
      <ArrowLeft className="w-4 h-4 mr-2" />
      Go Back
     </Button>
    </div>
   </div>
  </PublicPageLayout>
 );
};

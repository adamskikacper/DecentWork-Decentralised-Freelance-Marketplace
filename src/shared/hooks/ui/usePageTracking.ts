import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface UsePageTrackingOptions {
  logErrors?: boolean;
  logPageViews?: boolean;
  customLogger?: (event: string, data: any) => void;
}

export const usePageTracking = (options: UsePageTrackingOptions = {}) => {
  const {
    logErrors = true,
    logPageViews = true,
    customLogger
  } = options;
  
  const location = useLocation();

  const logEvent = (event: string, data: any) => {
    if (customLogger) {
      customLogger(event, data);
    } else {
      console.log(`[PageTracking] ${event}:`, data);
    }
  };

  const logError = (error: string | Error, context?: any) => {
    if (!logErrors) return;
    
    const errorData = {
      error: error instanceof Error ? error.message : error,
      stack: error instanceof Error ? error.stack : undefined,
      path: location.pathname,
      context,
      timestamp: new Date().toISOString()
    };
    
    logEvent("ERROR", errorData);
  };

  const logPageView = (customPath?: string) => {
    if (!logPageViews) return;
    
    const pageData = {
      path: customPath || location.pathname,
      search: location.search,
      timestamp: new Date().toISOString()
    };
    
    logEvent("PAGE_VIEW", pageData);
  };

  useEffect(() => {
    logPageView();
  }, [location.pathname]);

  return {
    logError,
    logPageView,
    logEvent
  };
};
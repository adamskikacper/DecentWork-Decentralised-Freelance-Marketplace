import { useNavigate } from "react-router-dom";
import { useCallback } from "react";

export interface UseNavigationOptions {
  baseUrl?: string;
  onNavigate?: (path: string) => void;
}

export const useNavigation = (options: UseNavigationOptions = {}) => {
  const { baseUrl = "", onNavigate } = options;
  const navigate = useNavigate();

  const navigateTo = useCallback((path: string, options?: { replace?: boolean }) => {
    const fullPath = baseUrl ? `${baseUrl}${path}` : path;
    
    if (onNavigate) {
      onNavigate(fullPath);
    }
    
    navigate(fullPath, options);
  }, [navigate, baseUrl, onNavigate]);

  const goToMessages = useCallback((userId?: string) => {
    const path = userId ? `/dashboard/messages/chat/${userId}` : '/dashboard/messages';
    navigateTo(path);
  }, [navigateTo]);

  const goToJobDetails = useCallback((jobId: string, isPublic = false) => {
    const path = isPublic ? `/jobs/${jobId}` : `/dashboard/jobs/${jobId}`;
    navigateTo(path);
  }, [navigateTo]);

  const goToFreelancerDetails = useCallback((freelancerId: string) => {
    navigateTo(`/dashboard/freelancers/${freelancerId}`);
  }, [navigateTo]);

  const goToProfile = useCallback(() => {
    navigateTo('/dashboard/profile');
  }, [navigateTo]);

  const goToDashboard = useCallback(() => {
    navigateTo('/dashboard');
  }, [navigateTo]);

  const goBack = useCallback(() => {
    window.history.back();
  }, []);

  return {
    navigateTo,
    goToMessages,
    goToJobDetails,
    goToFreelancerDetails,
    goToProfile,
    goToDashboard,
    goBack
  };
};
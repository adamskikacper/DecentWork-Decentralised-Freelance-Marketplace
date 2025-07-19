import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import { NAV_LINKS, DASHBOARD_LINKS } from "../../constants";

export interface UseNavigationOptions {
 baseUrl?: string;
 onNavigate?: (path: string) => void;
}

export const useNavigation = (options: UseNavigationOptions = {}) => {
 const { baseUrl = "", onNavigate } = options;
 const navigate = useNavigate();

 const navigateTo = useCallback(
  (path: string, options?: { replace?: boolean }) => {
   const fullPath = baseUrl ? `${baseUrl}${path}` : path;

   if (onNavigate) {
    onNavigate(fullPath);
   }

   navigate(fullPath, options);
  },
  [navigate, baseUrl, onNavigate]
 );

 const goHome = useCallback(() => {
  navigateTo(NAV_LINKS.HOME);
 }, [navigateTo]);

 const goToLogin = useCallback(() => {
  navigateTo(NAV_LINKS.LOGIN);
 }, [navigateTo]);

 const goToDashboard = useCallback(() => {
  navigateTo(DASHBOARD_LINKS.HOME);
 }, [navigateTo]);

 const goToPostJob = useCallback(() => {
  navigateTo(DASHBOARD_LINKS.POST_JOB);
 }, [navigateTo]);

 const goToJobs = useCallback(() => {
  navigateTo(DASHBOARD_LINKS.JOBS);
 }, [navigateTo]);

 const goToMyJobs = useCallback(() => {
  navigateTo(DASHBOARD_LINKS.MY_JOBS);
 }, [navigateTo]);

 const goToFreelancers = useCallback(() => {
  navigateTo(DASHBOARD_LINKS.FREELANCERS);
 }, [navigateTo]);

 const goToFindJobs = useCallback(() => {
  navigateTo(DASHBOARD_LINKS.FIND_JOBS);
 }, [navigateTo]);

 const goToMessages = useCallback(
  (userId?: string) => {
   const path = userId
    ? `${DASHBOARD_LINKS.MESSAGES}/chat/${userId}`
    : DASHBOARD_LINKS.MESSAGES;
   navigateTo(path);
  },
  [navigateTo]
 );

 const goToJobDetails = useCallback(
  (jobId: string) => {
   const path = `${DASHBOARD_LINKS.FIND_JOBS}/${jobId}`;
   navigateTo(path);
  },
  [navigateTo]
 );

 const goToFreelancerDetails = useCallback(
  (freelancerId: string) => {
   navigateTo(`${DASHBOARD_LINKS.FREELANCERS}/${freelancerId}`);
  },
  [navigateTo]
 );

 const goToProfile = useCallback(() => {
  navigateTo(DASHBOARD_LINKS.PROFILE);
 }, [navigateTo]);

 const goBack = useCallback(() => {
  window.history.back();
 }, []);

 return {
  navigateTo,
  goHome,
  goToLogin,
  goToDashboard,
  goToPostJob,
  goToJobs,
  goToMyJobs,
  goToFreelancers,
  goToFindJobs,
  goToMessages,
  goToJobDetails,
  goToFreelancerDetails,
  goToProfile,
  goBack,
 };
};

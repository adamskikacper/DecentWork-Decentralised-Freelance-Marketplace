import React from "react";
import FreelancerDetailsComponent from "../../components/FreelancerDetails";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DASHBOARD_LINKS, NAV_LINKS } from "@/constants";
import { useParams } from "react-router-dom";

const FreelancerDetails = () => {
 const { id } = useParams<{ id: string }>();

 return (
  <>
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: NAV_LINKS.DASHBOARD },
     { label: "Freelancers", path: DASHBOARD_LINKS.FREELANCERS },
     { label: "Details" },
    ]}
   />
   <FreelancerDetailsComponent />
  </>
 );
};

export default FreelancerDetails;

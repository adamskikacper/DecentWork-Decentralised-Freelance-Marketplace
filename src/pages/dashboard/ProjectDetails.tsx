import ProjectDetailsComponent from "../../components/ProjectDetails";
import Breadcrumbs from "@/components/Breadcrumbs";
import { DASHBOARD_LINKS } from "@/constants";
import { useParams } from "react-router-dom";

const ProjectDetails = () => {
 return (
  <>
   <Breadcrumbs
    items={[
     { label: "Dashboard", path: DASHBOARD_LINKS.HOME },
     { label: "Projects", path: DASHBOARD_LINKS.PROJECTS },
     { label: "Project Details" },
    ]}
   />
   <ProjectDetailsComponent />
  </>
 );
};

export default ProjectDetails;

import React from "react";
import { ProjectSummary } from "../types";
import ProjectCard from "./ProjectCard";

interface ProjectsListProps {
 projects: ProjectSummary[];
 onMessage?: (userId: string) => void;
 onDetails?: (projectId: string) => void;
 showCreationDate?: boolean;
 title?: string;
 showViewAll?: boolean;
 onViewAll?: () => void;
 className?: string;
}

const ProjectsList: React.FC<ProjectsListProps> = ({
 projects,
 onMessage,
 onDetails,
 showCreationDate = false,
 title,
 showViewAll = false,
 onViewAll,
 className = "",
}) => {
 return (
  <div className={`slide-in ${className}`} style={{ animationDelay: "0.5s" }}>
   {(title || showViewAll) && (
    <div className="flex justify-between items-center mb-6">
     {title && <h2 className="text-xl font-bold">{title}</h2>}
     {showViewAll && (
      <button className="text-sm text-primary font-medium" onClick={onViewAll}>
       View all
      </button>
     )}
    </div>
   )}

   <div className="space-y-4">
    {projects.map((project) => (
     <ProjectCard
      key={project.id}
      project={project}
      onMessage={onMessage}
      onDetails={onDetails}
      showCreationDate={showCreationDate}
     />
    ))}
   </div>
  </div>
 );
};

export default ProjectsList;

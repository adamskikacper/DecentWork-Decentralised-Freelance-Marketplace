import React from "react";
import { User } from "lucide-react";
import { ProjectSummary } from "../types";

interface ProjectCardProps {
 project: ProjectSummary;
 onMessage?: (userId: string) => void;
 onDetails?: (projectId: string) => void;
 showCreationDate?: boolean;
}

const ProjectCard = ({
 project,
 onMessage,
 onDetails,
 showCreationDate = false,
}: ProjectCardProps) => {
 return (
  <div className="glass-card rounded-xl p-6">
   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
    <div>
     <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
     <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span>Freelancer: {project.freelancer.name}</span>
      <span>•</span>
      <span>{project.dueDate}</span>
     </div>
    </div>
    <div className="flex items-center gap-2">
     <span
      className={`px-2.5 py-1 text-xs font-medium rounded-full ${
       project.status === "In Progress"
        ? "bg-green-100 text-green-800"
        : project.status === "Just Started"
        ? "bg-blue-100 text-blue-800"
        : project.status === "Completed"
        ? "bg-gray-100 text-gray-800"
        : "bg-yellow-100 text-yellow-800"
      }`}
     >
      {project.status}
     </span>
     <span className="text-sm font-medium">{project.cost}</span>
    </div>
   </div>

   <div className="space-y-3">
    <div>
     <div className="flex justify-between text-sm mb-1">
      <span className="text-muted-foreground">Progress</span>
      <span className="font-medium">{project.progress}%</span>
     </div>
     <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
      <div
       className="h-full bg-primary rounded-full"
       style={{ width: `${project.progress}%` }}
      ></div>
     </div>
    </div>

    <div className="flex justify-between items-center">
     {showCreationDate ? (
      <div className="flex">
       <div className="text-sm text-muted-foreground">
        Created: <span className="text-foreground">April 12, 2023</span>
       </div>
      </div>
     ) : (
      <div className="flex -space-x-2">
       <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center border-2 border-background">
        <User className="h-4 w-4" />
       </div>
      </div>
     )}

     <div className="flex gap-2">
      {onMessage && (
       <button
        onClick={() => onMessage(project.freelancer.id)}
        className="px-4 py-2 text-sm font-medium rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
       >
        Message
       </button>
      )}
      {onDetails && (
       <button
        onClick={() => onDetails(project.id)}
        className="px-4 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
       >
        Details
       </button>
      )}
     </div>
    </div>
   </div>
  </div>
 );
};

export default ProjectCard;

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Calendar, DollarSign, Clock } from "lucide-react";

interface ProjectDetailsProps {
 onClose?: () => void;
}

const ProjectDetails = ({ onClose }: ProjectDetailsProps) => {
 const navigate = useNavigate();
 const { projectId } = useParams();

 // In a real app, you would fetch project details from your backend
 const project = {
  id: projectId,
  title: "Wallet Integration for NFT Marketplace",
  description:
   "Implementation of wallet integration features for an NFT marketplace, including support for multiple wallet providers and transaction handling.",
  freelancer: {
   name: "Alex K.",
   role: "Frontend Developer",
   id: "alex123",
  },
  status: "In Progress",
  progress: 60,
  budget: "3.5 ETH",
  startDate: "2024-03-01",
  dueDate: "2024-04-15",
  milestones: [
   {
    title: "Initial Setup",
    status: "Completed",
    date: "2024-03-10",
   },
   {
    title: "Wallet Integration",
    status: "In Progress",
    date: "2024-03-25",
   },
   {
    title: "Testing & Documentation",
    status: "Pending",
    date: "2024-04-10",
   },
  ],
 };

 const handleMessage = () => {
  navigate(`/messages/${project.freelancer.id}`);
 };

 return (
  <div className="glass-card rounded-xl p-6">
   <div className="flex justify-between items-start mb-6">
    <div>
     <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
     <div className="flex items-center gap-2 text-sm text-muted-foreground">
      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
       {project.status}
      </span>
      <span>•</span>
      <span>{project.budget}</span>
     </div>
    </div>
    <div className="flex gap-2">
     <Button variant="outline" onClick={handleMessage}>
      Message Freelancer
     </Button>
     {onClose && (
      <Button variant="ghost" onClick={onClose}>
       Close
      </Button>
     )}
    </div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
    <div className="space-y-4">
     <div>
      <h3 className="text-lg font-semibold mb-2">Project Details</h3>
      <p className="text-muted-foreground">{project.description}</p>
     </div>

     <div>
      <h4 className="font-medium mb-2">Timeline</h4>
      <div className="flex items-center gap-4 text-sm">
       <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        <span>Start: {project.startDate}</span>
       </div>
       <div className="flex items-center gap-1">
        <Clock className="h-4 w-4" />
        <span>Due: {project.dueDate}</span>
       </div>
      </div>
     </div>

     <div>
      <h4 className="font-medium mb-2">Progress</h4>
      <div className="space-y-2">
       <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Overall Progress</span>
        <span className="font-medium">{project.progress}%</span>
       </div>
       <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
        <div
         className="h-full bg-primary rounded-full"
         style={{ width: `${project.progress}%` }}
        ></div>
       </div>
      </div>
     </div>
    </div>

    <div className="space-y-4">
     <div>
      <h3 className="text-lg font-semibold mb-2">Freelancer</h3>
      <div className="flex items-center gap-3 p-4 bg-secondary/30 rounded-lg">
       <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
        <User className="h-6 w-6" />
       </div>
       <div>
        <p className="font-medium">{project.freelancer.name}</p>
        <p className="text-sm text-muted-foreground">
         {project.freelancer.role}
        </p>
       </div>
      </div>
     </div>

     <div>
      <h3 className="text-lg font-semibold mb-2">Milestones</h3>
      <div className="space-y-3">
       {project.milestones.map((milestone, index) => (
        <div
         key={index}
         className="p-3 bg-secondary/30 rounded-lg flex items-center justify-between"
        >
         <div>
          <p className="font-medium">{milestone.title}</p>
          <p className="text-sm text-muted-foreground">Due: {milestone.date}</p>
         </div>
         <span
          className={`px-2.5 py-1 text-xs font-medium rounded-full ${
           milestone.status === "Completed"
            ? "bg-green-100 text-green-800"
            : milestone.status === "In Progress"
            ? "bg-blue-100 text-blue-800"
            : "bg-gray-100 text-gray-800"
          }`}
         >
          {milestone.status}
         </span>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default ProjectDetails;

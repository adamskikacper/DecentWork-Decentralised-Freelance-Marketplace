import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/UI/button";
import { User, Star, Briefcase, Clock, Award } from "lucide-react";
import RatingDisplay from "@/components/Common/RatingDisplay";
import SkillTag from "@/components/Common/SkillTag";

interface FreelancerDetailsProps {
 onClose?: () => void;
}

const FreelancerDetails = ({ onClose }: FreelancerDetailsProps) => {
 const navigate = useNavigate();
 const { freelancerId } = useParams();

 // In a real app, you would fetch freelancer details from your backend
 const freelancer = {
  id: freelancerId,
  name: "Alex K.",
  role: "Frontend Developer",
  rating: 4.9,
  totalJobs: 23,
  completedJobs: 18,
  joinedDate: "January 2023",
  skills: ["React", "Web3", "TypeScript", "Solidity", "UI/UX"],
  bio: "Experienced frontend developer specializing in Web3 applications and blockchain integration. Strong focus on creating intuitive and responsive user interfaces.",
  recentJobs: [
   {
    id: "1",
    title: "NFT Marketplace UI",
    status: "Completed",
    rating: 5,
   },
   {
    id: "2",
    title: "DeFi Dashboard",
    status: "Completed",
    rating: 4.8,
   },
   {
    id: "3",
    title: "Wallet Integration",
    status: "In Progress",
   },
  ],
 };

 const handleMessage = () => {
  navigate(`/messages/${freelancer.id}`);
 };

 return (
  <div className="glass-card rounded-xl p-6">
   <div className="flex justify-between items-start mb-8">
    <div className="flex items-center gap-4">
     <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center">
      <User className="h-8 w-8" />
     </div>
     <div>
      <h2 className="text-2xl font-bold mb-1">{freelancer.name}</h2>
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
       <span>{freelancer.role}</span>
       <span>•</span>
       <div className="flex items-center">
        <Star className="h-4 w-4 text-yellow-400 mr-1" />
        <span>{freelancer.rating}</span>
       </div>
      </div>
     </div>
    </div>
    <div className="flex gap-2">
     <Button variant="outline" onClick={handleMessage}>
      Message
     </Button>
     {onClose && (
      <Button variant="ghost" onClick={onClose}>
       Close
      </Button>
     )}
    </div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
    <div className="p-4 bg-secondary/30 rounded-lg">
     <div className="flex items-center gap-2 mb-2">
      <Briefcase className="h-4 w-4 text-primary" />
      <span className="font-medium">Total Jobs</span>
     </div>
     <p className="text-2xl font-bold">{freelancer.totalJobs}</p>
    </div>

    <div className="p-4 bg-secondary/30 rounded-lg">
     <div className="flex items-center gap-2 mb-2">
      <Award className="h-4 w-4 text-primary" />
      <span className="font-medium">Completed</span>
     </div>
     <p className="text-2xl font-bold">{freelancer.completedJobs}</p>
    </div>

    <div className="p-4 bg-secondary/30 rounded-lg">
     <div className="flex items-center gap-2 mb-2">
      <Clock className="h-4 w-4 text-primary" />
      <span className="font-medium">Member Since</span>
     </div>
     <p className="text-2xl font-bold">{freelancer.joinedDate}</p>
    </div>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
     <h3 className="text-lg font-semibold mb-4">About</h3>
     <p className="text-muted-foreground mb-6">{freelancer.bio}</p>

     <h3 className="text-lg font-semibold mb-4">Skills</h3>
     <div className="flex flex-wrap gap-2">
      {freelancer.skills.map((skill, index) => (
       <SkillTag key={index} skill={skill} size="md" />
      ))}
     </div>
    </div>

    <div>
     <h3 className="text-lg font-semibold mb-4">Recent Jobs</h3>
     <div className="space-y-4">
      {freelancer.recentJobs.map((job) => (
       <div
        key={job.id}
        className="flex justify-between items-center p-3 rounded-lg hover:bg-primary/5 transition-all"
       >
        <div>
         <p className="font-medium">{job.title}</p>
         <p className="text-sm text-muted-foreground">{job.status}</p>
        </div>
        {job.rating && <RatingDisplay rating={job.rating} size="sm" />}
       </div>
      ))}
     </div>
    </div>
   </div>
  </div>
 );
};

export default FreelancerDetails;

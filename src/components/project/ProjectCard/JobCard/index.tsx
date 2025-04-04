import React from "react";
import { Link } from "react-router-dom";

interface JobCardProps {
 id: number;
 title: string;
 description: string;
 postedDate: string;
 proposals: number;
 tags: string[];
 budget: string;
}

const JobCard: React.FC<JobCardProps> = ({
 id,
 title,
 description,
 postedDate,
 proposals,
 tags,
 budget,
}) => {
 return (
  <div className="glass-card rounded-xl p-5 hover:shadow-lg transition-all">
   <h3 className="text-lg font-semibold mb-2 line-clamp-1">
    <Link to={`/jobs/${id}`} className="hover:text-primary transition-colors">
     {title}
    </Link>
   </h3>
   <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
    <span>Posted {postedDate}</span>
    <span>•</span>
    <span>{proposals} proposals</span>
   </div>
   <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
    {description}
   </p>
   <div className="flex flex-wrap gap-1 mb-3">
    {tags.map((tag, index) => (
     <span
      key={index}
      className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-foreground"
     >
      {tag}
     </span>
    ))}
   </div>
   <div className="flex justify-between items-center pt-3 border-t border-border">
    <span className="text-sm font-medium">{budget}</span>
    <Link to={`/jobs/${id}`} className="text-xs text-primary hover:underline">
     View Job
    </Link>
   </div>
  </div>
 );
};

export default JobCard;

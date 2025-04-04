import React from "react";
import { Link } from "react-router-dom";

interface SimilarJob {
 id: number;
 title: string;
 description: string;
 postedDate: string;
 proposals: number;
 budget: string;
 tags: string[];
}

interface SimilarJobsSectionProps {
 jobs: SimilarJob[];
}

const SimilarJobsSection: React.FC<SimilarJobsSectionProps> = ({ jobs }) => {
 return (
  <div className="mt-8 fade-in">
   <div className="flex justify-between items-center mb-6">
    <h2 className="text-xl font-bold">Similar Jobs</h2>
    <Link to="/jobs" className="text-sm text-primary font-medium">
     View all
    </Link>
   </div>

   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {jobs.map((job) => (
     <div
      key={job.id}
      className="glass-card rounded-xl p-5 hover:shadow-lg transition-all"
     >
      <h3 className="text-lg font-semibold mb-2 line-clamp-1">
       <Link
        to={`/jobs/${job.id}`}
        className="hover:text-primary transition-colors"
       >
        {job.title}
       </Link>
      </h3>
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
       <span>Posted {job.postedDate}</span>
       <span>•</span>
       <span>{job.proposals} proposals</span>
      </div>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
       {job.description}
      </p>
      <div className="flex flex-wrap gap-1 mb-3">
       {job.tags.map((tag) => (
        <span
         key={tag}
         className="px-2 py-0.5 text-xs rounded-full bg-secondary/50 text-foreground"
        >
         {tag}
        </span>
       ))}
      </div>
      <div className="flex justify-between items-center pt-3 border-t border-border">
       <span className="text-sm font-medium">{job.budget}</span>
       <Link
        to={`/jobs/${job.id}`}
        className="text-xs text-primary hover:underline"
       >
        View Job
       </Link>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
};

export default SimilarJobsSection;

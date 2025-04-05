import React from "react";
import { Link } from "react-router-dom";

interface JobDetailHeaderProps {
 id: number;
 title: string;
 postedDate: string;
 proposals: number;
 duration: string;
 budget: string;
 tags: string[];
 client: string;
 clientRating: string;
 clientLocation: string;
}

const JobDetailHeader: React.FC<JobDetailHeaderProps> = ({
 id,
 title,
 postedDate,
 proposals,
 duration,
 budget,
 tags,
 client,
 clientRating,
 clientLocation,
}) => {
 return (
  <div className="glass-card rounded-xl p-6 mb-6">
   <h1 className="text-2xl md:text-3xl font-bold mb-4">{title}</h1>
   <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mb-6">
    <span>Posted {postedDate}</span>
    <span>•</span>
    <span>{proposals} proposals</span>
    <span>•</span>
    <span>{duration}</span>
    <span>•</span>
    <span>{budget}</span>
   </div>
   <div className="flex flex-wrap gap-2 mb-6">
    {tags.map((tag) => (
     <span
      key={tag}
      className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-foreground"
     >
      {tag}
     </span>
    ))}
   </div>
   <div className="flex items-center">
    <div className="flex items-center gap-2">
     <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
      <svg
       width="20"
       height="20"
       viewBox="0 0 24 24"
       fill="none"
       xmlns="http://www.w3.org/2000/svg"
      >
       <path
        d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
       <path
        d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
       />
      </svg>
     </div>
     <div>
      <div className="text-sm font-medium">{client}</div>
      <div className="flex items-center text-xs">
       <span className="text-yellow-500 mr-1">★</span>
       <span>
        {clientRating} | {clientLocation}
       </span>
      </div>
     </div>
    </div>
    <div className="ml-auto text-sm">
     <span className="inline-flex items-center">
      <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
      Verified Payment
     </span>
    </div>
   </div>
  </div>
 );
};

export default JobDetailHeader;

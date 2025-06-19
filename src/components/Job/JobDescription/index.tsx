import React from "react";

interface Attachment {
 name: string;
 size: string;
}

interface JobDescriptionProps {
 description: string;
 skills: string[];
 attachments: Attachment[];
}

export const JobDescription: React.FC<JobDescriptionProps> = ({
 description,
 skills,
 attachments,
}) => {
 return (
  <>
   <h2 className="text-xl font-semibold mb-4">Job Description</h2>
   <div className="prose max-w-none">
    <p className="whitespace-pre-line text-muted-foreground mb-6">
     {description}
    </p>
   </div>

   {/* Skills Required */}
   <h3 className="text-lg font-semibold mb-3">Skills Required</h3>
   <div className="flex flex-wrap gap-2 mb-6">
    {skills.map((skill) => (
     <span
      key={skill}
      className="px-3 py-1.5 text-sm rounded-full bg-secondary/50 text-foreground"
     >
      {skill}
     </span>
    ))}
   </div>

   {/* Attachments */}
   {attachments.length > 0 && (
    <>
     <h3 className="text-lg font-semibold mb-3">Attachments</h3>
     <div className="space-y-3 mb-6">
      {attachments.map((attachment) => (
       <div
        key={attachment.name}
        className="flex items-center justify-between p-3 bg-secondary/30 rounded-lg"
       >
        <div className="flex items-center gap-3">
         <div className="w-10 h-10 rounded-lg bg-secondary/80 flex items-center justify-center">
          <svg
           width="20"
           height="20"
           viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg"
          >
           <path
            d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
           <path
            d="M14 2V8H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
           />
          </svg>
         </div>
         <div>
          <div className="text-sm font-medium">{attachment.name}</div>
          <div className="text-xs text-muted-foreground">{attachment.size}</div>
         </div>
        </div>
        <button className="text-primary hover:text-primary/80 transition-colors">
         <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
         >
          <path
           d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
           d="M7 10L12 15L17 10"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
          <path
           d="M12 15V3"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
          />
         </svg>
        </button>
       </div>
      ))}
     </div>
    </>
   )}
  </>
 );
};

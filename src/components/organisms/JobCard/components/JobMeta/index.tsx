import { Clock } from "lucide-react";

interface JobMetaProps {
 postedDate?: string;
 budget?: string;
 proposals?: number;
}

export const JobMeta = ({ postedDate, budget, proposals }: JobMetaProps) => {
 return (
  <div className="space-y-3">
   <div className="flex justify-between items-center text-label-md">
    {postedDate && (
     <div className="flex items-center gap-1.5 text-muted-foreground">
      <Clock className="h-4 w-4" />
      <span>Posted {postedDate}</span>
     </div>
    )}
    {budget && <span className="text-label-md font-medium">{budget}</span>}
   </div>
   {proposals !== undefined && (
    <div className="text-label-md text-muted-foreground">
     Proposals: <span className="font-medium text-foreground">{proposals}</span>
    </div>
   )}
  </div>
 );
};

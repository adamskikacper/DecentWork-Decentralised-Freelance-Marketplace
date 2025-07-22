import { Progress } from "@/shared/ui";

interface ProgressSectionProps {
 daysLeft?: number;
}

export const ProgressSection = ({ daysLeft }: ProgressSectionProps) => {
 if (daysLeft === undefined) return null;

 return (
  <div className="space-y-3">
   <div>
    <div className="flex justify-between text-sm mb-2">
     <span className="text-label-md text-muted-foreground">Progress</span>
     <span className="text-label-md font-medium">Due in {daysLeft} days</span>
    </div>

    <Progress value={daysLeft} className="h-2" />
   </div>
  </div>
 );
};

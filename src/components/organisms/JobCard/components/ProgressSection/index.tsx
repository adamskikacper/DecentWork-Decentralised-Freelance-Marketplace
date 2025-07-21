import { Progress } from "@/shared/ui";

interface ProgressSectionProps {
 progress?: number;
}

export const ProgressSection = ({ progress }: ProgressSectionProps) => {
 if (progress === undefined) return null;

 return (
  <div className="space-y-3">
   <div>
    <div className="flex justify-between text-sm mb-2">
     <span className="text-label-md text-muted-foreground">Progress</span>
     <span className="text-label-md font-medium">{progress}%</span>
    </div>
    <Progress value={progress} className="h-2" />
   </div>
  </div>
 );
};

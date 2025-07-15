import { Input, Label } from "@/shared/ui";

interface JobAttributesSectionProps {
 budget: string;
 setBudget: (value: string) => void;
 deadline: string;
 setDeadline: (value: string) => void;
}

export const JobAttributesSection = ({
 budget,
 setBudget,
 deadline,
 setDeadline,
}: JobAttributesSectionProps) => {
 return (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
   <div>
    <Label className="block text-sm font-medium mb-2" htmlFor="budget">
     Budget (ETH)
    </Label>
    <Input
     id="budget"
     type="text"
     className="w-full px-3 py-2 rounded-md border border-border bg-background"
     placeholder="e.g. 2.5"
     value={budget}
     onChange={(e) => setBudget(e.target.value)}
     required
    />
   </div>
   <div>
    <Label className="block text-sm font-medium mb-2" htmlFor="deadline">
     Deadline
    </Label>
    <Input
     id="deadline"
     type="date"
     className="w-full px-3 py-2 rounded-md border border-border bg-background"
     value={deadline}
     onChange={(e) => setDeadline(e.target.value)}
     required
    />
   </div>
  </div>
 );
};

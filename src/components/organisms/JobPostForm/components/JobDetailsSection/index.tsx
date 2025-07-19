import { Input, Textarea, Label } from "@/shared/ui";

interface JobDetailsSectionProps {
 title: string;
 setTitle: (value: string) => void;
 description: string;
 setDescription: (value: string) => void;
}

export const JobDetailsSection = ({
 title,
 setTitle,
 description,
 setDescription,
}: JobDetailsSectionProps) => {
 return (
  <>
   <div>
    <Label className="block text-sm font-medium mb-2" htmlFor="title">
     Job Title
    </Label>
    <Input
     id="title"
     type="text"
     className="w-full px-3 py-2 rounded-md border border-border bg-background"
     placeholder="e.g. Web3 Dashboard UI Design"
     value={title}
     onChange={(e) => setTitle(e.target.value)}
     required
    />
   </div>

   <div>
    <Label className="block text-sm font-medium mb-2" htmlFor="description">
     Job Description
    </Label>
    <Textarea
     id="description"
     className="w-full px-3 py-2 rounded-md border border-border bg-background min-h-32"
     placeholder="Describe the job requirements and expectations..."
     value={description}
     onChange={(e) => setDescription(e.target.value)}
     rows={6}
     required
    />
   </div>
  </>
 );
};

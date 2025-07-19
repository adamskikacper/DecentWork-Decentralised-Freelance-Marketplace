import { Input, Label, Button } from "@/shared/ui";
import { SkillTag } from "@/shared/ui/SkillTag";

interface SkillsSectionProps {
 skillInput: string;
 setSkillInput: (value: string) => void;
 requiredSkills: string[];
 handleAddSkill: () => void;
 handleRemoveSkill: (skill: string) => void;
}

export const SkillsSection = ({
 skillInput,
 setSkillInput,
 requiredSkills,
 handleAddSkill,
 handleRemoveSkill,
}: SkillsSectionProps) => {
 return (
  <div>
   <Label className="block text-sm font-medium mb-2">Required Skills</Label>
   <div className="flex gap-2 mb-2">
    <Input
     type="text"
     className="flex-1 px-3 py-2 rounded-md border border-border bg-background"
     placeholder="e.g. Solidity"
     value={skillInput}
     onChange={(e) => setSkillInput(e.target.value)}
    />
    <Button
     type="button"
     className="px-4 py-2 rounded-md bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
     onClick={handleAddSkill}
    >
     Add
    </Button>
   </div>
   {requiredSkills.length > 0 && (
    <div className="flex flex-wrap gap-2 mt-2">
     {requiredSkills.map((skill) => (
      <SkillTag
       key={skill}
       skill={skill}
       onClick={() => handleRemoveSkill(skill)}
      />
     ))}
    </div>
   )}
  </div>
 );
};

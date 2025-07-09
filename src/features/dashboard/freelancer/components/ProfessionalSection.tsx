import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card";
import { Label } from "@/shared/ui/Label";
import { Input } from "@/shared/ui/Input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/Select";
import { Badge } from "@/shared/ui/Badge";
import { Button } from "@/shared/ui/Button";
import { X, Plus } from "lucide-react";

export const ProfessionalSection = () => {
  const skills = ["React", "TypeScript", "Node.js", "Blockchain", "Solidity"];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Professional Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="title">Professional Title</Label>
          <Input id="title" placeholder="e.g., Full Stack Developer" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="experienceLevel">Experience Level</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="beginner">Beginner (0-2 years)</SelectItem>
              <SelectItem value="intermediate">Intermediate (2-5 years)</SelectItem>
              <SelectItem value="expert">Expert (5+ years)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hourlyRate">Hourly Rate (ETH)</Label>
          <Input id="hourlyRate" placeholder="0.05" type="number" step="0.001" />
        </div>


        <div className="space-y-2">
          <Label>Skills</Label>
          <div className="flex flex-wrap gap-2 mb-2">
            {skills.map((skill, index) => (
              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                {skill}
                <X className="h-3 w-3 cursor-pointer" />
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            <Input placeholder="Add a skill..." />
            <Button variant="outline" size="sm">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
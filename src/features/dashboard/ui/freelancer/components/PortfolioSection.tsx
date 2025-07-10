import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card";
import { Label } from "@/shared/ui/Label";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { Plus, X, ExternalLink } from "lucide-react";

export const PortfolioSection = () => {
  const portfolioItems = [
    "https://github.com/username/project1",
    "https://portfolio.com/project2",
    "https://demo.example.com"
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Project Links</Label>
          <div className="space-y-2">
            {portfolioItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input value={item} placeholder="https://project-website.com" />
                <Button variant="outline" size="sm">
                  <ExternalLink className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
          <Button variant="outline" size="sm" className="w-full">
            <Plus className="h-4 w-4 mr-2" />
            Add Project Link
          </Button>
        </div>

      </CardContent>
    </Card>
  );
};
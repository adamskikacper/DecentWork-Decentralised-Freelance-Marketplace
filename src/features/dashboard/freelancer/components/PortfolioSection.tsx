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
        <CardTitle>Portfolio & Work Samples</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Portfolio Links</Label>
          <div className="space-y-2">
            {portfolioItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input value={item} placeholder="https://..." />
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
            Add Portfolio Link
          </Button>
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialties">Specialties</Label>
          <textarea
            id="specialties"
            className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Describe your key specialties and areas of expertise..."
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="workSamples">Work Samples Description</Label>
          <textarea
            id="workSamples"
            className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            placeholder="Describe your best work samples and achievements..."
          />
        </div>
      </CardContent>
    </Card>
  );
};
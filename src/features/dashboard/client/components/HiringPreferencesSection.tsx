import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/Card";
import { Label } from "@/shared/ui/Label";
import { Checkbox } from "@/shared/ui/Checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/shared/ui/Select";

export const HiringPreferencesSection = () => {
  const projectTypes = [
    { id: "web-development", label: "Web Development" },
    { id: "mobile-development", label: "Mobile Development" },
    { id: "blockchain", label: "Blockchain Development" },
    { id: "ui-ux", label: "UI/UX Design" },
    { id: "data-science", label: "Data Science" },
    { id: "devops", label: "DevOps" },
    { id: "content-writing", label: "Content Writing" },
    { id: "digital-marketing", label: "Digital Marketing" }
  ];

  const budgetRanges = [
    { id: "under-1000", label: "Under $1,000" },
    { id: "1000-5000", label: "$1,000 - $5,000" },
    { id: "5000-10000", label: "$5,000 - $10,000" },
    { id: "10000-25000", label: "$10,000 - $25,000" },
    { id: "25000-50000", label: "$25,000 - $50,000" },
    { id: "50000-plus", label: "$50,000+" }
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hiring Preferences</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label>Preferred Project Types</Label>
          <div className="grid grid-cols-2 gap-2">
            {projectTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox id={type.id} />
                <Label htmlFor={type.id} className="text-sm font-normal">
                  {type.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label>Typical Budget Ranges</Label>
          <div className="space-y-2">
            {budgetRanges.map((range) => (
              <div key={range.id} className="flex items-center space-x-2">
                <Checkbox id={range.id} />
                <Label htmlFor={range.id} className="text-sm font-normal">
                  {range.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredPayment">Preferred Payment Method</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select payment method" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="eth">Ethereum (ETH)</SelectItem>
              <SelectItem value="usdc">USD Coin (USDC)</SelectItem>
              <SelectItem value="dai">DAI</SelectItem>
              <SelectItem value="btc">Bitcoin (BTC)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="hiringFrequency">Hiring Frequency</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="How often do you hire?" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="first-time">First time hiring</SelectItem>
              <SelectItem value="occasionally">Occasionally (1-2 times/year)</SelectItem>
              <SelectItem value="regularly">Regularly (3-6 times/year)</SelectItem>
              <SelectItem value="frequently">Frequently (monthly)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};
import { useState } from "react";
import { Label } from "@/shared/ui/Label";
import { Input } from "@/shared/ui/Input";
import { Button } from "@/shared/ui/Button";
import { Plus, X, ExternalLink } from "lucide-react";
import { getDefaultPortfolioItems } from "@/shared/services/user.service";

export const PortfolioSection = () => {
 const [portfolioItems, setPortfolioItems] = useState(
  getDefaultPortfolioItems()
 );

 const handleItemChange = (index: number, value: string) => {
  const newItems = [...portfolioItems];
  newItems[index] = value;
  setPortfolioItems(newItems);
 };

 const addItem = () => {
  setPortfolioItems([...portfolioItems, ""]);
 };

 const removeItem = (index: number) => {
  const newItems = portfolioItems.filter((_, i) => i !== index);
  setPortfolioItems(newItems);
 };

 return (
  <div className="space-y-6">
   <div className="space-y-2">
    <Label>Project Links</Label>
    <div className="space-y-2">
     {portfolioItems.map((item, index) => (
      <div key={index} className="flex items-center gap-2">
       <Input
        value={item}
        onChange={(e) => handleItemChange(index, e.target.value)}
        placeholder="https://project-website.com"
       />
       <Button variant="outline" size="sm" asChild>
        <a href={item} target="_blank" rel="noopener noreferrer">
         <ExternalLink className="h-4 w-4" />
        </a>
       </Button>
       <Button variant="outline" size="sm" onClick={() => removeItem(index)}>
        <X className="h-4 w-4" />
       </Button>
      </div>
     ))}
    </div>
    <Button variant="outline" size="sm" className="w-full" onClick={addItem}>
     <Plus className="h-4 w-4 mr-2" />
     Add Project Link
    </Button>
   </div>
  </div>
 );
};

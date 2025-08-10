import React from "react";
import { Star } from "lucide-react";
import {
 Card,
 CardHeader,
 CardTitle,
 CardDescription,
 CardContent,
} from "@/shared/ui/Card";
import { useClientSatisfactionData } from "@/shared/hooks/data";

export interface ClientSatisfactionCardProps {
 className?: string;
}

export const ClientSatisfactionCard = ({
 className,
}: ClientSatisfactionCardProps) => {
 const { data, isLoading, error } = useClientSatisfactionData();

 if (error) {
  return (
   <Card className={className}>
    <CardHeader>
     <CardTitle>Client Satisfaction</CardTitle>
     <CardDescription>Unable to load satisfaction data</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="flex items-center justify-center h-[300px] text-muted-foreground">
      {error}
     </div>
    </CardContent>
   </Card>
  );
 }

 if (isLoading || !data) {
  return (
   <Card className={className}>
    <CardHeader>
     <CardTitle>Client Satisfaction</CardTitle>
     <CardDescription>Loading satisfaction data...</CardDescription>
    </CardHeader>
    <CardContent>
     <div className="flex items-center justify-center h-[300px]">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
     </div>
    </CardContent>
   </Card>
  );
 }

 const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, index) => (
   <Star
    key={index}
    className={`w-4 h-4 ${
     index < Math.floor(rating)
      ? "fill-yellow-400 text-yellow-400"
      : "text-gray-300"
    }`}
   />
  ));
 };

 return (
  <Card className={className}>
   <CardHeader>
    <CardTitle>Client Satisfaction</CardTitle>
    <CardDescription>Based on client reviews</CardDescription>
   </CardHeader>
   <CardContent>
    <div className="flex flex-col items-center justify-center space-y-4">
     <div className="text-6xl font-bold text-accent">
      {data.satisfactionPercentage}%
     </div>
     
     <div className="flex items-center space-x-1">
      {renderStars(data.averageRating)}
      <span className="ml-2 text-sm font-medium">{data.averageRating}/5</span>
     </div>

     <div className="text-center space-y-2">
      <div className="text-sm font-medium">
       Based on {data.totalReviews} reviews
      </div>
      <div className="text-xs text-muted-foreground italic">
       "{data.recentFeedback}"
      </div>
      <div className="text-xs text-muted-foreground">
       ↗ +{data.monthlyChange} from last month
      </div>
     </div>
    </div>
   </CardContent>
  </Card>
 );
};

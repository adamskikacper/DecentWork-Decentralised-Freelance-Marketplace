import React from "react";

export interface TestimonialCardProps {
 rating: number;
 text: string;
 authorInitial: string;
 authorName: string;
 authorRole: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
 rating,
 text,
 authorInitial,
 authorName,
 authorRole,
}) => {
 return (
  <div className="glass-card rounded-xl p-6 min-w-[300px] max-w-sm flex-shrink-0">
   <div className="flex items-center mb-4">
    <div className="text-yellow-400 mr-1">★★★★★</div>
    <div className="text-muted-foreground text-sm ml-2">
     {rating.toFixed(1)}
    </div>
   </div>
   <p className="text-muted-foreground mb-4">"{text}"</p>
   <div className="flex items-center">
    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center mr-3">
     {authorInitial}
    </div>
    <div>
     <div className="font-medium">{authorName}</div>
     <div className="text-xs text-muted-foreground">{authorRole}</div>
    </div>
   </div>
  </div>
 );
};

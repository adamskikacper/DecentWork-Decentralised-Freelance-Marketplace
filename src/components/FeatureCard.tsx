import React from "react";

interface FeatureCardProps {
 icon: React.ReactNode;
 title: string;
 description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
 icon,
 title,
 description,
}) => {
 return (
  <div className="flex gap-4">
   <div className="w-12 h-12 flex-shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
    {icon}
   </div>
   <div>
    <h3 className="text-lg font-semibold mb-1">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
   </div>
  </div>
 );
};

export default FeatureCard;

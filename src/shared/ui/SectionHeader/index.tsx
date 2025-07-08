import React from "react";

interface SectionHeaderProps {
 title: string;
 description?: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
 return (
  <div className="mb-8 slide-in">
   <h1 className="text-2xl font-bold mb-2">{title}</h1>
   {description && <p className="text-muted-foreground">{description}</p>}
  </div>
 );
};

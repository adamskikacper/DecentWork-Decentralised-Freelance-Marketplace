import React from "react";

interface SectionHeaderProps {
 title: string;
 description?: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
 return (
  <div className="mb-8 slide-in">
   <h1 className="text-heading-2 md:text-heading-1 mb-2">{title}</h1>
   {description && <p className="text-body-md text-muted-foreground">{description}</p>}
  </div>
 );
};

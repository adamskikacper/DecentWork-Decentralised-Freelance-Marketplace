interface JobContentProps {
 description?: string;
}

export const JobContent = ({ description }: JobContentProps) => {
 if (!description) return null;

 return (
  <p className="text-body-xs mt-0 text-muted-foreground line-clamp-3">
   {description}
  </p>
 );
};

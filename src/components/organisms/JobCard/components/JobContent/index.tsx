interface JobContentProps {
 description?: string;
}

export const JobContent = ({ description }: JobContentProps) => {
 if (!description) return null;

 return (
  <p className="text-body-sm text-muted-foreground line-clamp-2">
   {description}
  </p>
 );
};

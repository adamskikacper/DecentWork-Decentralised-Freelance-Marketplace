import { Card, CardContent } from "@/shared/ui";

interface NoDataCardProps {
 title: string;
 description: string;
 icon?: React.ReactNode;
 action?: React.ReactNode;
 className?: string;
}

export const NoDataCard = ({
 title,
 description,
 icon,
 action,
 className = "",
}: NoDataCardProps) => {
 return (
  <Card className={`text-center py-12 ${className}`}>
   <CardContent className="space-y-4">
    {icon && (
     <div className="flex justify-center mb-4 text-muted-foreground">
      {icon}
     </div>
    )}
    <div>
     <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
     <p className="text-muted-foreground">{description}</p>
    </div>
    {action && <div className="pt-4">{action}</div>}
   </CardContent>
  </Card>
 );
};

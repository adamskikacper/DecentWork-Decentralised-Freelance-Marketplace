import React from "react";
import { User } from "lucide-react";
import { Avatar } from "@/shared/ui";
import { Badge } from "@/shared/ui";
import { StatusBadge } from "@/components/atoms";

export interface UserCardProps {
 name: string;
 title?: string;
 avatar?: string;
 status?: string;
 rating?: number;
 isOnline?: boolean;
 variant?: "compact" | "detailed";
 onClick?: () => void;
 className?: string;
}

export const UserCard = ({
 name,
 title,
 avatar,
 status,
 rating,
 isOnline,
 variant = "compact",
 onClick,
 className = "",
}: UserCardProps) => {
 const handleClick = () => {
  if (onClick) onClick();
 };

 return (
  <div
   className={`
        flex items-center gap-3 
        ${onClick ? "cursor-pointer hover:bg-gray-50 rounded-lg p-2 -m-2" : ""}
        ${className}
      `}
   onClick={handleClick}
  >
   <div className="relative">
    {avatar ? (
     <Avatar>
      <img src={avatar} alt={name} className="w-full h-full object-cover" />
     </Avatar>
    ) : (
     <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
      <User className="h-4 w-4 text-gray-600" />
     </div>
    )}

    {isOnline !== undefined && (
     <div
      className={`
              absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white
              ${isOnline ? "bg-green-500" : "bg-gray-400"}
            `}
     />
    )}
   </div>

   <div className="flex-1 min-w-0">
    <div className="flex items-center gap-2">
     <p className="font-medium text-gray-900 truncate">{name}</p>
     {rating && variant === "detailed" && (
      <Badge variant="secondary" className="text-xs">
       ⭐ {rating.toFixed(1)}
      </Badge>
     )}
    </div>

    {title && <p className="text-sm text-gray-600 truncate">{title}</p>}

    {status && variant === "detailed" && (
     <div className="mt-1">
      <StatusBadge status={status} />
     </div>
    )}
   </div>

   {status && variant === "compact" && <StatusBadge status={status} />}
  </div>
 );
};

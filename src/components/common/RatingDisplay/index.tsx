import React from "react";
import { Star } from "lucide-react";
import { RATING_SIZES, RATING_SIZE_CLASSES } from "@/constants";

export type RatingSize = (typeof RATING_SIZES)[keyof typeof RATING_SIZES];

export interface RatingDisplayProps {
 rating: number;
 showText?: boolean;
 size?: RatingSize;
 className?: string;
}

const RatingDisplay: React.FC<RatingDisplayProps> = ({
 rating,
 showText = true,
 size = RATING_SIZES.MD,
 className = "",
}) => {
 return (
  <div className={`flex items-center ${className}`}>
   <Star
    className={`${RATING_SIZE_CLASSES.ICON[size]} text-yellow-400 mr-1 fill-yellow-400`}
   />
   {showText && (
    <span className={`font-medium ${RATING_SIZE_CLASSES.TEXT[size]}`}>
     {rating.toFixed(1)}
    </span>
   )}
  </div>
 );
};

export default RatingDisplay;

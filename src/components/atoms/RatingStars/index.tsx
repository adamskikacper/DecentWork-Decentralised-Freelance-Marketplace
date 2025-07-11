import React from "react";
import { Star } from "lucide-react";

export interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: { icon: "w-3 h-3", text: "text-sm" },
  md: { icon: "w-4 h-4", text: "text-base" },
  lg: { icon: "w-5 h-5", text: "text-lg" },
};

export const RatingStars: React.FC<RatingStarsProps> = ({
  rating,
  maxRating = 5,
  showValue = true,
  size = "md",
  className = "",
}) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  const emptyStars = maxRating - Math.ceil(rating);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      <div className="flex">
        {[...Array(fullStars)].map((_, i) => (
          <Star
            key={`full-${i}`}
            className={`${sizeClasses[size].icon} text-yellow-400 fill-yellow-400`}
          />
        ))}
        {hasHalfStar && (
          <Star
            className={`${sizeClasses[size].icon} text-yellow-400 fill-yellow-400/50`}
          />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={`${sizeClasses[size].icon} text-gray-300`}
          />
        ))}
      </div>
      {showValue && (
        <span className={`font-medium text-gray-700 ${sizeClasses[size].text}`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
};
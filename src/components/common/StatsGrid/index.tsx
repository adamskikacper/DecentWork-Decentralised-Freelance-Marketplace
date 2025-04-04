import React, { ReactNode } from "react";
import StatCard from "@/components/common/Card/StatCard";

interface StatItem {
 title: string;
 value: string | number;
 icon: ReactNode;
 change?: {
  value: string | number;
  isPositive: boolean;
  label: string;
 };
 delay?: string;
}

interface StatsGridProps {
 stats: StatItem[];
 columns?: number;
 className?: string;
}

const StatsGrid: React.FC<StatsGridProps> = ({
 stats,
 columns = 3,
 className = "",
}) => {
 return (
  <div
   className={`grid grid-cols-1 md:grid-cols-${columns} gap-6 ${className}`}
  >
   {stats.map((stat, index) => (
    <StatCard
     key={index}
     title={stat.title}
     value={stat.value}
     icon={stat.icon}
     change={stat.change}
     delay={stat.delay || `${0.2 + index * 0.1}s`}
    />
   ))}
  </div>
 );
};

export default StatsGrid;

import React from "react";

export interface TransactionItemProps {
 type: string;
 date: string;
 amount: string;
 status: string;
 iconBgColor: string;
 iconTextColor: string;
 icon: React.ReactNode;
 subtitle?: string;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
 type,
 date,
 amount,
 status,
 iconBgColor,
 iconTextColor,
 icon,
 subtitle,
}) => {
 return (
  <tr className="border-b border-border">
   <td className="py-3">
    <div className="flex items-center gap-2">
     <div
      className={`w-8 h-8 rounded-full ${iconBgColor} ${iconTextColor} flex items-center justify-center`}
     >
      {icon}
     </div>
     <div>
      <div className="font-medium">{type}</div>
      {subtitle && (
       <div className="text-xs text-muted-foreground">{subtitle}</div>
      )}
     </div>
    </div>
   </td>
   <td className="py-3 text-sm">{date}</td>
   <td className="py-3 text-right font-medium">{amount}</td>
   <td className="py-3 text-right">
    <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-600">
     {status}
    </span>
   </td>
  </tr>
 );
};

export default TransactionItem;

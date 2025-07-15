import React from "react";

interface Option {
 value: string;
 label: string;
}

interface FormSelectProps {
 label: string;
 name: string;
 value: string;
 options: Option[];
 onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
 className?: string;
}

export const FormSelect = ({
 label,
 name,
 value,
 options,
 onChange,
 className = "",
}) => {
 return (
  <div className={className}>
   <label className="block text-sm font-medium mb-2">{label}</label>
   <select
    name={name}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-2 rounded-md border border-border bg-background"
   >
    {options.map((option) => (
     <option key={option.value} value={option.value}>
      {option.label}
     </option>
    ))}
   </select>
  </div>
 );
};

import React from "react";
import { FileText } from "lucide-react";

interface AttachmentListProps {
 attachments: File[];
 onRemove: (index: number) => void;
}

const AttachmentList: React.FC<AttachmentListProps> = ({
 attachments,
 onRemove,
}) => {
 if (attachments.length === 0) return null;

 return (
  <div className="space-y-2">
   {attachments.map((file, index) => (
    <div
     key={index}
     className="flex items-center justify-between px-4 py-2 rounded-md bg-secondary/30"
    >
     <div className="flex items-center gap-2">
      <FileText className="h-4 w-4" />
      <span className="text-sm">{file.name}</span>
      <span className="text-xs text-muted-foreground">
       ({(file.size / 1024).toFixed(1)} KB)
      </span>
     </div>
     <button
      type="button"
      onClick={() => onRemove(index)}
      className="text-muted-foreground hover:text-foreground"
     >
      ×
     </button>
    </div>
   ))}
  </div>
 );
};

export default AttachmentList;

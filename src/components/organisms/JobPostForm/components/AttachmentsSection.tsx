import { Label } from "@/shared/ui";

interface AttachmentsSectionProps {
 files: File[];
 handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
 handleRemoveFile: (index: number) => void;
}

export const AttachmentsSection = ({
 files,
 handleFileChange,
 handleRemoveFile,
}: AttachmentsSectionProps) => {
 return (
  <div>
   <Label className="block text-sm font-medium mb-2">Attachments</Label>
   <div className="border border-dashed border-border p-4 rounded-md bg-background/50">
    <input
     type="file"
     multiple
     onChange={handleFileChange}
     className="hidden"
     id="file-upload"
    />
    <Label
     htmlFor="file-upload"
     className="flex flex-col items-center justify-center cursor-pointer"
    >
     <span className="text-primary">Upload files</span>
     <span className="text-xs text-muted-foreground mt-1">
      Click to browse (PDF, DOCX, images)
     </span>
    </Label>
   </div>
   {files.length > 0 && (
    <div className="mt-4 space-y-2">
     {files.map((file, index) => (
      <div
       key={index}
       className="flex items-center justify-between px-3 py-2 rounded-md bg-secondary/30"
      >
       <div className="flex items-center gap-2">
        <span className="text-sm">{file.name}</span>
        <span className="text-xs text-muted-foreground">
         ({(file.size / 1024).toFixed(1)} KB)
        </span>
       </div>
       <button
        type="button"
        onClick={() => handleRemoveFile(index)}
        className="text-muted-foreground hover:text-foreground"
       >
        ×
       </button>
      </div>
     ))}
    </div>
   )}
  </div>
 );
};

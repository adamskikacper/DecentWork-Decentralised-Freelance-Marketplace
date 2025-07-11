import React, { useRef, useState } from "react";
import { Upload, File, X } from "lucide-react";
import { ActionButton } from "../../atoms/ActionButton";

export interface FileDropzoneProps {
 onFilesSelect: (files: File[]) => void;
 acceptedTypes?: string;
 maxSize?: number;
 multiple?: boolean;
 maxFiles?: number;
 files?: File[];
 className?: string;
}

export const FileDropzone = ({
 onFilesSelect,
 acceptedTypes = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
 maxSize = 10,
 multiple = true,
 maxFiles = 5,
 files = [],
 className = "",
}: FileDropzoneProps) => {
 const fileInputRef = useRef<HTMLInputElement>(null);
 const [dragActive, setDragActive] = useState(false);
 const [errors, setErrors] = useState<string[]>([]);

 const validateFile = (file: File): string | null => {
  if (maxSize && file.size > maxSize * 1024 * 1024) {
   return `File ${file.name} is too large. Maximum size is ${maxSize}MB.`;
  }

  if (acceptedTypes) {
   const extension = `.${file.name.split(".").pop()?.toLowerCase()}`;
   const acceptedExtensions = acceptedTypes
    .split(",")
    .map((type) => type.trim());
   if (!acceptedExtensions.includes(extension)) {
    return `File ${file.name} has an unsupported format.`;
   }
  }

  return null;
 };

 const handleFiles = (newFiles: FileList | File[]) => {
  const fileArray = Array.from(newFiles);
  const validFiles: File[] = [];
  const newErrors: string[] = [];

  fileArray.forEach((file) => {
   const error = validateFile(file);
   if (error) {
    newErrors.push(error);
   } else if (!files.find((f) => f.name === file.name)) {
    validFiles.push(file);
   }
  });

  const totalFiles = files.length + validFiles.length;
  if (maxFiles && totalFiles > maxFiles) {
   newErrors.push(`Maximum ${maxFiles} files allowed.`);
   const allowedCount = Math.max(0, maxFiles - files.length);
   validFiles.splice(allowedCount);
  }

  setErrors(newErrors);
  if (validFiles.length > 0) {
   onFilesSelect([...files, ...validFiles]);
  }
 };

 const handleDrop = (e: React.DragEvent) => {
  e.preventDefault();
  setDragActive(false);
  handleFiles(e.dataTransfer.files);
 };

 const handleDragOver = (e: React.DragEvent) => {
  e.preventDefault();
  setDragActive(true);
 };

 const handleDragLeave = (e: React.DragEvent) => {
  e.preventDefault();
  setDragActive(false);
 };

 const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files) {
   handleFiles(e.target.files);
  }
 };

 const removeFile = (index: number) => {
  const newFiles = files.filter((_, i) => i !== index);
  onFilesSelect(newFiles);
 };

 const openFileDialog = () => {
  fileInputRef.current?.click();
 };

 return (
  <div className={`space-y-4 ${className}`}>
   <div
    className={`
          border-2 border-dashed rounded-lg p-6 text-center transition-colors
          ${
           dragActive
            ? "border-primary bg-primary/5"
            : "border-gray-300 hover:border-gray-400"
          }
        `}
    onDrop={handleDrop}
    onDragOver={handleDragOver}
    onDragLeave={handleDragLeave}
   >
    <input
     ref={fileInputRef}
     type="file"
     multiple={multiple}
     accept={acceptedTypes}
     onChange={handleFileInput}
     className="hidden"
    />

    <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />

    <p className="text-lg font-medium text-gray-700 mb-2">
     Drop files here or click to browse
    </p>

    <p className="text-sm text-gray-500 mb-4">
     Supported formats: {acceptedTypes.replace(/\./g, "").toUpperCase()}
     {maxSize && ` • Max size: ${maxSize}MB`}
     {maxFiles && ` • Max files: ${maxFiles}`}
    </p>

    <ActionButton onClick={openFileDialog} variant="outline">
     Browse Files
    </ActionButton>
   </div>

   {errors.length > 0 && (
    <div className="space-y-1">
     {errors.map((error, index) => (
      <p key={index} className="text-sm text-red-500">
       {error}
      </p>
     ))}
    </div>
   )}

   {files.length > 0 && (
    <div className="space-y-2">
     <h4 className="font-medium text-gray-700">Selected Files:</h4>
     <div className="space-y-2">
      {files.map((file, index) => (
       <div
        key={index}
        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
       >
        <div className="flex items-center gap-3">
         <File className="w-5 h-5 text-gray-500" />
         <div>
          <p className="font-medium text-gray-700">{file.name}</p>
          <p className="text-sm text-gray-500">
           {(file.size / 1024 / 1024).toFixed(2)} MB
          </p>
         </div>
        </div>
        <ActionButton
         onClick={() => removeFile(index)}
         variant="ghost"
         size="sm"
         icon={X}
        >
         Remove
        </ActionButton>
       </div>
      ))}
     </div>
    </div>
   )}
  </div>
 );
};

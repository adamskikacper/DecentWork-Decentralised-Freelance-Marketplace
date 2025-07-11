import React from "react";

export interface AuthTemplateProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  showLogo?: boolean;
  className?: string;
}

export const AuthTemplate: React.FC<AuthTemplateProps> = ({
  children,
  title,
  subtitle,
  showLogo = true,
  className = "",
}) => {
  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 ${className}`}>
      <div className="flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {showLogo && (
            <div className="flex justify-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">D</span>
              </div>
            </div>
          )}
          
          {title && (
            <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
              {title}
            </h2>
          )}
          
          {subtitle && (
            <p className="mt-2 text-center text-sm text-gray-600">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-lg sm:rounded-lg sm:px-10">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
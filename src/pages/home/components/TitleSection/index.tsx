interface TitleSectionProps {
 title: string;
}

export const TitleSection = ({ title }: TitleSectionProps) => {
 return (
  <div className="relative h-[100vh] bg-gray-100 dark:bg-gray-900">
   <div className="container flex flex-col items-center justify-center mx-auto h-full px-4 sm:px-6 lg:px-8 relative z-10">
    <div className=" text-center relative max-w-4xl">
     <h1 className="text-display-lg">{title}</h1>
    </div>
   </div>
  </div>
 );
};

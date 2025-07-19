import { useRef } from "react";
import { WorkEnvironment } from "../types";
import { useJourneyAnimation } from "@/shared/hooks/ui";

interface JourneySectionProps {
 workEnvironments: WorkEnvironment[];
 className?: string;
}

export const JourneySection = ({
 workEnvironments,
 className = "",
}: JourneySectionProps) => {
 const containerRef = useRef<HTMLDivElement>(null);
 const sectionsRef = useRef<HTMLDivElement[]>([]);
 const imagesRef = useRef<HTMLDivElement[]>([]);

 useJourneyAnimation({
  containerRef,
  sectionsRef,
  imagesRef,
 });

 return (
  <div className={`relative ${className}`}>
   <div
    ref={containerRef}
    className="h-[200vh] md:h-[250vh] lg:h-[800vh] relative bg-gray-100 dark:bg-gray-900"
    style={{
     scrollSnapType: "y mandatory",
     scrollBehavior: "smooth",
    }}
   >
    <div
     className="pin-target sticky top-0 h-screen flex items-center justify-center overflow-hidden"
     style={{ scrollSnapAlign: "start" }}
    >
     <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
       <div className="relative h-[400px] md:h-[500px] w-full lg:max-w-2xl order-2 lg:order-1">
        {workEnvironments.map((env, index) => (
         <div
          key={env.id}
          ref={(el) => (sectionsRef.current[index] = el!)}
          className="absolute inset-0 flex flex-col max-w-xl justify-center space-y-4 md:space-y-6 px-2 sm:px-0"
         >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-bold text-foreground">
           {env.title}
          </h2>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed">
           {env.description}
          </p>
         </div>
        ))}
       </div>

       <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full max-w-md lg:max-w-lg xl:max-w-xl flex items-center justify-center order-1 lg:order-2">
        {workEnvironments.map((env, index) => (
         <div
          key={env.id}
          ref={(el) => (imagesRef.current[index] = el!)}
          className="absolute w-full h-full"
         >
          <div className="absolute w-full h-full -translate-x-4 translate-y-4 bg-gradient-to-tr from-primary to-primary/10 rounded-2xl shadow-lg"></div>
          <img
           src={env.image}
           alt={env.alt}
           className="absolute w-full h-full object-cover  rounded-2xl shadow-2xl z-10"
          />
         </div>
        ))}
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

import React from "react";
import { FreelancerProfile } from "@/shared/models/freelancer";
import { useFreelancers } from "@/shared/hooks/data/useFreelancers";
import {
 ActionButtonGroup,
 ActionItem,
 ContentSection,
 EmptyState,
 ErrorState,
 UserCard,
} from "@/components/molecules";
import { RatingStars, StatusBadge } from "@/components/atoms";
import { Badge } from "@/shared/ui";
import { Users, Eye, MessageCircle, UserPlus } from "lucide-react";

export interface FreelancerGridProps {
 searchQuery?: string;
 skillsFilter?: string[];
 statusFilter?: string;
 onMessage?: (freelancerId: string) => void;
 onView?: (freelancerId: string) => void;
 onHire?: (freelancerId: string) => void;
 className?: string;
}

export const FreelancerGrid = ({
 searchQuery,
 skillsFilter,
 statusFilter,
 onMessage,
 onView,
 onHire,
 className = "",
}: FreelancerGridProps) => {
 const { filteredFreelancers, isLoading, error, refetch } = useFreelancers({
  searchQuery,
  skills: skillsFilter,
  status: statusFilter,
 });

 if (error) {
  return (
   <ContentSection className={className}>
    <ErrorState message={error} onRetry={refetch} />
   </ContentSection>
  );
 }

 return (
  <ContentSection
   title="Available Freelancers"
   description={`${filteredFreelancers.length} freelancers found`}
   isLoading={isLoading}
   className={className}
   emptyMessage="No freelancers found matching your criteria"
  >
   {filteredFreelancers.length === 0 && !isLoading ? (
    <EmptyState
     icon={Users}
     title="No freelancers found"
     description="Try adjusting your search criteria or removing some filters"
    />
   ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
     {filteredFreelancers.map((freelancer) => (
      <FreelancerCard
       key={freelancer.id}
       freelancer={freelancer}
       onMessage={onMessage}
       onView={onView}
       onHire={onHire}
      />
     ))}
    </div>
   )}
  </ContentSection>
 );
};

interface FreelancerCardProps {
 freelancer: FreelancerProfile;
 onMessage?: (freelancerId: string) => void;
 onView?: (freelancerId: string) => void;
 onHire?: (freelancerId: string) => void;
}

const FreelancerCard = ({
 freelancer,
 onMessage,
 onView,
 onHire,
}: FreelancerCardProps) => {
 const actions: ActionItem[] = [
  {
   label: "View",
   onClick: () => onView?.(freelancer.id),
   icon: Eye,
   variant: "outline",
  },
  {
   label: "Message",
   onClick: () => onMessage?.(freelancer.id),
   icon: MessageCircle,
   variant: "outline",
  },
  {
   label: "Hire",
   onClick: () => onHire?.(freelancer.id),
   icon: UserPlus,
   variant: "default",
  },
 ];

 return (
  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
   <div className="space-y-4">
    <UserCard
     name={freelancer.name}
     title={freelancer.experience_level}
     variant="detailed"
     onClick={() => onView?.(freelancer.id)}
    />

    <div className="space-y-3">
     <div className="flex items-center justify-between">
      <RatingStars rating={freelancer.rating} size="sm" />
      <StatusBadge status={freelancer.availability} />
     </div>

     <p className="text-sm text-gray-600 line-clamp-2">{freelancer.bio}</p>

     {freelancer.skills && (
      <div className="flex flex-wrap gap-1">
       {freelancer.skills.slice(0, 3).map((skill, index) => (
        <Badge key={index} variant="secondary" className="text-xs">
         {skill}
        </Badge>
       ))}
       {freelancer.skills.length > 3 && (
        <Badge variant="outline" className="text-xs">
         +{freelancer.skills.length - 3}
        </Badge>
       )}
      </div>
     )}

     <div className="text-sm text-gray-500">
      <p>Rate: ${freelancer.hourly_rate}/hr</p>
      <p>Projects: {freelancer.total_jobs}</p>
     </div>
    </div>

    <ActionButtonGroup
     actions={actions}
     size="sm"
     className="pt-2 border-t border-gray-100"
    />
   </div>
  </div>
 );
};

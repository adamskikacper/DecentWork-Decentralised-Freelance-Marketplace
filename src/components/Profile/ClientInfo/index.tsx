import React from "react";

interface ClientInfoProps {
 clientLocation: string;
 clientHiringRate: string;
 clientJobs: string | number;
 clientRating: string;
}

export const ClientInfo: React.FC<ClientInfoProps> = ({
 clientLocation,
 clientHiringRate,
 clientJobs,
 clientRating,
}) => {
 return (
  <div>
   <h3 className="text-lg font-semibold mb-3">About the Client</h3>
   <div className="flex flex-wrap gap-8 mb-4 text-sm">
    <div>
     <div className="text-muted-foreground mb-1">Location</div>
     <div className="font-medium">{clientLocation}</div>
    </div>
    <div>
     <div className="text-muted-foreground mb-1">Hiring Rate</div>
     <div className="font-medium">{clientHiringRate}</div>
    </div>
    <div>
     <div className="text-muted-foreground mb-1">Jobs Posted</div>
     <div className="font-medium">{clientJobs}</div>
    </div>
    <div>
     <div className="text-muted-foreground mb-1">Rating</div>
     <div className="font-medium flex items-center">
      <span className="text-yellow-500 mr-1">★</span>
      <span>{clientRating}</span>
     </div>
    </div>
   </div>
  </div>
 );
};

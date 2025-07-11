import React, { useState } from "react";

interface BidFormProps {
 onSubmit: (bidData: {
  bidAmount: string;
  deliveryDays: string;
  proposal: string;
 }) => void;
}

export const BidForm = ({ onSubmit }: BidFormProps) => {
 const [bidAmount, setBidAmount] = useState("");
 const [deliveryDays, setDeliveryDays] = useState("");
 const [proposal, setProposal] = useState("");

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  onSubmit({ bidAmount, deliveryDays, proposal });
 };

 return (
  <>
   <h2 className="text-xl font-semibold mb-4">Submit a Proposal</h2>
   <form onSubmit={handleSubmit}>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
     <div>
      <label className="block text-sm font-medium mb-2" htmlFor="bidAmount">
       Bid Amount (ETH)
      </label>
      <input
       id="bidAmount"
       type="text"
       className="w-full px-3 py-2 rounded-md border border-border bg-background"
       placeholder="e.g. 1.5"
       value={bidAmount}
       onChange={(e) => setBidAmount(e.target.value)}
       required
      />
     </div>
     <div>
      <label className="block text-sm font-medium mb-2" htmlFor="deliveryDays">
       Delivery (Days)
      </label>
      <input
       id="deliveryDays"
       type="text"
       className="w-full px-3 py-2 rounded-md border border-border bg-background"
       placeholder="e.g. 7"
       value={deliveryDays}
       onChange={(e) => setDeliveryDays(e.target.value)}
       required
      />
     </div>
    </div>
    <div className="mb-6">
     <label className="block text-sm font-medium mb-2" htmlFor="proposal">
      Cover Letter
     </label>
     <textarea
      id="proposal"
      className="w-full px-3 py-2 rounded-md border border-border bg-background min-h-32"
      placeholder="Introduce yourself and explain how you can help..."
      value={proposal}
      onChange={(e) => setProposal(e.target.value)}
      rows={6}
      required
     ></textarea>
    </div>
    <div className="flex justify-end">
     <button
      type="submit"
      className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors"
     >
      Submit Proposal
     </button>
    </div>
   </form>
  </>
 );
};

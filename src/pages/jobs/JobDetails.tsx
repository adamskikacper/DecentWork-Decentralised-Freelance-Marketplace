import React from "react";
import Navbar from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import JobDetails from "../../components/job/JobDetails";

const JobDetailsPage = () => {
 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-grow pt-24 pb-12 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
     <JobDetails />
    </div>
   </main>
   <Footer />
  </div>
 );
};

export default JobDetailsPage;

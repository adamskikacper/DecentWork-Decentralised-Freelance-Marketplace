import React from "react";
import JobCard from "@/components/job/JobCard";

interface Job {
  id: string;
  title: string;
  description: string;
  postedDate: string;
  proposals: number;
  tags: string[];
  budget: string;
}

interface FeaturedJobsSectionProps {
  title?: string;
  subtitle?: string;
  jobs: Job[];
}

const FeaturedJobsSection: React.FC<FeaturedJobsSectionProps> = ({
  title = "Featured Jobs",
  subtitle = "Find exciting opportunities and collaborate with clients from around the world.",
  jobs = [],
}) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="heading-2 mb-4">{title}</h2>
          <p className="body-text">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs.map((job, index) => (
            <div
              key={job.id}
              className="slide-up"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <JobCard
                id={job.id}
                title={job.title}
                description={job.description}
                postedDate={job.postedDate}
                proposals={job.proposals}
                tags={job.tags}
                budget={job.budget}
                onDetails={() => console.log(`View details for job: ${job.id}`)}
              />
            </div>
          ))}
        </div>

        {jobs.length > 0 && (
          <div className="text-center mt-12">
            <a
              href="/jobs"
              className="inline-flex items-center px-4 py-2 rounded-md bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              View All Jobs
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedJobsSection;

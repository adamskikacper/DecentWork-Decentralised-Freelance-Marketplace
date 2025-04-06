import React from "react";
import TestimonialCard from "@/components/profile/Reviews/TestimonialCard";

interface Stat {
  value: string;
  label: string;
  delay?: string;
}

interface Testimonial {
  rating: number;
  text: string;
  authorInitial: string;
  authorName: string;
  authorRole: string;
}

interface TestimonialsSectionProps {
  title?: string;
  subtitle?: string;
  stats?: Stat[];
  testimonials?: Testimonial[];
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  title = "Trusted by Blockchain Professionals",
  subtitle = "Join thousands of freelancers and clients who trust DecentWork for Web3 jobs.",
  stats = [
    { value: "5,000+", label: "Freelancers", delay: "0s" },
    { value: "1,200+", label: "Clients", delay: "0.1s" },
    { value: "10,000+", label: "Jobs", delay: "0.2s" },
    { value: "$15M+", label: "Paid to Freelancers", delay: "0.3s" },
  ],
  testimonials = [],
}) => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in">
          <h2 className="heading-2 mb-4">{title}</h2>
          <p className="body-text">{subtitle}</p>
        </div>

        {stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card rounded-xl p-6 slide-up"
                style={{ animationDelay: stat.delay || `${0.1 * index}s` }}
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        )}

        {testimonials.length > 0 && (
          <div className="flex overflow-x-auto gap-6 pb-6 no-scrollbar">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                rating={testimonial.rating}
                text={testimonial.text}
                authorInitial={testimonial.authorInitial}
                authorName={testimonial.authorName}
                authorRole={testimonial.authorRole}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;

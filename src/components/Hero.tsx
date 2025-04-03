
import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5"></div>
        <div className="absolute top-3/4 right-1/4 w-[600px] h-[600px] rounded-full bg-secondary/30 filter blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-background to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Content */}
          <div className="max-w-2xl slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="mb-6 inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <span className="flex-shrink-0 w-2 h-2 rounded-full bg-primary mr-2"></span>
              <span>Decentralized Freelance Marketplace</span>
            </div>
            
            <h1 className="heading-1 mb-6">
              The Future of Work is <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Decentralized</span>
            </h1>
            
            <p className="body-text mb-8 max-w-xl">
              Connect directly with clients and freelancers worldwide. No middlemen, 
              secure payments via smart contracts, and complete ownership of your work.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <Link to="/dashboard" className="button-primary text-center">
                Start Earning
              </Link>
              <Link to="/jobs" className="button-secondary text-center">
                Find Talent
              </Link>
            </div>
            
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="slide-up" style={{ animationDelay: '0.4s' }}>
                <div className="text-3xl font-bold">12k+</div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="slide-up" style={{ animationDelay: '0.5s' }}>
                <div className="text-3xl font-bold">24k+</div>
                <div className="text-sm text-muted-foreground">Freelancers</div>
              </div>
              <div className="slide-up" style={{ animationDelay: '0.6s' }}>
                <div className="text-3xl font-bold">$8M+</div>
                <div className="text-sm text-muted-foreground">Paid Out</div>
              </div>
              <div className="slide-up" style={{ animationDelay: '0.7s' }}>
                <div className="text-3xl font-bold">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image/Illustration */}
          <div className="w-full max-w-md lg:max-w-lg xl:max-w-xl blur-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative aspect-square w-full glass-card rounded-2xl p-6 overflow-hidden">
              {/* Placeholder for an illustration or image */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent"></div>
              <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-secondary mb-6 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.09 9C9.3251 8.33167 9.78915 7.76811 10.4 7.40913C11.0108 7.05016 11.7289 6.91894 12.4272 7.03871C13.1255 7.15849 13.7588 7.52152 14.2151 8.06353C14.6713 8.60553 14.9211 9.29152 14.92 10C14.92 12 11.92 13 11.92 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 17H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">How It Works</h3>
                <p className="text-sm text-muted-foreground mb-6">Smart contracts ensure secure and trustless transactions between freelancers and clients.</p>
                <Link to="/jobs" className="text-sm font-medium underline">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

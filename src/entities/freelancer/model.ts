export interface FreelancerProfile {
  id: string;
  name: string;
  email: string;
  skills: string[];
  bio: string;
  hourly_rate: number;
  rating: number;
  total_jobs: number;
  avatar_url?: string;
  location?: string;
  experience_level: string;
  availability: "available" | "busy" | "unavailable";
}

export interface FreelancerSummary {
  id: string;
  name: string;
  skills: string[];
  hourly_rate: number;
  rating: number;
  total_jobs: number;
  avatar_url?: string;
  location?: string;
}
export interface Job {
  id: string;
  title: string;
  description: string;
  budget: number;
  skills: string[];
  client: string;
  status: "open" | "in_progress" | "completed" | "cancelled";
  created_at: string;
  updated_at: string;
}

export interface JobOpportunity {
  id: string;
  title: string;
  description: string;
  budget: number;
  skills: string[];
  client: string;
  duration: string;
  experience_level: string;
  job_type: string;
  created_at: string;
}
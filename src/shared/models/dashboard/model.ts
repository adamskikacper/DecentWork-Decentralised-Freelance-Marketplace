export interface DashboardStats {
  total_earnings: number;
  active_jobs: number;
  completed_jobs: number;
  success_rate: number;
  total_hours: number;
  average_rating: number;
}

export interface DashboardHomeData {
  stats: DashboardStats;
  recent_jobs: any[];
  top_freelancers: any[];
  messages: any[];
}

export interface JobsData {
  active_jobs: any[];
  completed_jobs: any[];
  draft_jobs: any[];
}
export interface User {
  id: string;
  name: string;
  email: string;
  type: "client" | "freelancer";
}

export interface AuthState {
  user: User | null;
  userType: "client" | "freelancer" | null;
  loading: boolean;
}
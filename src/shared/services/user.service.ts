import type { User } from "@/shared/models/user";

export interface UserProfile {
 id: string;
 name: string;
 email: string;
 type: "client" | "freelancer";
 skills: string[];
 portfolioItems: string[];
 bio?: string;
 hourlyRate?: string;
 avatar?: string;
 location?: string;
 experienceLevel?: string;
 availability?: "available" | "busy" | "unavailable";
}

export const getUser = async (userId: string): Promise<User | null> => {
 return null;
};

export const getUserProfile = async (
 userId: string
): Promise<UserProfile | null> => {
 return null;
};

export const updateUserProfile = async (
 userId: string,
 profileData: Partial<UserProfile>
) => {
 return null;
};

export const uploadUserAvatar = async (userId: string, file: File) => {
 return null;
};

export const getDefaultUserSkills = (): string[] => {
 return ["React", "TypeScript", "Node.js", "Blockchain", "Solidity"];
};

export const getDefaultPortfolioItems = (): string[] => {
 return [
  "https://github.com/username/project1",
  "https://portfolio.com/project2",
  "https://demo.example.com",
 ];
};

export const getUserSkills = async (userId: string): Promise<string[]> => {
 return getDefaultUserSkills();
};

export const updateUserSkills = async (userId: string, skills: string[]) => {
 return null;
};

export const getUserPortfolioItems = async (
 userId: string
): Promise<string[]> => {
 return getDefaultPortfolioItems();
};

export const updateUserPortfolioItems = async (
 userId: string,
 portfolioItems: string[]
) => {
 return null;
};

export const addUserSkill = async (userId: string, skill: string) => {
 return null;
};

export const removeUserSkill = async (userId: string, skill: string) => {
 return null;
};

export const addPortfolioItem = async (
 userId: string,
 portfolioItem: string
) => {
 return null;
};

export const removePortfolioItem = async (
 userId: string,
 portfolioItem: string
) => {
 return null;
};

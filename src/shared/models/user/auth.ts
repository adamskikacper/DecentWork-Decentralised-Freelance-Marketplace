import { UserRole } from "@/shared/constants";

export type UserType = UserRole | null;

export type AuthUser = {
 id: string;
 email: string;
 userType: UserType;
};

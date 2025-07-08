import { User } from "../types";

export const isValidUser = (user: unknown): user is User => {
 if (!user || typeof user !== "object") {
  console.log("User validation failed: user is null or not an object");
  return false;
 }

 const u = user as Partial<User>;

 console.log("Validating user object:", {
  hasId: typeof u.id === "string",
  hasEmail: typeof u.email === "string",
  hasName: typeof u.name === "string",
  userType: u.type,
 });

 // Check if essential fields are present
 return (
  typeof u.email === "string" &&
  (typeof u.name === "string" || u.name === undefined) &&
  (typeof u.type === "string" || u.type === undefined)
 );
};

export interface User {
 id: string;
 name: string;
 email: string;
 type: "client" | "freelancer";
}

export interface Skill {
 value: string;
 label: string;
}

export * from "./dashboard";

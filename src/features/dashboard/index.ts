// Barrel exports for the dashboard feature
export * from "./layout";
export * from "./common";
export * from "./routes";

// Namespace re-exports to match previous public API
export * as Client from "./client";
export * as Freelancer from "./freelancer";
export * as Views from "./common/pages";

// Direct dashboard helper
export { Dashboard } from "./Dashboard";

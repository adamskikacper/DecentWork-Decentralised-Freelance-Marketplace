#!/usr/bin/env node

/**
 * Feature-Sliced Design Migration Script
 * This script helps migrate your project to FSD structure
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const PHASES = {
 1: "Create Shared Layer",
 2: "Create Entities Layer",
 3: "Restructure Features Layer",
 4: "Create Widgets Layer",
 5: "Restructure Pages Layer",
 6: "Refactor App Layer",
 7: "Cleanup and Testing",
};

function createDirectory(dirPath) {
 if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath, { recursive: true });
  console.log(`✓ Created directory: ${dirPath}`);
 } else {
  console.log(`- Directory already exists: ${dirPath}`);
 }
}

function copyFile(src, dest) {
 if (fs.existsSync(src)) {
  const destDir = path.dirname(dest);
  createDirectory(destDir);
  fs.copyFileSync(src, dest);
  console.log(`✓ Copied: ${src} → ${dest}`);
 } else {
  console.log(`⚠ Source file not found: ${src}`);
 }
}

function createIndexFile(dirPath, exports) {
 const indexPath = path.join(dirPath, "index.ts");
 const content = exports.map((exp) => `export * from './${exp}';`).join("\n");
 fs.writeFileSync(indexPath, content);
 console.log(`✓ Created index file: ${indexPath}`);
}

function phase1_createSharedLayer() {
 console.log("\n🚀 Starting Phase 1: Create Shared Layer");

 // Create directories
 const sharedDirs = [
  "src/shared/ui",
  "src/shared/lib",
  "src/shared/api",
  "src/shared/config",
  "src/shared/hooks",
 ];

 sharedDirs.forEach(createDirectory);

 // Copy UI components
 if (fs.existsSync("src/components/UI")) {
  execSync("cp -r src/components/UI/* src/shared/ui/", { stdio: "inherit" });
  console.log("✓ Copied UI components to shared layer");
 }

 // Copy utilities
 copyFile("src/lib/utils.ts", "src/shared/lib/utils.ts");
 copyFile("src/utils/userValidation.ts", "src/shared/lib/userValidation.ts");

 // Copy API services
 if (fs.existsSync("src/api")) {
  execSync("cp -r src/api/* src/shared/api/", { stdio: "inherit" });
  console.log("✓ Copied API services to shared layer");
 }

 // Copy constants
 if (fs.existsSync("src/constants")) {
  execSync("cp -r src/constants/* src/shared/config/", { stdio: "inherit" });
  console.log("✓ Copied constants to shared layer");
 }

 // Copy hooks
 copyFile("src/hooks/useToast.ts", "src/shared/hooks/useToast.ts");
 copyFile("src/hooks/useMobile.ts", "src/shared/hooks/useMobile.ts");

 console.log("✅ Phase 1 completed!");
}

function phase2_createEntitiesLayer() {
 console.log("\n🚀 Starting Phase 2: Create Entities Layer");

 // Create entity directories
 const entities = ["user", "job", "freelancer", "client", "review"];
 entities.forEach((entity) => {
  createDirectory(`src/entities/${entity}/model`);
  createDirectory(`src/entities/${entity}/ui`);
 });

 // Create user entity example
 const userTypes = `export interface User {
  id: string;
  name: string;
  email: string;
  userType: 'client' | 'freelancer';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProfile extends User {
  bio?: string;
  skills?: string[];
  portfolio?: string[];
  rating?: number;
  completedJobs?: number;
}`;

 fs.writeFileSync("src/entities/user/model/types.ts", userTypes);

 // Create job entity example
 const jobTypes = `export interface Job {
  id: string;
  title: string;
  description: string;
  budget: string;
  duration: string;
  tags: string[];
  category: string;
  clientId: string;
  status: 'open' | 'in_progress' | 'completed' | 'cancelled';
  postedDate: Date;
  proposals: number;
}

export interface JobDetails extends Job {
  requirements: string[];
  attachments?: string[];
  deadline?: Date;
}`;

 fs.writeFileSync("src/entities/job/model/types.ts", jobTypes);

 console.log("✅ Phase 2 completed!");
}

function phase3_restructureFeaturesLayer() {
 console.log("\n🚀 Starting Phase 3: Restructure Features Layer");

 // Create feature directories
 const features = [
  "authentication",
  "job-search",
  "job-posting",
  "freelancer-hiring",
  "profile-editing",
  "messaging",
 ];

 features.forEach((feature) => {
  createDirectory(`src/features/${feature}/ui`);
  createDirectory(`src/features/${feature}/model`);
  createDirectory(`src/features/${feature}/api`);
 });

 // Move authentication components
 if (fs.existsSync("src/components/Auth")) {
  execSync("cp -r src/components/Auth/* src/features/authentication/ui/", {
   stdio: "inherit",
  });
  console.log("✓ Moved authentication components");
 }

 // Move job components
 if (fs.existsSync("src/components/Job")) {
  execSync("cp -r src/components/Job/* src/features/job-search/ui/", {
   stdio: "inherit",
  });
  console.log("✓ Moved job components");
 }

 console.log("✅ Phase 3 completed!");
}

function phase4_createWidgetsLayer() {
 console.log("\n🚀 Starting Phase 4: Create Widgets Layer");

 // Create widget directories
 const widgets = [
  "navbar",
  "footer",
  "dashboard-sidebar",
  "dashboard-stats",
  "job-list",
  "freelancer-list",
 ];

 widgets.forEach((widget) => {
  createDirectory(`src/widgets/${widget}/ui`);
  createDirectory(`src/widgets/${widget}/model`);
 });

 // Move layout components
 if (fs.existsSync("src/components/Layout")) {
  execSync(
   "cp src/components/Layout/Header/index.tsx src/widgets/navbar/ui/navbar.tsx",
   { stdio: "inherit" }
  );
  execSync(
   "cp src/components/Layout/Footer/index.tsx src/widgets/footer/ui/footer.tsx",
   { stdio: "inherit" }
  );
  execSync(
   "cp src/components/Layout/Sidebar/index.tsx src/widgets/dashboard-sidebar/ui/dashboard-sidebar.tsx",
   { stdio: "inherit" }
  );
  console.log("✓ Moved layout components to widgets");
 }

 console.log("✅ Phase 4 completed!");
}

function phase5_restructurePagesLayer() {
 console.log("\n🚀 Starting Phase 5: Restructure Pages Layer");

 // Create page directories
 const pages = [
  "home",
  "jobs",
  "job-details",
  "login",
  "dashboard",
  "not-found",
 ];

 pages.forEach((page) => {
  createDirectory(`src/pages/${page}/ui`);
  createDirectory(`src/pages/${page}/model`);
 });

 // Move existing pages
 if (fs.existsSync("src/pages/Home")) {
  execSync("cp src/pages/Home/index.tsx src/pages/home/ui/home.tsx", {
   stdio: "inherit",
  });
 }
 if (fs.existsSync("src/pages/Login")) {
  execSync("cp src/pages/Login/index.tsx src/pages/login/ui/login.tsx", {
   stdio: "inherit",
  });
 }
 if (fs.existsSync("src/pages/Jobs")) {
  execSync("cp -r src/pages/Jobs/* src/pages/jobs/ui/", { stdio: "inherit" });
 }

 console.log("✅ Phase 5 completed!");
}

function phase6_refactorAppLayer() {
 console.log("\n🚀 Starting Phase 6: Refactor App Layer");

 // Create app directories
 createDirectory("src/app/providers");
 createDirectory("src/app/routing");
 createDirectory("src/app/styles");

 // Copy existing app files
 copyFile("src/App.tsx", "src/app/app.tsx");
 copyFile("src/App.css", "src/app/styles/app.css");
 copyFile("src/index.css", "src/app/styles/globals.css");

 console.log("✅ Phase 6 completed!");
}

function phase7_cleanupAndTesting() {
 console.log("\n🚀 Starting Phase 7: Cleanup and Testing");

 console.log("Manual steps required:");
 console.log("1. Update all import statements to use new FSD structure");
 console.log("2. Test application functionality");
 console.log("3. Remove old directory structure");
 console.log("4. Run build to ensure no errors");

 console.log("✅ Phase 7 setup completed!");
}

function main() {
 const phase = process.argv[2];

 if (!phase) {
  console.log("📋 Available phases:");
  Object.entries(PHASES).forEach(([num, name]) => {
   console.log(`  ${num}. ${name}`);
  });
  console.log("\nUsage: node migrate-to-fsd.js <phase_number>");
  console.log("Example: node migrate-to-fsd.js 1");
  return;
 }

 const phaseNum = parseInt(phase);
 if (phaseNum < 1 || phaseNum > 7) {
  console.error("❌ Invalid phase number. Use 1-7.");
  return;
 }

 console.log(`\n🎯 Running Phase ${phaseNum}: ${PHASES[phaseNum]}`);

 switch (phaseNum) {
  case 1:
   phase1_createSharedLayer();
   break;
  case 2:
   phase2_createEntitiesLayer();
   break;
  case 3:
   phase3_restructureFeaturesLayer();
   break;
  case 4:
   phase4_createWidgetsLayer();
   break;
  case 5:
   phase5_restructurePagesLayer();
   break;
  case 6:
   phase6_refactorAppLayer();
   break;
  case 7:
   phase7_cleanupAndTesting();
   break;
 }

 console.log(`\n✨ Next steps:`);
 if (phaseNum < 7) {
  console.log(`   Run: node migrate-to-fsd.js ${phaseNum + 1}`);
 } else {
  console.log("   🎉 Migration complete! Test your application.");
 }
}

if (require.main === module) {
 main();
}

module.exports = {
 phase1_createSharedLayer,
 phase2_createEntitiesLayer,
 phase3_restructureFeaturesLayer,
 phase4_createWidgetsLayer,
 phase5_restructurePagesLayer,
 phase6_refactorAppLayer,
 phase7_cleanupAndTesting,
};

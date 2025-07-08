# Feature-Sliced Design Migration Plan

## Pre-Migration Checklist

- [ ] Backup current project
- [ ] Create feature branch: `git checkout -b feature/fsd-migration`
- [ ] Update tsconfig.paths.json (completed)

## Phase 1: Create Shared Layer (Week 1)

### Step 1.1: Create Directory Structure

```bash
mkdir -p src/shared/ui
mkdir -p src/shared/lib
mkdir -p src/shared/api
mkdir -p src/shared/config
mkdir -p src/shared/hooks
```

### Step 1.2: Move UI Components

```bash
# Move UI components to shared layer
cp -r src/components/UI/* src/shared/ui/
```

### Step 1.3: Create shared/ui/index.ts

```typescript
// src/shared/ui/index.ts
export * from "./Accordion";
export * from "./Alert";
export * from "./Button";
export * from "./Card";
export * from "./Input";
export * from "./Select";
export * from "./Textarea";
export * from "./Dialog";
export * from "./Sheet";
export * from "./Toast";
export * from "./Tooltip";
export * from "./Badge";
export * from "./Avatar";
export * from "./Checkbox";
export * from "./Form";
export * from "./Label";
export * from "./Progress";
export * from "./Skeleton";
export * from "./Switch";
export * from "./Tabs";
export * from "./Table";
// Add all your UI components here
```

### Step 1.4: Move Utilities

```bash
# Move utilities to shared/lib
cp src/lib/utils.ts src/shared/lib/
cp -r src/utils/* src/shared/lib/
```

### Step 1.5: Create shared/lib/index.ts

```typescript
// src/shared/lib/index.ts
export * from "./utils";
export * from "./userValidation";
```

### Step 1.6: Move API Base

```bash
# Move API configuration
cp -r src/api/* src/shared/api/
```

### Step 1.7: Create shared/api/index.ts

```typescript
// src/shared/api/index.ts
export * from "./authService";
```

### Step 1.8: Move Constants

```bash
# Move constants
cp -r src/constants/* src/shared/config/
```

### Step 1.9: Create shared/config/index.ts

```typescript
// src/shared/config/index.ts
export * from "./index";
```

### Step 1.10: Move Generic Hooks

```bash
# Move reusable hooks
cp src/hooks/useToast.ts src/shared/hooks/
cp src/hooks/useMobile.ts src/shared/hooks/
```

### Step 1.11: Create shared/hooks/index.ts

```typescript
// src/shared/hooks/index.ts
export * from "./useToast";
export * from "./useMobile";
```

### Step 1.12: Create shared/index.ts

```typescript
// src/shared/index.ts
export * from "./ui";
export * from "./lib";
export * from "./api";
export * from "./config";
export * from "./hooks";
```

## Phase 2: Create Entities Layer (Week 2)

### Step 2.1: Create Directory Structure

```bash
mkdir -p src/entities/user/{model,ui}
mkdir -p src/entities/job/{model,ui}
mkdir -p src/entities/freelancer/{model,ui}
mkdir -p src/entities/client/{model,ui}
mkdir -p src/entities/review/{model,ui}
```

### Step 2.2: Create User Entity

```typescript
// src/entities/user/model/types.ts
export interface User {
 id: string;
 name: string;
 email: string;
 userType: "client" | "freelancer";
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
}
```

### Step 2.3: Create User UI Components

```typescript
// src/entities/user/ui/user-avatar.tsx
import { Avatar } from "~/shared/ui";
import { User } from "../model/types";

export interface UserAvatarProps {
 user: User;
 size?: "sm" | "md" | "lg";
}

export const UserAvatar = ({ user, size = "md" }: UserAvatarProps) => (
 <Avatar>
  <AvatarImage src={user.avatar} alt={user.name} />
  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
 </Avatar>
);
```

### Step 2.4: Create User Entity Index

```typescript
// src/entities/user/index.ts
export * from "./model/types";
export * from "./ui/user-avatar";
```

### Step 2.5: Create Job Entity

```typescript
// src/entities/job/model/types.ts
export interface Job {
 id: string;
 title: string;
 description: string;
 budget: string;
 duration: string;
 tags: string[];
 category: string;
 clientId: string;
 status: "open" | "in_progress" | "completed" | "cancelled";
 postedDate: Date;
 proposals: number;
}

export interface JobDetails extends Job {
 requirements: string[];
 attachments?: string[];
 deadline?: Date;
}
```

### Step 2.6: Create Job UI Components

```typescript
// src/entities/job/ui/job-card.tsx
import { Card, CardContent, CardHeader, CardTitle } from "~/shared/ui";
import { Job } from "../model/types";

export interface JobCardProps {
 job: Job;
 actions?: React.ReactNode;
}

export const JobCard = ({ job, actions }: JobCardProps) => (
 <Card>
  <CardHeader>
   <CardTitle>{job.title}</CardTitle>
  </CardHeader>
  <CardContent>
   <p className="text-sm text-muted-foreground mb-4">{job.description}</p>
   <div className="flex justify-between items-center">
    <span className="font-semibold">{job.budget}</span>
    <span className="text-sm text-muted-foreground">{job.duration}</span>
   </div>
   {actions && <div className="mt-4">{actions}</div>}
  </CardContent>
 </Card>
);
```

### Step 2.7: Create Job Entity Index

```typescript
// src/entities/job/index.ts
export * from "./model/types";
export * from "./ui/job-card";
```

### Step 2.8: Repeat for Other Entities

- Create similar structures for freelancer, client, and review entities
- Extract relevant types from src/types/ and move to appropriate entities

## Phase 3: Restructure Features Layer (Week 3)

### Step 3.1: Create Feature Structure

```bash
mkdir -p src/features/authentication/{ui,model,api}
mkdir -p src/features/job-search/{ui,model,api}
mkdir -p src/features/job-posting/{ui,model,api}
mkdir -p src/features/freelancer-hiring/{ui,model,api}
mkdir -p src/features/profile-editing/{ui,model,api}
mkdir -p src/features/messaging/{ui,model,api}
```

### Step 3.2: Move Authentication Components

```bash
# Move auth components
cp -r src/components/Auth/* src/features/authentication/ui/
```

### Step 3.3: Create Authentication Feature

```typescript
// src/features/authentication/ui/login-form.tsx
import { useAuth } from "../model/use-auth";
import { Button, Input, Form } from "~/shared/ui";

export const LoginForm = () => {
 const { login } = useAuth();

 return (
  <Form onSubmit={login}>
   <Input name="email" type="email" placeholder="Email" />
   <Input name="password" type="password" placeholder="Password" />
   <Button type="submit">Login</Button>
  </Form>
 );
};
```

### Step 3.4: Create Authentication Model

```typescript
// src/features/authentication/model/use-auth.tsx
import { useAuth as useAuthHook } from "~/shared/hooks";
import { User } from "~/entities/user";

export const useAuth = () => {
 // Move authentication logic here
 const { user, login, logout } = useAuthHook();

 return {
  user,
  login,
  logout,
  isAuthenticated: !!user,
 };
};
```

### Step 3.5: Create Feature Index

```typescript
// src/features/authentication/index.ts
export * from "./ui/login-form";
export * from "./ui/signup-form";
export * from "./model/use-auth";
```

### Step 3.6: Extract Job Search Feature

```bash
# Move job search components
cp -r src/components/Job/* src/features/job-search/ui/
```

### Step 3.7: Create Job Search Feature

```typescript
// src/features/job-search/ui/search-filter-bar.tsx
import { Input, Select, Button } from "~/shared/ui";
import { useJobSearch } from "../model/use-job-search";

export const SearchFilterBar = () => {
 const { searchQuery, setSearchQuery, categoryFilter, setCategoryFilter } =
  useJobSearch();

 return (
  <div className="flex gap-4 mb-6">
   <Input
    placeholder="Search jobs..."
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
   />
   <Select value={categoryFilter} onValueChange={setCategoryFilter}>
    <SelectTrigger>
     <SelectValue placeholder="Category" />
    </SelectTrigger>
    <SelectContent>
     <SelectItem value="all">All Categories</SelectItem>
     <SelectItem value="development">Development</SelectItem>
     <SelectItem value="design">Design</SelectItem>
    </SelectContent>
   </Select>
   <Button>Search</Button>
  </div>
 );
};
```

### Step 3.8: Repeat for Other Features

- Move dashboard components to appropriate features
- Extract job posting functionality
- Create freelancer hiring feature
- Create profile editing feature

## Phase 4: Create Widgets Layer (Week 4)

### Step 4.1: Create Widget Structure

```bash
mkdir -p src/widgets/navbar/{ui,model}
mkdir -p src/widgets/footer/{ui,model}
mkdir -p src/widgets/dashboard-sidebar/{ui,model}
mkdir -p src/widgets/dashboard-stats/{ui,model}
mkdir -p src/widgets/job-list/{ui,model}
mkdir -p src/widgets/freelancer-list/{ui,model}
```

### Step 4.2: Create Navbar Widget

```typescript
// src/widgets/navbar/ui/navbar.tsx
import { Link } from "react-router-dom";
import { Button } from "~/shared/ui";
import { useAuth } from "~/features/authentication";
import { UserAvatar } from "~/entities/user";

export const Navbar = () => {
 const { user, logout } = useAuth();

 return (
  <nav className="border-b">
   <div className="container mx-auto px-4 py-4 flex justify-between items-center">
    <Link to="/" className="text-xl font-bold">
     DecentWork
    </Link>

    <div className="flex items-center gap-4">
     <Link to="/jobs">Find Work</Link>
     {user ? (
      <>
       <Link to="/dashboard">Dashboard</Link>
       <UserAvatar user={user} />
       <Button onClick={logout}>Logout</Button>
      </>
     ) : (
      <Link to="/login">
       <Button>Login</Button>
      </Link>
     )}
    </div>
   </div>
  </nav>
 );
};
```

### Step 4.3: Create Job List Widget

```typescript
// src/widgets/job-list/ui/job-list.tsx
import { JobCard } from "~/entities/job";
import { useJobSearch } from "~/features/job-search";
import { Button } from "~/shared/ui";

export const JobList = () => {
 const { jobs, loading } = useJobSearch();

 if (loading) return <div>Loading...</div>;

 return (
  <div className="space-y-4">
   {jobs.map((job) => (
    <JobCard key={job.id} job={job} actions={<Button>View Details</Button>} />
   ))}
  </div>
 );
};
```

### Step 4.4: Create Widget Indexes

```typescript
// src/widgets/navbar/index.ts
export * from "./ui/navbar";

// src/widgets/job-list/index.ts
export * from "./ui/job-list";
```

## Phase 5: Restructure Pages Layer (Week 5)

### Step 5.1: Create Page Structure

```bash
mkdir -p src/pages/home/{ui,model}
mkdir -p src/pages/jobs/{ui,model}
mkdir -p src/pages/job-details/{ui,model}
mkdir -p src/pages/login/{ui,model}
mkdir -p src/pages/dashboard/{ui,model}
mkdir -p src/pages/not-found/{ui,model}
```

### Step 5.2: Create Home Page

```typescript
// src/pages/home/ui/home.tsx
import { Navbar } from "~/widgets/navbar";
import { Footer } from "~/widgets/footer";
import { JobList } from "~/widgets/job-list";

export const HomePage = () => {
 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-1 container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold mb-8">Find Your Next Project</h1>
    <JobList />
   </main>
   <Footer />
  </div>
 );
};
```

### Step 5.3: Create Jobs Page

```typescript
// src/pages/jobs/ui/jobs.tsx
import { Navbar } from "~/widgets/navbar";
import { Footer } from "~/widgets/footer";
import { SearchFilterBar } from "~/features/job-search";
import { JobList } from "~/widgets/job-list";

export const JobsPage = () => {
 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-1 container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-8">Available Jobs</h1>
    <SearchFilterBar />
    <JobList />
   </main>
   <Footer />
  </div>
 );
};
```

### Step 5.4: Create Login Page

```typescript
// src/pages/login/ui/login.tsx
import { Navbar } from "~/widgets/navbar";
import { LoginForm, SignupForm } from "~/features/authentication";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/shared/ui";

export const LoginPage = () => {
 return (
  <div className="min-h-screen flex flex-col">
   <Navbar />
   <main className="flex-1 flex items-center justify-center">
    <Tabs defaultValue="login" className="w-full max-w-md">
     <TabsList className="grid w-full grid-cols-2">
      <TabsTrigger value="login">Login</TabsTrigger>
      <TabsTrigger value="signup">Sign Up</TabsTrigger>
     </TabsList>
     <TabsContent value="login">
      <LoginForm />
     </TabsContent>
     <TabsContent value="signup">
      <SignupForm />
     </TabsContent>
    </Tabs>
   </main>
  </div>
 );
};
```

### Step 5.5: Create Page Indexes

```typescript
// src/pages/home/index.ts
export * from "./ui/home";

// src/pages/jobs/index.ts
export * from "./ui/jobs";

// src/pages/login/index.ts
export * from "./ui/login";
```

## Phase 6: Refactor App Layer (Week 6)

### Step 6.1: Create App Structure

```bash
mkdir -p src/app/providers
mkdir -p src/app/routing
mkdir -p src/app/styles
```

### Step 6.2: Create App Providers

```typescript
// src/app/providers/auth-provider.tsx
import { AuthProvider } from "~/features/authentication";

export const AppAuthProvider = ({
 children,
}: {
 children: React.ReactNode;
}) => <AuthProvider>{children}</AuthProvider>;
```

### Step 6.3: Create App Routing

```typescript
// src/app/routing/router.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "~/pages/home";
import { JobsPage } from "~/pages/jobs";
import { LoginPage } from "~/pages/login";
import { DashboardPage } from "~/pages/dashboard";
import { NotFoundPage } from "~/pages/not-found";

export const AppRouter = () => (
 <BrowserRouter>
  <Routes>
   <Route path="/" element={<HomePage />} />
   <Route path="/jobs" element={<JobsPage />} />
   <Route path="/login" element={<LoginPage />} />
   <Route path="/dashboard/*" element={<DashboardPage />} />
   <Route path="*" element={<NotFoundPage />} />
  </Routes>
 </BrowserRouter>
);
```

### Step 6.4: Create App Root

```typescript
// src/app/app.tsx
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "~/shared/ui";
import { AppAuthProvider } from "./providers/auth-provider";
import { AppRouter } from "./routing/router";
import "./styles/globals.css";

const queryClient = new QueryClient();

export const App = () => (
 <QueryClientProvider client={queryClient}>
  <AppAuthProvider>
   <TooltipProvider>
    <AppRouter />
   </TooltipProvider>
  </AppAuthProvider>
 </QueryClientProvider>
);
```

### Step 6.5: Update Main Entry Point

```typescript
// src/main.tsx
import { createRoot } from "react-dom/client";
import { App } from "./app/app";

createRoot(document.getElementById("root")!).render(<App />);
```

## Phase 7: Cleanup and Testing (Week 7)

### Step 7.1: Update All Imports

Use a script to update all imports to use the new FSD structure:

```bash
# Find and replace old imports
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/@\/components\/UI/~\/shared\/ui/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/@\/components\/Auth/~\/features\/authentication/g'
find src -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/@\/lib\/utils/~\/shared\/lib\/utils/g'
```

### Step 7.2: Remove Old Structure

```bash
# Remove old directories (after confirming everything works)
rm -rf src/components
rm -rf src/pages (old structure)
rm -rf src/hooks
rm -rf src/lib
rm -rf src/utils
rm -rf src/constants
rm -rf src/types
```

### Step 7.3: Test Application

- [ ] Run `npm run dev` and test all pages
- [ ] Test authentication flow
- [ ] Test job search functionality
- [ ] Test dashboard features
- [ ] Run `npm run build` to ensure no build errors

### Step 7.4: Update Documentation

- [ ] Update README.md with new structure
- [ ] Create architecture documentation
- [ ] Update development guidelines

## Final Structure Verification

After migration, your structure should look like:

```
src/
├── app/
│   ├── providers/
│   ├── routing/
│   ├── styles/
│   └── app.tsx
├── pages/
│   ├── home/
│   ├── jobs/
│   ├── login/
│   ├── dashboard/
│   └── not-found/
├── widgets/
│   ├── navbar/
│   ├── footer/
│   ├── job-list/
│   └── dashboard-sidebar/
├── features/
│   ├── authentication/
│   ├── job-search/
│   ├── job-posting/
│   └── profile-editing/
├── entities/
│   ├── user/
│   ├── job/
│   ├── freelancer/
│   └── client/
└── shared/
    ├── ui/
    ├── lib/
    ├── api/
    ├── config/
    └── hooks/
```

## Migration Tips

1. **Work in small batches**: Complete one phase before moving to the next
2. **Keep old structure initially**: Don't delete old files until new structure is working
3. **Test frequently**: Run the app after each major change
4. **Update imports gradually**: Use find/replace tools to update import paths
5. **Create commit checkpoints**: Commit after each phase completion
6. **Document changes**: Keep track of what you move and why

## Common Issues and Solutions

1. **Circular dependencies**: Ensure proper layer hierarchy
2. **Missing exports**: Check all index.ts files
3. **Import path errors**: Verify tsconfig.paths.json configuration
4. **Build errors**: Check for missing dependencies in new structure

## Timeline

- **Week 1**: Phase 1 (Shared Layer)
- **Week 2**: Phase 2 (Entities Layer)
- **Week 3**: Phase 3 (Features Layer)
- **Week 4**: Phase 4 (Widgets Layer)
- **Week 5**: Phase 5 (Pages Layer)
- **Week 6**: Phase 6 (App Layer)
- **Week 7**: Phase 7 (Cleanup & Testing)

This migration plan ensures a systematic approach to converting your project to Feature-Sliced Design while maintaining functionality throughout the process.

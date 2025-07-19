# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend Development

- `npm run dev` - Start development server (Vite)
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

### Smart Contract Development

- `npm run compile` - Compile smart contracts
- `npm run test:contracts` - Run smart contract tests
- `npm run node` - Start local Hardhat network
- `npm run deploy:local` - Deploy to local network
- `npm run deploy:amoy` - Deploy to Polygon Amoy testnet
- `npm run deploy:polygon` - Deploy to Polygon mainnet

### Documentation & Storybook

- `npm run storybook` - Start Storybook development server
- `npm run build-storybook` - Build Storybook for production

### Utilities

- `npm run create-component` - Generate new component with boilerplate
- `npm run clean` - Clean node_modules and dist folders

## Architecture Overview

### Tech Stack

- **Frontend**: React 18 + TypeScript + Vite
- **UI Components**: Radix UI + shadcn/ui + Tailwind CSS
- **State Management**: React Query for server state
- **Authentication**: Supabase Auth with custom user types (freelancer/client)
- **Database**: Supabase (PostgreSQL)
- **Blockchain**: Ethereum/Polygon with Hardhat + ethers.js
- **Routing**: React Router v6

### Project Structure

The codebase follows a component-based architecture with atomic design principles:

- **`src/components/`** - Reusable UI components organized by atomic design:

  - `atoms/` - Basic building blocks (buttons, inputs, etc.)
  - `molecules/` - Simple component combinations
  - `organisms/` - Complex UI sections
  - `templates/` - Page layout templates

- **`src/pages/`** - Route-level page components
- **`src/routes/`** - Routing configuration and route guards
- **`src/shared/`** - Shared utilities, services, and types:
  - `services/` - API services for Supabase and blockchain interactions
  - `hooks/` - Custom React hooks for data fetching and UI state
  - `models/` - TypeScript types and data models
  - `ui/` - shadcn/ui component implementations

### Authentication & User Types

The application supports two user types: `freelancer` and `client`. Authentication is managed through:

- **AuthProvider** (`src/app/providers/AuthProvider.tsx`) - Manages auth state and user type detection
- **Route Guards** - Components like `ClientGuard`, `FreelancerGuard`, `AuthGuard` control access
- User type is stored in both Supabase user metadata and profiles table

### Key Services

- **`auth.service.ts`** - Authentication operations with Supabase
- **`supabase/client.ts`** - Supabase client configuration
- **Dashboard services** - Various services for freelancer, job, and profile management

### Smart Contracts

- Contracts are in the `contracts/` directory (if it exists)
- Hardhat configuration in `hardhat.config.cjs`
- Supports deployment to local, Amoy testnet, and Polygon mainnet
- Uses ethers.js for Web3 integration

### Styling & Components

- Uses Tailwind CSS with custom design system
- shadcn/ui components in `src/shared/ui/`
- Storybook for component documentation
- Component generation script available via `npm run create-component`

## Code Style Guidelines

- **No Comments**: DO NOT add comments to code unless explicitly requested by the user
- **Mock Data**: Never include mock data directly within components. Mock data should be retrieved from services (internally for now). Backend connection will be implemented later
- **Component Usage**: Always utilize Radix UI components where possible when creating components. Minimize custom component implementations
- **Constants**: Create constants in `src/shared/constants/index.ts` whenever possible and import them when needed. Avoid hardcoded values throughout the codebase
- **Data Management**: Create custom hooks for data management like CRUD operations. These hooks should utilize services for data operations
- Follow existing code patterns and conventions in the codebase
- Use TypeScript types consistently
- Maintain the atomic design component structure

## Component Architecture Guidelines

### Atomic Design Structure

- **Strict Hierarchy**: Components MUST follow atomic design principles with clear separation:
  - `atoms/` - Basic UI elements (buttons, inputs, badges, icons)
  - `molecules/` - Simple combinations of atoms (forms, cards, search inputs)
  - `organisms/` - Complex UI sections (dashboards, forms, navigation)
  - `templates/` - Page layout templates (layouts, page wrappers)

### Component Directory Structure

Each component follows this standardized structure:

```
ComponentName/
├── index.tsx              # Main component implementation
├── types.ts              # Component-specific types (if needed)
├── components/           # Sub-components (for complex organisms)
│   ├── SubComponent/
│   │   └── index.tsx
│   └── index.ts          # Barrel exports
└── ComponentName.stories.tsx  # Storybook stories (reusable components only)
```

### Component Organization Rules

- **Atomic Level Types**: Centralize shared types in `types.ts` at each atomic level
- **Sub-components**: Complex organisms can have `components/` subdirectories for internal components
- **Barrel Exports**: REQUIRED at every directory level for clean imports
- **Single Responsibility**: Each component should have one clear purpose
- **Composition Over Inheritance**: Prefer component composition patterns

### Component Implementation Standards

- **Props Interface**: Always define explicit prop interfaces/types
- **Default Props**: Use TypeScript default parameters instead of defaultProps
- **Forward Refs**: Implement ref forwarding for reusable UI components
- **Error Boundaries**: Wrap complex organisms in error boundaries
- **Accessibility**: Follow WCAG guidelines and include ARIA attributes

### Smart vs Dumb Component Pattern

- **Dumb Components (Atoms, Molecules, Organisms)**: MUST be stateless and receive all data via props

  - No direct API calls or data fetching
  - No internal state for business logic (UI state like form inputs is acceptable)
  - No service imports or external dependencies
  - Pure presentation components focused on rendering
  - Should be easily testable and reusable

- **Smart Components (Pages, Templates)**: Handle data fetching and state management
  - Use custom hooks for data operations
  - Manage application state and side effects
  - Pass data down to dumb components via props
  - Handle user interactions and callbacks

```typescript
// ✅ Dumb Component Example
interface UserCardProps {
 user: User;
 onEdit: (userId: string) => void;
 onDelete: (userId: string) => void;
}

export const UserCard = ({ user, onEdit, onDelete }: UserCardProps) => {
 return (
  <div className="card">
   <h3>{user.name}</h3>
   <Button onClick={() => onEdit(user.id)}>Edit</Button>
   <Button onClick={() => onDelete(user.id)}>Delete</Button>
  </div>
 );
};

// ✅ Smart Component Example (Page/Template)
export const UsersPage = () => {
 const { users, updateUser, deleteUser } = useUsers();

 const handleEdit = (userId: string) => {
  // Handle edit logic
 };

 const handleDelete = (userId: string) => {
  deleteUser(userId);
 };

 return (
  <div>
   {users.map((user) => (
    <UserCard
     key={user.id}
     user={user}
     onEdit={handleEdit}
     onDelete={handleDelete}
    />
   ))}
  </div>
 );
};
```

## File Organization Standards

### Directory Naming Conventions

- **Components**: Use PascalCase for component directories (`UserCard/`, `JobDetails/`)
- **Files**: Use kebab-case for non-component files (`auth.service.ts`, `dashboard-stats.hook.ts`)
- **Directories**: Use kebab-case for utility directories (`shared/`, `models/`, `constants/`)

### File Naming Patterns

- **Components**: `index.tsx` for main component, PascalCase for component names
- **Types**: `types.ts` for component types, `model.ts` for data models
- **Services**: `*.service.ts` for API services
- **Hooks**: `*.hook.ts` or `use*.ts` for custom hooks
- **Constants**: `index.ts` for constants, organized by domain
- **Stories**: `ComponentName.stories.tsx` for Storybook files

### Import/Export Standards

#### Import Order (REQUIRED):

1. React and React-related imports
2. Third-party library imports (alphabetical)
3. Internal imports (services, hooks, types)
4. Relative imports (components, assets)

```typescript
// ✅ Correct import order
import React, { useState, useEffect } from "react";
import { Button } from "@radix-ui/react-button";
import { toast } from "sonner";

import { authService } from "@/shared/services";
import { useAuth } from "@/shared/hooks";
import { User } from "@/shared/models";

import { UserCard } from "./components";
```

#### Barrel Export Requirements:

- **MANDATORY**: Every directory with multiple files MUST have `index.ts`
- **Selective Exports**: Only export what should be public API
- **Re-exports**: Use barrel exports to flatten deep import paths

```typescript
// ✅ src/components/atoms/index.ts
export { ActionButton } from "./ActionButton";
export { StatusBadge } from "./StatusBadge";
export { ThemeToggle } from "./ThemeToggle";

// ✅ Usage
import { ActionButton, StatusBadge } from "@/components/atoms";
```

### Path Alias Usage

- **Primary Alias**: Use `@/` for all src/ imports
- **Absolute Imports**: NEVER use relative imports beyond parent directory
- **Consistent Paths**: Always use aliases for shared resources

```typescript
// ✅ Correct
import { Button } from "@/shared/ui";
import { useAuth } from "@/shared/hooks";

// ❌ Incorrect
import { Button } from "../../../shared/ui";
import { useAuth } from "../../hooks/auth";
```

### Code Organization & Structure

### TypeScript Guidelines

- **Type Definitions**: Create types in `src/shared/models/` and organize by domain
- **Interface Naming**: Use descriptive names without "I" prefix (e.g., `User` not `IUser`)
- **Generic Types**: Use meaningful generic parameter names instead of single letters
- **Strict Typing**: Avoid `any` type - use proper TypeScript types or `unknown`

### React Patterns

- **Custom Hooks Location**: Place custom hooks in `src/shared/hooks/` organized by category
- **Component Props**: Always define prop interfaces/types explicitly
- **Storybook Stories**: Create stories for all and only reusable components
- **Error Handling**: Use consistent error patterns across services and display errors via toast components

### Development Notes

- New component structure follows atomic design principles
- Authentication flow handles both metadata and database user type synchronization
- Dashboard routes are dynamically rendered based on user type

## Post-Task Console Validation

**IMPORTANT**: After completing ALL tasks in a to do list, you MUST validate the browser console for errors:

1. **Always run after task completion**: Use browser MCP tools to check console logs when all todos are marked as completed
2. **Use MCP browser tools**:
   - `mcp__browsertools__getConsoleErrors()` - Check for console errors
   - `mcp__browsertools__getConsoleLogs()` - Review all console output
3. **Fix critical errors**: If console errors are found that break functionality, fix them immediately before considering the task complete
4. **Validation workflow**:
   - Complete all planned tasks
   - Mark all todos as completed
   - Run browser console validation using MCP tools
   - Fix any critical errors found
   - Only then consider the work finished

This ensures delivered code works properly in the browser without runtime errors.

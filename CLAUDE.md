# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Frontend Development

- `npm run dev` - Start development server (Vite)
- `npm run build` - Production build
- `npm run build:dev` - Development build
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

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

### Code Organization & Structure

- **File Naming**: Use kebab-case for files and PascalCase for React components
- **Import Order**: Follow a consistent import order (React imports first, then third-party, then internal imports)
- **Barrel Exports**: Always use index.ts files for clean exports from directories
- **Component Structure**: Keep components in their own directories with index.tsx, stories, and types files

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

- The project is currently in migration - many old features are marked as deleted in git status
- New component structure follows atomic design principles
- Authentication flow handles both metadata and database user type synchronization
- Dashboard routes are dynamically rendered based on user type

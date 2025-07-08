# Feature-Sliced Design Migration Guide

## Quick Start

### 1. Prerequisites

- Backup your current project
- Create a new branch: `git checkout -b feature/fsd-migration`
- Ensure Node.js is installed

### 2. Run Migration Script

```bash
# See available phases
node migrate-to-fsd.js

# Run each phase in order
node migrate-to-fsd.js 1  # Create Shared Layer
node migrate-to-fsd.js 2  # Create Entities Layer
node migrate-to-fsd.js 3  # Restructure Features Layer
node migrate-to-fsd.js 4  # Create Widgets Layer
node migrate-to-fsd.js 5  # Restructure Pages Layer
node migrate-to-fsd.js 6  # Refactor App Layer
node migrate-to-fsd.js 7  # Cleanup and Testing
```

### 3. Manual Steps After Running Script

After running the migration script, you'll need to:

#### Phase 1-6: File Structure Creation

The script automatically creates the new FSD structure and copies files.

#### Phase 7: Import Updates and Testing

1. **Update imports** throughout your codebase:

   ```typescript
   // OLD
   import { Button } from "@/components/UI/Button";
   import { useAuth } from "@/hooks/useAuth";

   // NEW
   import { Button } from "~/shared/ui";
   import { useAuth } from "~/features/authentication";
   ```

2. **Test the application**:

   ```bash
   npm run dev
   npm run build
   ```

3. **Remove old structure** (after confirming everything works):
   ```bash
   rm -rf src/components
   rm -rf src/hooks
   rm -rf src/lib
   rm -rf src/utils
   rm -rf src/constants
   rm -rf src/types
   ```

## Migration Benefits

### Before (Current Structure)

```
src/
├── components/          # ❌ Technical grouping
│   ├── UI/             # ❌ Too generic
│   ├── Auth/           # ❌ Mixed with UI
│   └── Job/            # ❌ Mixed concerns
├── pages/              # ❌ Technical grouping
├── hooks/              # ❌ Technical grouping
└── utils/              # ❌ Technical grouping
```

### After (FSD Structure)

```
src/
├── app/                # ✅ Application initialization
├── pages/              # ✅ Route-level compositions
├── widgets/            # ✅ Complex UI blocks
├── features/           # ✅ User interactions
├── entities/           # ✅ Business entities
└── shared/             # ✅ Reusable utilities
```

## Layer Descriptions

### 🏗️ App Layer

- Application initialization
- Global providers
- Routing configuration
- Global styles

### 📄 Pages Layer

- Route-level components
- Page composition
- SEO and meta data
- Navigation logic

### 🧩 Widgets Layer

- Complex UI blocks
- Combine entities + features
- Reusable page sections
- Layout components

### ⚡ Features Layer

- User interactions
- Business logic
- User scenarios
- API calls

### 🏢 Entities Layer

- Business entities
- Data models
- Entity-specific UI
- Domain logic

### 🔧 Shared Layer

- UI kit components
- Utility functions
- API configuration
- Constants

## Import Examples

### UI Components

```typescript
// Instead of
import { Button } from "@/components/UI/Button";

// Use
import { Button } from "~/shared/ui";
```

### Business Logic

```typescript
// Instead of
import { useAuth } from "@/hooks/useAuth";

// Use
import { useAuth } from "~/features/authentication";
```

### Entity Types

```typescript
// Instead of
import { User } from "@/types/user";

// Use
import { User } from "~/entities/user";
```

## Testing Your Migration

### 1. Compile Check

```bash
npm run build
```

### 2. Development Server

```bash
npm run dev
```

### 3. Feature Testing

- [ ] Authentication works
- [ ] Job search works
- [ ] Dashboard loads
- [ ] Profile editing works
- [ ] All pages render correctly

### 4. Performance Check

- [ ] No significant performance regression
- [ ] Bundle size maintained
- [ ] No circular dependencies

## Common Issues and Solutions

### Import Errors

**Problem**: `Module not found` errors
**Solution**: Check tsconfig.paths.json and ensure all index.ts files exist

### Circular Dependencies

**Problem**: Circular dependency warnings
**Solution**: Ensure proper layer hierarchy - lower layers shouldn't import from higher layers

### Missing Exports

**Problem**: Components not exported
**Solution**: Check index.ts files in each layer

### Type Errors

**Problem**: TypeScript errors after migration
**Solution**: Update type imports to use entity layer

## Best Practices

### 1. Layer Dependencies

```typescript
// ✅ Allowed - Higher layer using lower layer
// pages -> widgets -> features -> entities -> shared

// ❌ Forbidden - Lower layer using higher layer
// shared -> entities (NO!)
// features -> pages (NO!)
```

### 2. Public APIs

Each slice should have an index.ts file:

```typescript
// src/features/authentication/index.ts
export { LoginForm } from "./ui/login-form";
export { useAuth } from "./model/use-auth";
```

### 3. Naming Conventions

- Use kebab-case for directories
- Use PascalCase for components
- Use camelCase for hooks and utilities

## Advanced Migration

### Custom Hooks Migration

```typescript
// Before: src/hooks/useAuth.tsx
// After: src/features/authentication/model/use-auth.ts
```

### Component Migration

```typescript
// Before: src/components/Auth/LoginForm.tsx
// After: src/features/authentication/ui/login-form.tsx
```

### Type Migration

```typescript
// Before: src/types/user.ts
// After: src/entities/user/model/types.ts
```

## Rollback Plan

If you need to rollback:

1. Switch back to your main branch
2. Delete the migration branch
3. Your original structure is preserved

## Support

- 📖 [Feature-Sliced Design Documentation](https://feature-sliced.design/)
- 🔧 [Migration Script](./migrate-to-fsd.js)
- 📋 [Detailed Migration Plan](./MIGRATION_PLAN.md)

## Next Steps

After successful migration:

1. Update your development workflow
2. Train team on FSD principles
3. Update code review guidelines
4. Document your new architecture

---

🎉 **Congratulations!** You've successfully migrated to Feature-Sliced Design. Your project is now more scalable, maintainable, and team-friendly.

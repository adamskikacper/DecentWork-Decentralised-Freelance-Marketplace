# Dashboard Architecture

## Unified Dashboard Approach

This application uses a single unified `Dashboard` component for both client and freelancer users. This approach offers several advantages:

1. **Code Reuse**: Common functionality between user types is consolidated in one place
2. **Simplified Routing**: Only one route needed for all dashboard content
3. **Consistent UI**: Ensures a consistent user experience across user types
4. **Maintainability**: Changes to dashboard structure only need to be made in one place

## Implementation Details

The dashboard implementation follows these principles:

### User Type Detection

- The dashboard detects the user type from the auth context
- Different content is shown based on whether the user is a client or freelancer

### Content Components

- `DashboardContent`: Client-specific main dashboard view
- `FreelancerDashboardContent`: Freelancer-specific main dashboard view
- `MyProjectsContent`: Shared component with conditional content based on user type
- `MyFreelancersContent`: Client-specific content
- `FindJobsContent`: Freelancer-specific content
- `PostJobContent`: Client-specific content
- `ProfileContent`: Shared component for both user types

### Navigation

- Navigation menu options change based on user type
- Sidebar menu items are conditionally rendered
- URL paths are unified (e.g., `/dashboard` for both user types)

### Responsive Design

- The dashboard adapts to different screen sizes
- Content is organized into a responsive grid layout
- Mobile-friendly UI elements are used throughout

## Accessing the Dashboard

The dashboard is accessible at `/dashboard` for both user types. The old `/client-dashboard` route redirects to `/dashboard` for backward compatibility.

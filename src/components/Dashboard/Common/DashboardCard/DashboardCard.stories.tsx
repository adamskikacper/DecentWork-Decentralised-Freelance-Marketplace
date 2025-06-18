import type { Meta, StoryObj } from "@storybook/react";
import DashboardCard from "./index";
import { Activity, BarChart3, DollarSign, Users } from "lucide-react";
const meta = {
 title: "Dashboardv2/Common/DashboardCard",
 component: DashboardCard,
 parameters: {
  layout: "padded",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof DashboardCard>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
 args: {
  title: "Dashboard Card",
  children: <p>This is the content of the dashboard card.</p>,
 },
};
export const WithIcon: Story = {
 args: {
  title: "Activity Overview",
  icon: <Activity className="h-5 w-5" />,
  children: <p>This card displays activity information with an icon.</p>,
 },
};
export const WithDescriptionAndFooter: Story = {
 args: {
  title: "Project Status",
  description: "Current status of your active projects",
  children: (
   <div className="h-40 bg-secondary/20 rounded-md flex items-center justify-center">
    Chart or content here
   </div>
  ),
  footer: (
   <div className="flex justify-between text-sm">
    <span>Updated: Today</span>
    <span>5 projects</span>
   </div>
  ),
 },
};
export const Loading: Story = {
 args: {
  title: "Loading Card",
  description: "This card is in a loading state",
  isLoading: true,
  children: <div className="h-32 bg-secondary/20 rounded-md"></div>,
 },
};
export const WithoutGlassEffect: Story = {
 args: {
  title: "Regular Card",
  description: "This card doesn't use the glass effect styling",
  glassEffect: false,
  children: <p>This card uses regular background styling.</p>,
 },
};
export const StatsCard: Story = {
 args: {
  title: "Statistics",
  icon: <BarChart3 className="h-5 w-5" />,
  children: (
   <div className="grid grid-cols-2 gap-4">
    <div className="flex flex-col">
     <span className="text-3xl font-bold">$12,345</span>
     <span className="text-sm text-muted-foreground">Revenue</span>
    </div>
    <div className="flex flex-col">
     <span className="text-3xl font-bold">24</span>
     <span className="text-sm text-muted-foreground">Projects</span>
    </div>
   </div>
  ),
 },
};
export const UserListCard: Story = {
 args: {
  title: "Team Members",
  icon: <Users className="h-5 w-5" />,
  children: (
   <div className="space-y-4">
    {[
     {
      name: "John Doe",
      role: "Developer",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=random",
     },
     {
      name: "Jane Smith",
      role: "Designer",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=random",
     },
     {
      name: "Bob Johnson",
      role: "Manager",
      avatar: "https://ui-avatars.com/api/?name=Bob+Johnson&background=random",
     },
    ].map((user, index) => (
     <div key={index} className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full overflow-hidden">
       <img
        src={user.avatar}
        alt={user.name}
        className="w-full h-full object-cover"
       />
      </div>
      <div>
       <p className="font-medium">{user.name}</p>
       <p className="text-xs text-muted-foreground">{user.role}</p>
      </div>
     </div>
    ))}
   </div>
  ),
  footer: (
   <button className="text-sm text-primary hover:underline">
    View all members
   </button>
  ),
 },
};

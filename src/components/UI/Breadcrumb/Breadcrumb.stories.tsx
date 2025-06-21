import type { Meta, StoryObj } from "@storybook/react";
import {
 Breadcrumb,
 BreadcrumbEllipsis,
 BreadcrumbItem,
 BreadcrumbLink,
 BreadcrumbList,
 BreadcrumbPage,
 BreadcrumbSeparator,
} from "./index";
import {
 Home,
 ChevronRight,
 Folder,
 FileText,
 User,
 Settings,
 ShoppingCart,
 Package,
} from "lucide-react";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "../DropdownMenu";

/**
 * Breadcrumb component provides navigation context showing the user's location within a hierarchy.
 * Built with semantic HTML and accessible navigation patterns.
 */
const meta = {
 title: "UI/Breadcrumb",
 component: Breadcrumb,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic breadcrumb
 */
export const Basic: Story = {
 render: () => (
  <Breadcrumb>
   <BreadcrumbList>
    <BreadcrumbItem>
     <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/products">Products</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbPage>Laptop</BreadcrumbPage>
    </BreadcrumbItem>
   </BreadcrumbList>
  </Breadcrumb>
 ),
};

/**
 * Breadcrumb with icons
 */
export const WithIcons = {
 render: () => (
  <Breadcrumb>
   <BreadcrumbList>
    <BreadcrumbItem>
     <BreadcrumbLink href="/" className="flex items-center">
      <Home className="mr-2 h-4 w-4" />
      Home
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/documents" className="flex items-center">
      <Folder className="mr-2 h-4 w-4" />
      Documents
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/documents/projects" className="flex items-center">
      <Folder className="mr-2 h-4 w-4" />
      Projects
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbPage className="flex items-center">
      <FileText className="mr-2 h-4 w-4" />
      README.md
     </BreadcrumbPage>
    </BreadcrumbItem>
   </BreadcrumbList>
  </Breadcrumb>
 ),
};

/**
 * Breadcrumb with custom separator
 */
export const CustomSeparator = {
 render: () => (
  <Breadcrumb>
   <BreadcrumbList>
    <BreadcrumbItem>
     <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
     <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
     <BreadcrumbLink href="/category">Category</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
     <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
     <BreadcrumbLink href="/category/subcategory">Subcategory</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>
     <ChevronRight className="h-4 w-4" />
    </BreadcrumbSeparator>
    <BreadcrumbItem>
     <BreadcrumbPage>Product</BreadcrumbPage>
    </BreadcrumbItem>
   </BreadcrumbList>
  </Breadcrumb>
 ),
};

/**
 * Breadcrumb with dropdown ellipsis
 */
export const WithEllipsis = {
 render: () => (
  <Breadcrumb>
   <BreadcrumbList>
    <BreadcrumbItem>
     <BreadcrumbLink href="/">Home</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <DropdownMenu>
      <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center">
       <BreadcrumbEllipsis className="h-4 w-4" />
       <span className="sr-only">Toggle menu</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
       <DropdownMenuItem>
        <BreadcrumbLink href="/category">Category</BreadcrumbLink>
       </DropdownMenuItem>
       <DropdownMenuItem>
        <BreadcrumbLink href="/category/subcategory">
         Subcategory
        </BreadcrumbLink>
       </DropdownMenuItem>
       <DropdownMenuItem>
        <BreadcrumbLink href="/category/subcategory/section">
         Section
        </BreadcrumbLink>
       </DropdownMenuItem>
      </DropdownMenuContent>
     </DropdownMenu>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/category/subcategory/section/subsection">
      Subsection
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbPage>Current Page</BreadcrumbPage>
    </BreadcrumbItem>
   </BreadcrumbList>
  </Breadcrumb>
 ),
};

/**
 * E-commerce breadcrumb
 */
export const ECommerce = {
 render: () => (
  <Breadcrumb>
   <BreadcrumbList>
    <BreadcrumbItem>
     <BreadcrumbLink href="/" className="flex items-center">
      <Home className="mr-2 h-4 w-4" />
      Home
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/shop" className="flex items-center">
      <ShoppingCart className="mr-2 h-4 w-4" />
      Shop
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/shop/electronics">Electronics</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/shop/electronics/laptops">Laptops</BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbPage className="flex items-center">
      <Package className="mr-2 h-4 w-4" />
      MacBook Pro 14"
     </BreadcrumbPage>
    </BreadcrumbItem>
   </BreadcrumbList>
  </Breadcrumb>
 ),
};

/**
 * Admin dashboard breadcrumb
 */
export const AdminDashboard = {
 render: () => (
  <Breadcrumb>
   <BreadcrumbList>
    <BreadcrumbItem>
     <BreadcrumbLink href="/admin" className="flex items-center">
      <Home className="mr-2 h-4 w-4" />
      Dashboard
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/admin/users" className="flex items-center">
      <User className="mr-2 h-4 w-4" />
      Users
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbLink href="/admin/users/settings" className="flex items-center">
      <Settings className="mr-2 h-4 w-4" />
      Settings
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator />
    <BreadcrumbItem>
     <BreadcrumbPage>User Permissions</BreadcrumbPage>
    </BreadcrumbItem>
   </BreadcrumbList>
  </Breadcrumb>
 ),
};

/**
 * File system breadcrumb
 */
export const FileSystem = {
 render: () => (
  <Breadcrumb>
   <BreadcrumbList>
    <BreadcrumbItem>
     <BreadcrumbLink href="/" className="flex items-center">
      <Home className="mr-2 h-4 w-4" />
      Root
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
     <BreadcrumbLink href="/users" className="flex items-center">
      <Folder className="mr-2 h-4 w-4" />
      users
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
     <BreadcrumbLink href="/users/john" className="flex items-center">
      <Folder className="mr-2 h-4 w-4" />
      john
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
     <BreadcrumbLink href="/users/john/documents" className="flex items-center">
      <Folder className="mr-2 h-4 w-4" />
      documents
     </BreadcrumbLink>
    </BreadcrumbItem>
    <BreadcrumbSeparator>/</BreadcrumbSeparator>
    <BreadcrumbItem>
     <BreadcrumbPage className="flex items-center">
      <FileText className="mr-2 h-4 w-4" />
      report.pdf
     </BreadcrumbPage>
    </BreadcrumbItem>
   </BreadcrumbList>
  </Breadcrumb>
 ),
};

/**
 * Long breadcrumb with responsive behavior
 */
export const Responsive = {
 render: () => (
  <div className="max-w-md">
   <Breadcrumb>
    <BreadcrumbList>
     <BreadcrumbItem>
      <BreadcrumbLink href="/">Home</BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbSeparator />
     <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink href="/level1">Level 1</BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbSeparator className="hidden md:block" />
     <BreadcrumbItem className="hidden md:block">
      <BreadcrumbLink href="/level1/level2">Level 2</BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbSeparator className="hidden md:block" />
     <BreadcrumbItem className="block md:hidden">
      <DropdownMenu>
       <DropdownMenuTrigger className="flex h-9 w-9 items-center justify-center">
        <BreadcrumbEllipsis className="h-4 w-4" />
       </DropdownMenuTrigger>
       <DropdownMenuContent align="start">
        <DropdownMenuItem>Level 1</DropdownMenuItem>
        <DropdownMenuItem>Level 2</DropdownMenuItem>
        <DropdownMenuItem>Level 3</DropdownMenuItem>
       </DropdownMenuContent>
      </DropdownMenu>
     </BreadcrumbItem>
     <BreadcrumbSeparator className="block md:hidden" />
     <BreadcrumbItem>
      <BreadcrumbLink href="/level1/level2/level3">Level 3</BreadcrumbLink>
     </BreadcrumbItem>
     <BreadcrumbSeparator />
     <BreadcrumbItem>
      <BreadcrumbPage>Current Page with Very Long Title</BreadcrumbPage>
     </BreadcrumbItem>
    </BreadcrumbList>
   </Breadcrumb>
  </div>
 ),
};

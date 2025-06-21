import type { Meta, StoryObj } from "@storybook/react";
import {
 Table,
 TableBody,
 TableCaption,
 TableCell,
 TableFooter,
 TableHead,
 TableHeader,
 TableRow,
} from "./index";
import { Badge } from "../Badge";
import { Button } from "../Button";
import { Checkbox } from "../Checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "../Avatar";
import { MoreHorizontal, ArrowUpDown, Eye, Edit, Trash2 } from "lucide-react";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuItem,
 DropdownMenuTrigger,
} from "../DropdownMenu";

/**
 * Table component provides a flexible and accessible table structure.
 * Built with semantic HTML elements and responsive design.
 */
const meta = {
 title: "UI/Table",
 component: Table,
 parameters: {
  layout: "centered",
 },
 tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const invoices = [
 {
  invoice: "INV001",
  paymentStatus: "Paid",
  totalAmount: "$250.00",
  paymentMethod: "Credit Card",
 },
 {
  invoice: "INV002",
  paymentStatus: "Pending",
  totalAmount: "$150.00",
  paymentMethod: "PayPal",
 },
 {
  invoice: "INV003",
  paymentStatus: "Unpaid",
  totalAmount: "$350.00",
  paymentMethod: "Bank Transfer",
 },
 {
  invoice: "INV004",
  paymentStatus: "Paid",
  totalAmount: "$450.00",
  paymentMethod: "Credit Card",
 },
 {
  invoice: "INV005",
  paymentStatus: "Paid",
  totalAmount: "$550.00",
  paymentMethod: "PayPal",
 },
 {
  invoice: "INV006",
  paymentStatus: "Pending",
  totalAmount: "$200.00",
  paymentMethod: "Bank Transfer",
 },
 {
  invoice: "INV007",
  paymentStatus: "Unpaid",
  totalAmount: "$300.00",
  paymentMethod: "Credit Card",
 },
];

/**
 * Basic table
 */
export const Basic: Story = {
 render: () => (
  <Table>
   <TableCaption>A list of your recent invoices.</TableCaption>
   <TableHeader>
    <TableRow>
     <TableHead className="w-[100px]">Invoice</TableHead>
     <TableHead>Status</TableHead>
     <TableHead>Method</TableHead>
     <TableHead className="text-right">Amount</TableHead>
    </TableRow>
   </TableHeader>
   <TableBody>
    {invoices.map((invoice) => (
     <TableRow key={invoice.invoice}>
      <TableCell className="font-medium">{invoice.invoice}</TableCell>
      <TableCell>{invoice.paymentStatus}</TableCell>
      <TableCell>{invoice.paymentMethod}</TableCell>
      <TableCell className="text-right">{invoice.totalAmount}</TableCell>
     </TableRow>
    ))}
   </TableBody>
  </Table>
 ),
};

/**
 * Table with footer
 */
export const WithFooter = {
 render: () => (
  <Table>
   <TableCaption>A list of your recent invoices.</TableCaption>
   <TableHeader>
    <TableRow>
     <TableHead className="w-[100px]">Invoice</TableHead>
     <TableHead>Status</TableHead>
     <TableHead>Method</TableHead>
     <TableHead className="text-right">Amount</TableHead>
    </TableRow>
   </TableHeader>
   <TableBody>
    {invoices.map((invoice) => (
     <TableRow key={invoice.invoice}>
      <TableCell className="font-medium">{invoice.invoice}</TableCell>
      <TableCell>{invoice.paymentStatus}</TableCell>
      <TableCell>{invoice.paymentMethod}</TableCell>
      <TableCell className="text-right">{invoice.totalAmount}</TableCell>
     </TableRow>
    ))}
   </TableBody>
   <TableFooter>
    <TableRow>
     <TableCell colSpan={3}>Total</TableCell>
     <TableCell className="text-right">$2,500.00</TableCell>
    </TableRow>
   </TableFooter>
  </Table>
 ),
};

/**
 * Data table with badges and actions
 */
export const DataTable = {
 render: () => {
  const users = [
   {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
   },
   {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
   },
   {
    id: 3,
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
   },
   {
    id: 4,
    name: "Alice Brown",
    email: "alice@example.com",
    role: "Moderator",
    status: "Active",
   },
  ];

  const getStatusBadge = (status: string) => {
   const variant = status === "Active" ? "default" : "secondary";
   return <Badge variant={variant}>{status}</Badge>;
  };

  const getRoleBadge = (role: string) => {
   const variant =
    role === "Admin"
     ? "destructive"
     : role === "Moderator"
     ? "outline"
     : "secondary";
   return <Badge variant={variant}>{role}</Badge>;
  };

  return (
   <Table>
    <TableHeader>
     <TableRow>
      <TableHead>
       <Checkbox />
      </TableHead>
      <TableHead>User</TableHead>
      <TableHead>Role</TableHead>
      <TableHead>Status</TableHead>
      <TableHead className="text-right">Actions</TableHead>
     </TableRow>
    </TableHeader>
    <TableBody>
     {users.map((user) => (
      <TableRow key={user.id}>
       <TableCell>
        <Checkbox />
       </TableCell>
       <TableCell>
        <div className="flex items-center space-x-3">
         <Avatar className="h-8 w-8">
          <AvatarImage
           src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.name}`}
          />
          <AvatarFallback>
           {user.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
          </AvatarFallback>
         </Avatar>
         <div>
          <div className="font-medium">{user.name}</div>
          <div className="text-sm text-muted-foreground">{user.email}</div>
         </div>
        </div>
       </TableCell>
       <TableCell>{getRoleBadge(user.role)}</TableCell>
       <TableCell>{getStatusBadge(user.status)}</TableCell>
       <TableCell className="text-right">
        <DropdownMenu>
         <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
           <MoreHorizontal className="h-4 w-4" />
          </Button>
         </DropdownMenuTrigger>
         <DropdownMenuContent align="end">
          <DropdownMenuItem>
           <Eye className="mr-2 h-4 w-4" />
           View
          </DropdownMenuItem>
          <DropdownMenuItem>
           <Edit className="mr-2 h-4 w-4" />
           Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="text-red-600">
           <Trash2 className="mr-2 h-4 w-4" />
           Delete
          </DropdownMenuItem>
         </DropdownMenuContent>
        </DropdownMenu>
       </TableCell>
      </TableRow>
     ))}
    </TableBody>
   </Table>
  );
 },
};

/**
 * Sortable table
 */
export const Sortable = {
 render: () => (
  <Table>
   <TableHeader>
    <TableRow>
     <TableHead>
      <Button variant="ghost" className="h-auto p-0 font-semibold">
       Name
       <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
     </TableHead>
     <TableHead>
      <Button variant="ghost" className="h-auto p-0 font-semibold">
       Email
       <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
     </TableHead>
     <TableHead>
      <Button variant="ghost" className="h-auto p-0 font-semibold">
       Role
       <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
     </TableHead>
     <TableHead>
      <Button variant="ghost" className="h-auto p-0 font-semibold">
       Status
       <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
     </TableHead>
    </TableRow>
   </TableHeader>
   <TableBody>
    <TableRow>
     <TableCell>John Doe</TableCell>
     <TableCell>john@example.com</TableCell>
     <TableCell>
      <Badge variant="destructive">Admin</Badge>
     </TableCell>
     <TableCell>
      <Badge>Active</Badge>
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Jane Smith</TableCell>
     <TableCell>jane@example.com</TableCell>
     <TableCell>
      <Badge variant="secondary">User</Badge>
     </TableCell>
     <TableCell>
      <Badge>Active</Badge>
     </TableCell>
    </TableRow>
    <TableRow>
     <TableCell>Bob Johnson</TableCell>
     <TableCell>bob@example.com</TableCell>
     <TableCell>
      <Badge variant="secondary">User</Badge>
     </TableCell>
     <TableCell>
      <Badge variant="secondary">Inactive</Badge>
     </TableCell>
    </TableRow>
   </TableBody>
  </Table>
 ),
};

/**
 * Compact table
 */
export const Compact = {
 render: () => (
  <Table>
   <TableHeader>
    <TableRow>
     <TableHead className="h-8">Product</TableHead>
     <TableHead className="h-8">SKU</TableHead>
     <TableHead className="h-8">Price</TableHead>
     <TableHead className="h-8">Stock</TableHead>
    </TableRow>
   </TableHeader>
   <TableBody>
    <TableRow className="h-8">
     <TableCell className="py-1">Laptop</TableCell>
     <TableCell className="py-1">LAP-001</TableCell>
     <TableCell className="py-1">$999</TableCell>
     <TableCell className="py-1">15</TableCell>
    </TableRow>
    <TableRow className="h-8">
     <TableCell className="py-1">Mouse</TableCell>
     <TableCell className="py-1">MOU-001</TableCell>
     <TableCell className="py-1">$25</TableCell>
     <TableCell className="py-1">50</TableCell>
    </TableRow>
    <TableRow className="h-8">
     <TableCell className="py-1">Keyboard</TableCell>
     <TableCell className="py-1">KEY-001</TableCell>
     <TableCell className="py-1">$75</TableCell>
     <TableCell className="py-1">30</TableCell>
    </TableRow>
   </TableBody>
  </Table>
 ),
};

/**
 * Empty state table
 */
export const EmptyState = {
 render: () => (
  <Table>
   <TableHeader>
    <TableRow>
     <TableHead>Name</TableHead>
     <TableHead>Email</TableHead>
     <TableHead>Role</TableHead>
     <TableHead>Status</TableHead>
    </TableRow>
   </TableHeader>
   <TableBody>
    <TableRow>
     <TableCell colSpan={4} className="h-24 text-center">
      <div className="flex flex-col items-center justify-center space-y-2">
       <div className="text-muted-foreground">No data available</div>
       <Button variant="outline" size="sm">
        Add New Item
       </Button>
      </div>
     </TableCell>
    </TableRow>
   </TableBody>
  </Table>
 ),
};

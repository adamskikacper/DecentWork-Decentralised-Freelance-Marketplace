import type { Meta, StoryObj } from "@storybook/react";
import AttachmentList from "./index";

/**
 * AttachmentList is a component that displays a list of file attachments with the ability to remove them.
 */
const meta = {
  title: "Job/AttachmentList",
  component: AttachmentList,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    onRemove: { action: "removed" },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AttachmentList>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * AttachmentList with File objects
 */
export const WithFileObjects: Story = {
  args: {
    attachments: [
      new File(["content"], "document.pdf", { type: "application/pdf" }),
      new File(["content"], "image.jpg", { type: "image/jpeg" }),
      new File(["content"], "spreadsheet.xlsx", { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" }),
    ],
    onRemove: (index) => console.log(`Removed attachment at index ${index}`),
  },
};

/**
 * AttachmentList with file-like objects
 */
export const WithFileLikeObjects: Story = {
  args: {
    attachments: [
      { name: "project_brief.pdf", size: "1.2 MB" },
      { name: "design_inspiration.zip", size: "3.5 MB" },
      { name: "brand_guidelines.pdf", size: "2.8 MB" },
    ],
    onRemove: (index) => console.log(`Removed attachment at index ${index}`),
  },
};

#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

// Templates
const componentTemplate = (componentName) => `import React from "react";
import { cn } from "@/lib/utils";

export interface ${componentName}Props extends React.HTMLAttributes<HTMLDivElement> {
  /** Description of this prop */
  variant?: "default" | "secondary" | "outline";
  /** Description of this prop */
  size?: "default" | "sm" | "lg";
  /** Description of this prop */
  isLoading?: boolean;
}

/**
 * ${componentName} - Brief description of the component
 * 
 * Detailed description of the component's purpose and usage.
 */
export const ${componentName} = React.forwardRef<HTMLDivElement, ${componentName}Props>(
  ({ className, variant = "default", size = "default", isLoading = false, ...props }, ref) => {
    // Component logic here
    
    return (
      <div
        className={cn(
          "base-styles-here",
          {
            "variant-styles-here": variant === "default",
            "secondary-styles-here": variant === "secondary",
            "outline-styles-here": variant === "outline",
            "sm-styles-here": size === "sm",
            "lg-styles-here": size === "lg",
            "loading-styles-here": isLoading,
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <span className="loading-indicator">Loading...</span>
        ) : (
          props.children
        )}
      </div>
    );
  }
);

${componentName}.displayName = "${componentName}";
`;

const storyTemplate = (
 componentName,
 categoryName
) => `import type { Meta, StoryObj } from "@storybook/react";
import { ${componentName} } from "./${componentName}";

/**
 * ${componentName} Stories
 * 
 * This file contains Storybook stories for the ${componentName} component.
 */
const meta = {
  title: "${categoryName}/${componentName}",
  component: ${componentName},
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: { 
      control: { type: "select" }, 
      options: ["default", "secondary", "outline"],
      description: "Controls the visual style of the component",
    },
    size: { 
      control: { type: "select" }, 
      options: ["default", "sm", "lg"],
      description: "Controls the size of the component",
    },
    isLoading: {
      control: "boolean",
      description: "Whether the component is in a loading state",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ${componentName}>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default state of the component
 */
export const Default: Story = {
  args: {
    children: "${componentName} Content",
    variant: "default",
    size: "default",
    isLoading: false,
  },
};

/**
 * Secondary variant
 */
export const Secondary: Story = {
  args: {
    ...Default.args,
    variant: "secondary",
    children: "Secondary Variant",
  },
};

/**
 * Outline variant
 */
export const Outline: Story = {
  args: {
    ...Default.args,
    variant: "outline",
    children: "Outline Variant",
  },
};

/**
 * Small size
 */
export const Small: Story = {
  args: {
    ...Default.args,
    size: "sm",
    children: "Small Component",
  },
};

/**
 * Large size
 */
export const Large: Story = {
  args: {
    ...Default.args,
    size: "lg",
    children: "Large Component",
  },
};

/**
 * Loading state
 */
export const Loading: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};
`;

const mdxTemplate = (
 componentName,
 categoryName
) => `import { Meta, Story, Canvas, Controls } from "@storybook/blocks";
import * as ${componentName}Stories from "./${componentName}.stories";

<Meta title="${categoryName}/${componentName}/Documentation" of={${componentName}Stories} />

# ${componentName}

A detailed description of the component, its purpose, and when to use it.

## Usage

\`\`\`tsx
import { ${componentName} } from "@/components/${categoryName.toLowerCase()}/${componentName}";

<${componentName}>Content here</${componentName}>
\`\`\`

## Examples

### Default

<Canvas of={${componentName}Stories.Default} />

### Variants

<Canvas of={${componentName}Stories.Secondary} />
<Canvas of={${componentName}Stories.Outline} />

### Sizes

<Canvas of={${componentName}Stories.Small} />
<Canvas of={${componentName}Stories.Large} />

### States

<Canvas of={${componentName}Stories.Loading} />

## Component API

<Controls />
`;

// Available categories
const categories = {
 UI: "ui",
 Layout: "layout",
 Form: "forms",
 Dashboard: "dashboard",
};

// Ask for component name
rl.question("Component name (PascalCase): ", (componentName) => {
 // Validate component name
 if (!componentName || !/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
  console.error(
   "Error: Component name must be in PascalCase (e.g., MyComponent)"
  );
  rl.close();
  return;
 }

 console.log("\nAvailable categories:");
 Object.keys(categories).forEach((category, index) => {
  console.log(`${index + 1}. ${category}`);
 });

 rl.question("\nSelect category (1-4): ", (categoryIndex) => {
  const index = parseInt(categoryIndex) - 1;
  const categoryNames = Object.keys(categories);
  const categoryValues = Object.values(categories);

  if (isNaN(index) || index < 0 || index >= categoryNames.length) {
   console.error("Error: Invalid category selection");
   rl.close();
   return;
  }

  const selectedCategoryName = categoryNames[index];
  const selectedCategoryFolder = categoryValues[index];
  const targetDir = path.join("src", "components", selectedCategoryFolder);

  // Create directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
   fs.mkdirSync(targetDir, { recursive: true });
  }

  // Create component file
  const componentPath = path.join(targetDir, `${componentName}.tsx`);
  fs.writeFileSync(componentPath, componentTemplate(componentName));

  // Create story file
  const storyPath = path.join(targetDir, `${componentName}.stories.tsx`);
  fs.writeFileSync(
   storyPath,
   storyTemplate(componentName, selectedCategoryName)
  );

  rl.question("Create MDX documentation file? (y/n): ", (createMdx) => {
   if (createMdx.toLowerCase() === "y") {
    // Create MDX file
    const mdxPath = path.join(targetDir, `${componentName}.mdx`);
    fs.writeFileSync(mdxPath, mdxTemplate(componentName, selectedCategoryName));
    console.log(`MDX documentation file created at: ${mdxPath}`);
   }

   console.log(`\nComponent created successfully!`);
   console.log(`Component file: ${componentPath}`);
   console.log(`Story file: ${storyPath}`);
   console.log(`\nTo view in Storybook, run: npm run storybook`);

   rl.close();
  });
 });
});

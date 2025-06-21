import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./index";

/**
 * AspectRatio component maintains consistent aspect ratios for responsive content.
 * Built on Radix UI AspectRatio primitive with customizable ratio values.
 */
const meta = {
 title: "UI/AspectRatio",
 component: AspectRatio,
 parameters: {
  layout: "centered",
 },
 argTypes: {
  ratio: {
   control: { type: "number", min: 0.1, max: 5, step: 0.1 },
   description: "Aspect ratio (width/height)",
  },
 },
 tags: ["autodocs"],
} satisfies Meta<typeof AspectRatio>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default 16:9 aspect ratio
 */
export const Default: Story = {
 render: () => (
  <div className="w-[350px]">
   <AspectRatio ratio={16 / 9}>
    <div className="flex h-full items-center justify-center rounded-md bg-muted">
     <p className="text-sm text-muted-foreground">16:9 Aspect Ratio</p>
    </div>
   </AspectRatio>
  </div>
 ),
};

/**
 * Square aspect ratio (1:1)
 */
export const Square: Story = {
 render: () => (
  <div className="w-[250px]">
   <AspectRatio ratio={1}>
    <div className="flex h-full items-center justify-center rounded-md bg-muted">
     <p className="text-sm text-muted-foreground">1:1 Square</p>
    </div>
   </AspectRatio>
  </div>
 ),
};

/**
 * Portrait aspect ratio (3:4)
 */
export const Portrait: Story = {
 render: () => (
  <div className="w-[200px]">
   <AspectRatio ratio={3 / 4}>
    <div className="flex h-full items-center justify-center rounded-md bg-muted">
     <p className="text-sm text-muted-foreground">3:4 Portrait</p>
    </div>
   </AspectRatio>
  </div>
 ),
};

/**
 * Different aspect ratios
 */
export const DifferentRatios = {
 render: () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
   <div className="space-y-2">
    <h4 className="text-sm font-medium">1:1 (Square)</h4>
    <AspectRatio ratio={1}>
     <div className="flex h-full items-center justify-center rounded-md bg-blue-100">
      <p className="text-sm">1:1</p>
     </div>
    </AspectRatio>
   </div>

   <div className="space-y-2">
    <h4 className="text-sm font-medium">4:3 (Standard)</h4>
    <AspectRatio ratio={4 / 3}>
     <div className="flex h-full items-center justify-center rounded-md bg-green-100">
      <p className="text-sm">4:3</p>
     </div>
    </AspectRatio>
   </div>

   <div className="space-y-2">
    <h4 className="text-sm font-medium">16:9 (Widescreen)</h4>
    <AspectRatio ratio={16 / 9}>
     <div className="flex h-full items-center justify-center rounded-md bg-yellow-100">
      <p className="text-sm">16:9</p>
     </div>
    </AspectRatio>
   </div>

   <div className="space-y-2">
    <h4 className="text-sm font-medium">3:4 (Portrait)</h4>
    <AspectRatio ratio={3 / 4}>
     <div className="flex h-full items-center justify-center rounded-md bg-red-100">
      <p className="text-sm">3:4</p>
     </div>
    </AspectRatio>
   </div>

   <div className="space-y-2">
    <h4 className="text-sm font-medium">21:9 (Ultrawide)</h4>
    <AspectRatio ratio={21 / 9}>
     <div className="flex h-full items-center justify-center rounded-md bg-purple-100">
      <p className="text-sm">21:9</p>
     </div>
    </AspectRatio>
   </div>

   <div className="space-y-2">
    <h4 className="text-sm font-medium">2:1 (Banner)</h4>
    <AspectRatio ratio={2}>
     <div className="flex h-full items-center justify-center rounded-md bg-orange-100">
      <p className="text-sm">2:1</p>
     </div>
    </AspectRatio>
   </div>
  </div>
 ),
};

/**
 * With image content
 */
export const WithImage = {
 render: () => (
  <div className="w-[400px]">
   <AspectRatio ratio={16 / 9}>
    <img
     src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
     alt="Photo by Drew Beamer"
     className="rounded-md object-cover w-full h-full"
    />
   </AspectRatio>
  </div>
 ),
};

/**
 * With video placeholder
 */
export const WithVideo = {
 render: () => (
  <div className="w-[400px]">
   <AspectRatio ratio={16 / 9}>
    <div className="flex h-full items-center justify-center rounded-md bg-black text-white">
     <div className="text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/10 flex items-center justify-center">
       <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M8 5v14l11-7z" />
       </svg>
      </div>
      <p className="text-sm">Video Player</p>
      <p className="text-xs text-gray-400">16:9 aspect ratio</p>
     </div>
    </div>
   </AspectRatio>
  </div>
 ),
};

/**
 * Card with aspect ratio image
 */
export const InCard = {
 render: () => (
  <div className="w-[300px] border rounded-lg overflow-hidden">
   <AspectRatio ratio={16 / 9}>
    <img
     src="https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&dpr=2&q=80"
     alt="Landscape"
     className="object-cover w-full h-full"
    />
   </AspectRatio>
   <div className="p-4">
    <h3 className="font-semibold">Beautiful Landscape</h3>
    <p className="text-sm text-muted-foreground mt-1">
     A stunning view of mountains and valleys captured in perfect lighting.
    </p>
   </div>
  </div>
 ),
};

/**
 * Gallery grid with consistent ratios
 */
export const Gallery = {
 render: () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl">
   {Array.from({ length: 6 }).map((_, i) => (
    <AspectRatio key={i} ratio={1}>
     <div className="flex h-full items-center justify-center rounded-md bg-gradient-to-br from-blue-100 to-blue-200">
      <p className="text-sm font-medium">Photo {i + 1}</p>
     </div>
    </AspectRatio>
   ))}
  </div>
 ),
};

/**
 * Responsive aspect ratio
 */
export const Responsive = {
 render: () => (
  <div className="w-full max-w-md">
   <AspectRatio ratio={16 / 9}>
    <div className="flex h-full items-center justify-center rounded-md bg-gradient-to-r from-pink-100 to-blue-100">
     <div className="text-center">
      <p className="text-lg font-semibold">Responsive</p>
      <p className="text-sm text-muted-foreground">
       Maintains 16:9 ratio at any size
      </p>
     </div>
    </div>
   </AspectRatio>
  </div>
 ),
};

/**
 * Product showcase
 */
export const ProductShowcase = {
 render: () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
   <div className="space-y-4">
    <AspectRatio ratio={1}>
     <div className="flex h-full items-center justify-center rounded-lg bg-gradient-to-br from-gray-100 to-gray-200">
      <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
     </div>
    </AspectRatio>

    <div className="grid grid-cols-4 gap-2">
     {Array.from({ length: 4 }).map((_, i) => (
      <AspectRatio key={i} ratio={1}>
       <div className="flex h-full items-center justify-center rounded bg-gray-100 border-2 border-transparent hover:border-primary cursor-pointer">
        <div className="w-6 h-6 bg-gray-300 rounded"></div>
       </div>
      </AspectRatio>
     ))}
    </div>
   </div>

   <div className="space-y-4">
    <h2 className="text-2xl font-bold">Product Name</h2>
    <p className="text-muted-foreground">
     Product description with consistent image aspect ratios for a clean,
     professional appearance in the gallery.
    </p>
    <div className="flex items-center gap-2">
     <span className="text-2xl font-bold">$99.99</span>
     <span className="text-lg text-muted-foreground line-through">$129.99</span>
    </div>
   </div>
  </div>
 ),
};

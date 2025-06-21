import type { Meta, StoryObj } from "@storybook/react";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "./index";

const meta: Meta<typeof Carousel> = {
 title: "UI/Carousel",
 component: Carousel,
 parameters: {
  layout: "centered",
  docs: {
   description: {
    component:
     "A carousel component for displaying multiple items with navigation controls. Perfect for image galleries, product showcases, and content sliders.",
   },
  },
 },
 tags: ["autodocs"],
 argTypes: {
  orientation: {
   control: "select",
   options: ["horizontal", "vertical"],
  },
 },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

/**
 * Basic horizontal carousel
 */
export const Default: Story = {
 render: () => (
  <Carousel className="w-full max-w-xs">
   <CarouselContent>
    {Array.from({ length: 5 }, (_, index) => (
     <CarouselItem key={index}>
      <div className="p-1">
       <div className="flex aspect-square items-center justify-center p-6 bg-gray-100 rounded-lg">
        <span className="text-4xl font-semibold">{index + 1}</span>
       </div>
      </div>
     </CarouselItem>
    ))}
   </CarouselContent>
   <CarouselPrevious />
   <CarouselNext />
  </Carousel>
 ),
};

/**
 * Image gallery carousel
 */
export const ImageGallery: Story = {
 render: () => {
  const images = [
   {
    src: "/placeholder.svg",
    alt: "Landscape 1",
    title: "Beautiful Mountain View",
   },
   { src: "/placeholder.svg", alt: "Landscape 2", title: "Ocean Sunset" },
   { src: "/placeholder.svg", alt: "Landscape 3", title: "Forest Path" },
   { src: "/placeholder.svg", alt: "Landscape 4", title: "City Skyline" },
   { src: "/placeholder.svg", alt: "Landscape 5", title: "Desert Dunes" },
  ];

  return (
   <Carousel className="w-full max-w-lg">
    <CarouselContent>
     {images.map((image, index) => (
      <CarouselItem key={index}>
       <div className="p-1">
        <div className="relative">
         <img
          src={image.src}
          alt={image.alt}
          className="w-full h-64 object-cover rounded-lg"
         />
         <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 rounded-b-lg">
          <h3 className="font-semibold">{image.title}</h3>
          <p className="text-sm opacity-90">
           {index + 1} of {images.length}
          </p>
         </div>
        </div>
       </div>
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
  );
 },
};

/**
 * Product showcase carousel
 */
export const ProductShowcase: Story = {
 render: () => {
  const products = [
   { name: "Wireless Headphones", price: "$199", rating: 4.5 },
   { name: "Smart Watch", price: "$299", rating: 4.8 },
   { name: "Laptop Stand", price: "$79", rating: 4.2 },
   { name: "USB-C Hub", price: "$49", rating: 4.6 },
   { name: "Portable Charger", price: "$39", rating: 4.4 },
  ];

  return (
   <Carousel className="w-full max-w-sm">
    <CarouselContent>
     {products.map((product, index) => (
      <CarouselItem key={index}>
       <div className="p-1">
        <div className="border rounded-lg p-4 space-y-3">
         <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Product {index + 1}</span>
         </div>
         <div>
          <h3 className="font-semibold text-sm">{product.name}</h3>
          <p className="text-lg font-bold text-blue-600">{product.price}</p>
          <div className="flex items-center space-x-1">
           <span className="text-yellow-500">⭐</span>
           <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
         </div>
         <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
          Add to Cart
         </button>
        </div>
       </div>
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
  );
 },
};

/**
 * Testimonials carousel
 */
export const Testimonials: Story = {
 render: () => {
  const testimonials = [
   {
    name: "Sarah Johnson",
    role: "Product Manager",
    company: "TechCorp",
    quote:
     "This product has completely transformed our workflow. Highly recommended!",
    avatar: "👩‍💼",
   },
   {
    name: "Mike Chen",
    role: "Developer",
    company: "StartupXYZ",
    quote: "Amazing user experience and great performance. Our team loves it.",
    avatar: "👨‍💻",
   },
   {
    name: "Emily Davis",
    role: "Designer",
    company: "Creative Studio",
    quote:
     "The design is beautiful and intuitive. Makes our work so much easier.",
    avatar: "👩‍🎨",
   },
  ];

  return (
   <Carousel className="w-full max-w-md">
    <CarouselContent>
     {testimonials.map((testimonial, index) => (
      <CarouselItem key={index}>
       <div className="p-4">
        <div className="text-center space-y-4">
         <p className="text-lg italic">"{testimonial.quote}"</p>
         <div className="flex items-center justify-center space-x-3">
          <span className="text-3xl">{testimonial.avatar}</span>
          <div className="text-left">
           <p className="font-semibold">{testimonial.name}</p>
           <p className="text-sm text-gray-600">{testimonial.role}</p>
           <p className="text-sm text-gray-500">{testimonial.company}</p>
          </div>
         </div>
        </div>
       </div>
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
  );
 },
};

/**
 * Multiple items per view
 */
export const MultipleItems: Story = {
 render: () => (
  <Carousel
   opts={{
    align: "start",
    loop: true,
   }}
   className="w-full max-w-lg"
  >
   <CarouselContent className="-ml-2 md:-ml-4">
    {Array.from({ length: 8 }, (_, index) => (
     <CarouselItem
      key={index}
      className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
     >
      <div className="p-1">
       <div className="flex aspect-square items-center justify-center p-6 bg-gradient-to-br from-blue-400 to-purple-600 text-white rounded-lg">
        <span className="text-2xl font-semibold">{index + 1}</span>
       </div>
      </div>
     </CarouselItem>
    ))}
   </CarouselContent>
   <CarouselPrevious />
   <CarouselNext />
  </Carousel>
 ),
};

/**
 * Vertical carousel
 */
export const Vertical: Story = {
 render: () => (
  <Carousel
   orientation="vertical"
   opts={{
    align: "start",
   }}
   className="w-full max-w-xs mx-auto"
  >
   <CarouselContent className="-mt-1 h-80">
    {Array.from({ length: 5 }, (_, index) => (
     <CarouselItem key={index} className="pt-1 md:basis-1/2">
      <div className="p-1">
       <div className="flex items-center justify-center p-6 bg-gray-100 rounded-lg h-20">
        <span className="text-2xl font-semibold">Item {index + 1}</span>
       </div>
      </div>
     </CarouselItem>
    ))}
   </CarouselContent>
   <CarouselPrevious />
   <CarouselNext />
  </Carousel>
 ),
};

/**
 * Auto-playing carousel
 */
export const AutoPlay: Story = {
 render: () => {
  const slides = [
   { bg: "bg-red-400", text: "Slide 1" },
   { bg: "bg-green-400", text: "Slide 2" },
   { bg: "bg-blue-400", text: "Slide 3" },
   { bg: "bg-yellow-400", text: "Slide 4" },
   { bg: "bg-purple-400", text: "Slide 5" },
  ];

  return (
   <div className="space-y-4">
    <p className="text-sm text-gray-600 text-center">
     This carousel auto-plays every 3 seconds
    </p>
    <Carousel
     opts={{
      align: "start",
      loop: true,
     }}
     className="w-full max-w-xs"
    >
     <CarouselContent>
      {slides.map((slide, index) => (
       <CarouselItem key={index}>
        <div className="p-1">
         <div
          className={`flex aspect-square items-center justify-center p-6 ${slide.bg} text-white rounded-lg`}
         >
          <span className="text-2xl font-semibold">{slide.text}</span>
         </div>
        </div>
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>
   </div>
  );
 },
};

/**
 * Card carousel
 */
export const Cards: Story = {
 render: () => {
  const cards = [
   {
    title: "Getting Started",
    description: "Learn the basics of our platform",
    icon: "🚀",
   },
   {
    title: "Advanced Features",
    description: "Explore powerful tools and integrations",
    icon: "⚡",
   },
   {
    title: "Best Practices",
    description: "Tips and tricks from our experts",
    icon: "💡",
   },
   {
    title: "API Documentation",
    description: "Complete reference for developers",
    icon: "📚",
   },
   { title: "Community", description: "Connect with other users", icon: "👥" },
  ];

  return (
   <Carousel className="w-full max-w-lg">
    <CarouselContent>
     {cards.map((card, index) => (
      <CarouselItem key={index}>
       <div className="p-1">
        <div className="border rounded-lg p-6 space-y-4 h-48 flex flex-col justify-between">
         <div className="space-y-3">
          <div className="text-3xl">{card.icon}</div>
          <h3 className="text-lg font-semibold">{card.title}</h3>
          <p className="text-sm text-gray-600">{card.description}</p>
         </div>
         <button className="w-full bg-blue-600 text-white py-2 rounded-lg text-sm hover:bg-blue-700">
          Learn More
         </button>
        </div>
       </div>
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
   </Carousel>
  );
 },
};

/**
 * Thumbnail navigation
 */
export const WithThumbnails: Story = {
 render: () => {
  const images = Array.from({ length: 5 }, (_, i) => ({
   main: "/placeholder.svg",
   thumb: "/placeholder.svg",
   title: `Image ${i + 1}`,
  }));

  return (
   <div className="space-y-4">
    <Carousel className="w-full max-w-md">
     <CarouselContent>
      {images.map((image, index) => (
       <CarouselItem key={index}>
        <div className="p-1">
         <img
          src={image.main}
          alt={image.title}
          className="w-full h-64 object-cover rounded-lg"
         />
        </div>
       </CarouselItem>
      ))}
     </CarouselContent>
     <CarouselPrevious />
     <CarouselNext />
    </Carousel>

    <div className="flex justify-center space-x-2">
     {images.map((image, index) => (
      <button
       key={index}
       className="w-16 h-16 border-2 border-gray-300 rounded-lg overflow-hidden hover:border-blue-500 focus:border-blue-500"
      >
       <img
        src={image.thumb}
        alt={`Thumbnail ${index + 1}`}
        className="w-full h-full object-cover"
       />
      </button>
     ))}
    </div>
   </div>
  );
 },
};

import React from "react";
import type { Preview } from "@storybook/react";
import "../src/index.css"; // Import tailwind styles

const preview: Preview = {
 parameters: {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
   matchers: {
    color: /(background|color)$/i,
    date: /Date$/i,
   },
  },
  backgrounds: {
   default: "light",
   values: [
    {
     name: "light",
     value: "#ffffff",
    },
    {
     name: "dark",
     value: "#1e293b", // slate-800
    },
   ],
  },
 },
 decorators: [
  (Story) => (
   <div className="p-6">
    <Story />
   </div>
  ),
 ],
};

export default preview;

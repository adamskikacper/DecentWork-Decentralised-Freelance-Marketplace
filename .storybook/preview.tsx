import React from "react";
import type { Preview } from "@storybook/react";
import { fn } from "@storybook/test";
import "../src/index.css";

const preview: Preview = {
 argTypes: {
  onClick: { action: fn() },
  onChange: { action: fn() },
  onSubmit: { action: fn() },
  onSelect: { action: fn() },
  onBlur: { action: fn() },
  onFocus: { action: fn() },
 },
 parameters: {
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

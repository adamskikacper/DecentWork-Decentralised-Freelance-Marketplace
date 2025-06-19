import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
 server: {
  host: "::",
  port: 8080,
 },
 plugins: [react()],
 resolve: {
  alias: {
   "@": path.resolve(__dirname, "./src"),
   "@/*": path.resolve(__dirname, "./src/*"),
  },
  extensions: [".tsx", ".ts", ".jsx", ".js"],
 },
 define: {
  __dirname: JSON.stringify(path.dirname(fileURLToPath(import.meta.url))),
 },
}));

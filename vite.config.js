import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite uses this config to compile React JSX correctly during development.
export default defineConfig({
  plugins: [react()],
});

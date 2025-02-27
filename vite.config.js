import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Add "base" option for GitHub Pages
export default defineConfig({
  plugins: [react()],
  base: "/SCP-Catalogue-React/",  // 👈 Replace with your GitHub repo name
});

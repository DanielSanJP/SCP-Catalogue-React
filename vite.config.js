import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Smart detection: Netlify sets process.env.URL, GitHub Pages does not
const isNetlify = !!process.env.URL;
const basePath = isNetlify ? "/" : "/SCP-Catalogue-React/";

export default defineConfig({
  base: basePath,
  plugins: [react()],
});

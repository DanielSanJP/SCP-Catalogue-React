import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/SCP-Catalogue-React/",
  plugins: [react()],
  build: {
    outDir: "docs",
  },
});

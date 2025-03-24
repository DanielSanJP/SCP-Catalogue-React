import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/SCP-Catalogue-React/", // Must match the repo name!
  plugins: [react()],
});

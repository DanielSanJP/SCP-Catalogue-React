import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/SCP-Catalogue-React/", // MUST match your GitHub repo name
  plugins: [react()],
});

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// ✅ Smart detection: Netlify sets process.env.URL, GitHub Pages does not
const isNetlify = !!process.env.URL;
const basePath = isNetlify ? "/" : "/SCP-Catalogue-React/";

export default defineConfig({
<<<<<<< HEAD
  base: "/SCP-Catalogue-React/", // MUST match your GitHub repo name
=======
  base: basePath,
>>>>>>> 4a813addb76a9e0b1d2582e5a13a6e19337b4800
  plugins: [react()],
});

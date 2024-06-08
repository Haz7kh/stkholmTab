import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
  },
  define: {
    " process.env.VITE_KEY_API_URL": JSON.stringify(
      process.env.VITE_KEY_API_URL
    ),
  },
});

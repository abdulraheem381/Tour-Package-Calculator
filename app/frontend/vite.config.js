import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  
  test: {
    globals: true,                       // ✅ use global test functions like describe, it
    environment: "jsdom",                // ✅ for browser-like environment
    setupFiles: "./src/tests/setup.js",  // ✅ your setup file
    include: ["src/**/*.test.{js,jsx}"], // ✅ pick up all test files
  },
});

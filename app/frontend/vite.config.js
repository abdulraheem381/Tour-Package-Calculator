import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,                       // allow describe/it without import
    environment: "jsdom",                // browser-like environment for React
    setupFiles: "./src/tests/setup.js",  // run before tests
    include: ["src/**/*.test.{js,jsx}"], // match your test files
    deps: {
      inline: ["@testing-library/react"], // ensure proper dependency resolution
    },
  },
});

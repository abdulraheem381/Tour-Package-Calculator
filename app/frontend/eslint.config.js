import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  // Ignore build output
  {
    ignores: ["dist"],
  },

  // React + JSX source files
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // ✅ Enable JSX parsing
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      // Base + React recommended rules
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // Vite / React 17+
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/no-unescaped-entities": "off",

      // CI-friendly (warn but don’t fail)
      "no-unused-vars": "warn",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },

  // Node-side config files (Tailwind, Vite, etc.)
  {
    files: ["tailwind.config.js", "vite.config.js"],
    languageOptions: {
      sourceType: "script",
      globals: {
        ...globals.node, // ✅ allow require, module, process
      },
    },
  },
];

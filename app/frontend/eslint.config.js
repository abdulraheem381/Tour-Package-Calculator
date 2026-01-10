import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default [
  {
    ignores: ["dist"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
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
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,

      // 🔥 IMPORTANT FIXES
      "react/react-in-jsx-scope": "off",   // React 17+
      "react/prop-types": "off",           // No PropTypes used
      "no-unused-vars": ["warn"],           // Warn locally, not fail CI
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
];

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import FlatCompat from "@eslint/compat";
import path from "path";
import { fileURLToPath } from "url";

// mimic CommonJS variables -- not needed if using Jest ESM presets
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
  allConfig: tseslint.configs.recommended,
});

export default tseslint.config(
  {
    // Optionally add an ESLint flat config "files" object for glob-based targeting
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    ignores: [
      "node_modules/",
      ".next/",
      "out/",
      "dist/",
      "build/",
      "*.config.js",
      "*.config.mjs",
      "*.config.cjs",
    ],
    extends: [
      pluginJs.configs.recommended,
      ...tseslint.configs.recommended,
      ...compat.extends("plugin:react/recommended"),
      ...compat.extends("plugin:react/jsx-runtime"),
    ],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
        project: ["./tsconfig.json", "./.next/tsconfig.json"], // Specify your tsconfig.json path
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      "@next/next": nextPlugin,
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off", // Next.js uses TypeScript for prop types
      "@typescript-eslint/no-explicit-any": "warn", // Allow any for now, but warn
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-unused-vars": "off", // Disable base ESLint no-unused-vars
      // Next.js specific rules
      "@next/next/no-img-element": "warn", // Warn for img tag without Next.js Image component
      // Adjust other rules as needed
      "no-empty": "warn", // Warn about empty blocks, don't error
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
  // Apply Next.js recommended rules
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
    },
  },
);

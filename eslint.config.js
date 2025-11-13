import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default [
  {
    // Ignore dist directory
    ignores: ["dist/**"],
  },
  // Base configuration for all files
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        process: "readonly",
        setImmediate: "readonly",
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "no-empty": "off",
      "no-fallthrough": "off",
      "no-prototype-builtins": "off",
      "no-cond-assign": "off",
      "no-useless-escape": "off",
      "getter-return": "off",
      "valid-typeof": "off",
      "no-control-regex": "off",
      "no-func-assign": "off",
      "react/no-find-dom-node": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  // Configuration for TypeScript files
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./tsconfig.json", "./tsconfig.node.json"], // Specify multiple project files
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        process: "readonly",
        setImmediate: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      ...tseslint.configs.recommended.rules, // Directly include recommended TypeScript rules
      // TypeScript specific rules or overrides
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-this-alias": "off",
    },
  },
];
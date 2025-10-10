# Project Overview

This is a modern frontend project built with Vite, React, and TypeScript. It uses Tailwind CSS for styling and Yarn for package management. The project is set up with a development server that supports hot module replacement for a fast and efficient development workflow.

**Key Technologies:**

*   **Vite:** A fast build tool and development server.
*   **React:** A JavaScript library for building user interfaces.
*   **TypeScript:** A typed superset of JavaScript that compiles to plain JavaScript.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **Yarn:** A fast, reliable, and secure dependency manager.

# Building and Running

**Development:**

To start the development server, run:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`.

**Build:**

To build the project for production, run:

```bash
yarn build
```

This will create a `dist` directory with the optimized production build.

**Preview:**

To preview the production build locally, run:

```bash
yarn preview
```

# Development Conventions

*   **Styling:** The project uses Tailwind CSS for styling. Utility classes are preferred over custom CSS.
*   **Components:** The main application component is `src/App.tsx`. New components should be created in the `src/components` directory.
*   **State Management:** The project uses React's built-in state management (`useState` hook). For more complex state management, a library like Redux or Zustand could be added.
*   **Linting:** The project is configured with ESLint to enforce code quality and consistency. Run `yarn lint` to check for linting errors.

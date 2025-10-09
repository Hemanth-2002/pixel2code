# Pixel2Code Frontend Project

A modern, fast, and beautiful frontend application built with Vite, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ⚡ **Vite** - Lightning fast build tool with instant hot module replacement
- ⚛️ **React 19** - Latest version with modern React features
- 🔷 **TypeScript** - Type-safe development with excellent IDE support
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 📦 **Yarn** - Fast, reliable, and secure dependency management
- 🔧 **PostCSS & Autoprefixer** - CSS processing and vendor prefixing

## 🛠️ Tech Stack

- **Build Tool**: Vite 7.1.9
- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 4.1.14
- **Package Manager**: Yarn
- **CSS Processing**: PostCSS 8.5.6 + Autoprefixer 10.4.21

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   yarn install
   ```

## 🚀 Development

Start the development server:

```bash
yarn dev
```

The application will be available at `http://localhost:3000`

## 🏗️ Build

Build the project for production:

```bash
yarn build
```

## 🔍 Preview

Preview the production build:

```bash
yarn preview
```

## 📁 Project Structure

```
pixel2code/
├── src/
│   ├── App.tsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind imports
├── index.html           # HTML template
├── vite.config.ts       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── tsconfig.node.json   # TypeScript configuration for Node.js
└── package.json         # Project dependencies and scripts
```

## 🎨 Tailwind CSS Features

The project includes a beautiful demo page showcasing:

- Gradient backgrounds and text effects
- Interactive components with hover states
- Responsive grid layouts
- Modern card designs with shadows
- Color-coded tech stack badges
- Smooth transitions and animations

## 🔧 Configuration

### Vite Configuration
- React plugin enabled
- Development server on port 3000
- Auto-open browser on start

### Tailwind Configuration
- Content paths configured for all React files
- Default theme with extensibility
- PostCSS integration

### TypeScript Configuration
- Strict mode enabled
- React JSX support
- Modern ES2020 target
- Bundler module resolution

## 📝 Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint (if configured)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

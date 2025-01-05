# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Get Started

## Clone repo and create vite react

In your local termnial, ensure your current directory is at `Desktop`, and then clone the created repo to local Desktop, and then open the cloned file with VS Code editor.

```bash
git clone https://github.com/ivany-tan/portfolio-25.git
cd portfolio-25
code .
```

Open the terminal in VS Code editor and create a new vite react app.

```bash
npm create vite@latest . -- --template react
```

## Install library

Install [Tailwind CSS with Vite](https://tailwindcss.com/docs/guides/vite).

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Configure your template path in `tailwind.config.js` file.

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

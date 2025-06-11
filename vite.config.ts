import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: "esnext",
    minify: "terser",
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          icons: [
            "@fortawesome/react-fontawesome",
            "@fortawesome/fontawesome-svg-core",
          ],
          reactIcons: ["react-icons/si", "react-icons/fa"],
          ui: ["@reduxjs/toolkit", "react-redux"],
          utils: ["formik", "yup"],
        },
      },
    },
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: [
          "console.log",
          "console.info",
          "console.debug",
          "console.warn",
        ],
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "@fortawesome/react-fontawesome"],
    exclude: [
      "@fortawesome/free-brands-svg-icons",
      "@fortawesome/free-solid-svg-icons",
    ],
  },
  server: {
    fs: {
      strict: false,
    },
  },
});

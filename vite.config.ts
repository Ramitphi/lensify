import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
// https://vitejs.dev/config/

export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        trying: resolve(__dirname, "trying/index.html"),
      },
    },
  },
});

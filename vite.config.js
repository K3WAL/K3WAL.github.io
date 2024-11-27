import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const someValue = process.env.SOME_ENV_VARIABLE;

export default defineConfig({
  server: {
    port: 3000,
  },

  plugins: [react()],
  assetsInclude: ["**/*.glb"],

  build: {
    outDir: "dist",
    base: '/dist/',
  },
});

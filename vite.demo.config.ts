import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/expressive-svgs/",
  plugins: [react()],
  build: {
    outDir: "dist-demo",
  },
});

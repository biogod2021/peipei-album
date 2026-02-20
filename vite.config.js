import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  base: "/peipei-album/",
  publicDir: "../public",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  }
});

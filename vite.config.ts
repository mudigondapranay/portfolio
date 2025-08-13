import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

// Export async config to allow dynamic imports safely
export default defineConfig(async () => {
  const plugins = [
    react(),
    runtimeErrorOverlay(),
  ];

  // Only load cartographer plugin in non-production Replit environments
  if (process.env.NODE_ENV !== "production" && process.env.REPL_ID) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return {
    base: "/portfolio/", // ✅ needed for GitHub Pages to load assets correctly
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(path.dirname(new URL(import.meta.url).pathname), "client", "src"),
        "@shared": path.resolve(path.dirname(new URL(import.meta.url).pathname), "shared"),
        "@assets": path.resolve(path.dirname(new URL(import.meta.url).pathname), "attached_assets"),
      },
    },
    root: path.resolve(path.dirname(new URL(import.meta.url).pathname), "client"),
    build: {
      outDir: path.resolve(path.dirname(new URL(import.meta.url).pathname), "dist/public"),
      emptyOutDir: true,
    },
    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    },
  };
});

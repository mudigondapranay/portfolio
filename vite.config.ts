import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

export default defineConfig(async ({ mode }) => {
  const __dirname = path.dirname(new URL(import.meta.url).pathname);

  const plugins = [
    react(),
    runtimeErrorOverlay()
  ];

  // Only load cartographer plugin in non-production Replit environments
  if (mode !== "production" && process.env.REPL_ID) {
    const { cartographer } = await import("@replit/vite-plugin-cartographer");
    plugins.push(cartographer());
  }

  return {
    // ✅ Needed so GitHub Pages can load JS/CSS from the correct path
    base: "/portfolio/",

    plugins,

    // ✅ Make aliases consistent for imports
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "client", "src"),
        "@shared": path.resolve(__dirname, "shared"),
        "@assets": path.resolve(__dirname, "attached_assets")
      },
    },

    // ✅ Root points to your client folder containing index.html
    root: path.resolve(__dirname, "client"),

    build: {
      // ✅ Output straight to dist for gh-pages deployment
      outDir: path.resolve(__dirname, "dist"),
      emptyOutDir: true,
    },

    server: {
      fs: {
        strict: true,
        deny: ["**/.*"],
      },
    }
  };
});

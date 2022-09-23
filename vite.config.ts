import { defineConfig } from "vite"
import { resolve } from "path"
import react from "@vitejs/plugin-react"

export default defineConfig((configEnv) => {
  const isDevelopment = configEnv.mode === "development"

  return {
    server: {
      port: 3000,
    },
    plugins: [react()],
    resolve: {
      alias: {
        app: resolve(__dirname, "src", "app"),
        components: resolve(__dirname, "src", "components"),
        hooks: resolve(__dirname, "src", "hooks"),
      },
    },
    css: {
      modules: {
        generateScopedName: isDevelopment
          ? "[name]__[local]__[hash:base64:5]"
          : "[hash:base64:5]",
      },
    },

  }
})

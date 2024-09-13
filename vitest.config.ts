import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    coverage: {
      provider: "v8",
      extension: [".tsx"],
      reporter: ['text', 'json-summary', 'json'],
    },
  },
});

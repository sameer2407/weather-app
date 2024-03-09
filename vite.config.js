import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env.WEATHER_API,
    },
  };
});

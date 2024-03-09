export default defineConfig(() => {
  return {
    define: {
      __APP_ENV__: process.env.WEATHER_API,
    },
  };
});

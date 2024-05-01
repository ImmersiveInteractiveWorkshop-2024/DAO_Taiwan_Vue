// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/hotai/Desktop/vue-taiwanstreet/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/hotai/Desktop/vue-taiwanstreet/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import eslintPlugin from "file:///C:/Users/hotai/Desktop/vue-taiwanstreet/node_modules/vite-plugin-eslint/dist/index.mjs";

// loadEnv.js
import dotenv from "file:///C:/Users/hotai/Desktop/vue-taiwanstreet/node_modules/dotenv/lib/main.js";
import path from "path";
import fs from "fs";
var getCurrentTimeString = () => {
  const now = /* @__PURE__ */ new Date();
  let hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const ampm = hours >= 12 ? "\u4E0B\u5348" : "\u4E0A\u5348";
  hours %= 12;
  hours = hours || 12;
  const hoursStr = String(hours).padStart(2, "0");
  return `${ampm}${hoursStr}:${minutes}:${seconds}`;
};
var customLog = (tag, message, tagColor = "\x1B[36m", messageColor = "\x1B[32m") => {
  const timeString = getCurrentTimeString();
  console.log(`\x1B[90m%s\x1B[0m ${tagColor}\x1B[1m%s\x1B[0m ${messageColor}%s\x1B[0m`, timeString, `[${tag}]`, message);
};
var loadEnv_default = (mode) => {
  const basePath = path.resolve(process.cwd(), ".env");
  const envPath = `${basePath}.${mode}`;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const envConfig = dotenv.config({ path: finalPath });
  if (envConfig.error) {
    customLog("vite", "\u7121\u6CD5\u8B80\u53D6\u5230\u74B0\u5883\u8B8A\u6578(Environment Variables)\u6A94\u6848\u3002");
    customLog("vite", "\u8ACB\u5728\u7D42\u7AEF\u6A5F\u8F38\u5165\u300Ccp .env.example .env\u300D \u5EFA\u7ACB\u74B0\u5883\u8B8A\u6578\u6A94\u6848\u3002");
    customLog("vite", "\u76EE\u524D\u50C5\u652F\u63F4 .env\u3001.env.development\u3001.env.production \u4E09\u7A2E\u6A21\u5F0F\u3002");
  }
};

// vite.config.js
var __vite_injected_original_import_meta_url = "file:///C:/Users/hotai/Desktop/vue-taiwanstreet/vite.config.js";
var INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g;
var DRIVE_LETTER_REGEX = /^[a-z]:/i;
var vite_config_default = defineConfig(({ mode }) => {
  loadEnv_default(mode);
  return {
    base: process.env.NODE_ENV === "production" ? `/${process.env.REPOSITORY_NAME}/` : "/",
    plugins: [
      vue(),
      eslintPlugin({
        include: ["src/**/*.js", "src/**/*.vue", "src/*.js", "src/*.vue"]
      })
    ],
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
      }
    },
    build: {
      rollupOptions: {
        output: {
          // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
          sanitizeFileName(name) {
            const match = DRIVE_LETTER_REGEX.exec(name);
            const driveLetter = match ? match[0] : "";
            return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, "");
          }
        }
      }
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAibG9hZEVudi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGhvdGFpXFxcXERlc2t0b3BcXFxcdnVlLXRhaXdhbnN0cmVldFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaG90YWlcXFxcRGVza3RvcFxcXFx2dWUtdGFpd2Fuc3RyZWV0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ob3RhaS9EZXNrdG9wL3Z1ZS10YWl3YW5zdHJlZXQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCdcbmltcG9ydCBsb2FkRW52IGZyb20gJy4vbG9hZEVudidcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IElOVkFMSURfQ0hBUl9SRUdFWCA9IC9bXFx4MDAtXFx4MUZcXHg3Rjw+KiNcInt9fF5bXFxdYDs/OiY9KyQsXS9nXG5jb25zdCBEUklWRV9MRVRURVJfUkVHRVggPSAvXlthLXpdOi9pXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIGxvYWRFbnYobW9kZSlcbiAgcmV0dXJuICh7XG4gICAgYmFzZTogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyA/IGAvJHtwcm9jZXNzLmVudi5SRVBPU0lUT1JZX05BTUV9L2AgOiAnLycsXG4gICAgcGx1Z2luczogW1xuICAgICAgdnVlKCksXG4gICAgICBlc2xpbnRQbHVnaW4oe1xuICAgICAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLmpzJywgJ3NyYy8qKi8qLnZ1ZScsICdzcmMvKi5qcycsICdzcmMvKi52dWUnXVxuICAgICAgfSlcbiAgICBdLFxuICAgIHJlc29sdmU6IHtcbiAgICAgIGFsaWFzOiB7XG4gICAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXG4gICAgICB9XG4gICAgfSxcbiAgICBidWlsZDoge1xuICAgICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3JvbGx1cC9yb2xsdXAvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3Nhbml0aXplRmlsZU5hbWUudHNcbiAgICAgICAgICBzYW5pdGl6ZUZpbGVOYW1lIChuYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IERSSVZFX0xFVFRFUl9SRUdFWC5leGVjKG5hbWUpXG4gICAgICAgICAgICBjb25zdCBkcml2ZUxldHRlciA9IG1hdGNoID8gbWF0Y2hbMF0gOiAnJ1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgZHJpdmVMZXR0ZXIgK1xuICAgICAgICAgICAgbmFtZS5zbGljZShkcml2ZUxldHRlci5sZW5ndGgpLnJlcGxhY2UoSU5WQUxJRF9DSEFSX1JFR0VYLCAnJylcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pXG59KVxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxob3RhaVxcXFxEZXNrdG9wXFxcXHZ1ZS10YWl3YW5zdHJlZXRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGhvdGFpXFxcXERlc2t0b3BcXFxcdnVlLXRhaXdhbnN0cmVldFxcXFxsb2FkRW52LmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ob3RhaS9EZXNrdG9wL3Z1ZS10YWl3YW5zdHJlZXQvbG9hZEVudi5qc1wiO2ltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBmcyBmcm9tICdmcydcblxuY29uc3QgZ2V0Q3VycmVudFRpbWVTdHJpbmcgPSAoKSA9PiB7XG4gIGNvbnN0IG5vdyA9IG5ldyBEYXRlKClcbiAgbGV0IGhvdXJzID0gbm93LmdldEhvdXJzKClcbiAgY29uc3QgbWludXRlcyA9IFN0cmluZyhub3cuZ2V0TWludXRlcygpKS5wYWRTdGFydCgyLCAnMCcpXG4gIGNvbnN0IHNlY29uZHMgPSBTdHJpbmcobm93LmdldFNlY29uZHMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICBjb25zdCBhbXBtID0gaG91cnMgPj0gMTIgPyAnXHU0RTBCXHU1MzQ4JyA6ICdcdTRFMEFcdTUzNDgnXG4gIGhvdXJzICU9IDEyXG4gIGhvdXJzID0gaG91cnMgfHwgMTJcbiAgY29uc3QgaG91cnNTdHIgPSBTdHJpbmcoaG91cnMpLnBhZFN0YXJ0KDIsICcwJylcbiAgcmV0dXJuIGAke2FtcG19JHtob3Vyc1N0cn06JHttaW51dGVzfToke3NlY29uZHN9YFxufVxuXG5jb25zdCBjdXN0b21Mb2cgPSAodGFnLCBtZXNzYWdlLCB0YWdDb2xvciA9ICdcXHgxYlszNm0nLCBtZXNzYWdlQ29sb3IgPSAnXFx4MWJbMzJtJykgPT4ge1xuICBjb25zdCB0aW1lU3RyaW5nID0gZ2V0Q3VycmVudFRpbWVTdHJpbmcoKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICBjb25zb2xlLmxvZyhgXFx4MWJbOTBtJXNcXHgxYlswbSAke3RhZ0NvbG9yfVxceDFiWzFtJXNcXHgxYlswbSAke21lc3NhZ2VDb2xvcn0lc1xceDFiWzBtYCwgdGltZVN0cmluZywgYFske3RhZ31dYCwgbWVzc2FnZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgKG1vZGUpID0+IHtcbiAgY29uc3QgYmFzZVBhdGggPSBwYXRoLnJlc29sdmUocHJvY2Vzcy5jd2QoKSwgJy5lbnYnKVxuICBjb25zdCBlbnZQYXRoID0gYCR7YmFzZVBhdGh9LiR7bW9kZX1gXG4gIGNvbnN0IGZpbmFsUGF0aCA9IGZzLmV4aXN0c1N5bmMoZW52UGF0aCkgPyBlbnZQYXRoIDogYmFzZVBhdGhcblxuICBjb25zdCBlbnZDb25maWcgPSBkb3RlbnYuY29uZmlnKHsgcGF0aDogZmluYWxQYXRoIH0pXG5cbiAgaWYgKGVudkNvbmZpZy5lcnJvcikge1xuICAgIGN1c3RvbUxvZygndml0ZScsICdcdTcxMjFcdTZDRDVcdThCODBcdTUzRDZcdTUyMzBcdTc0QjBcdTU4ODNcdThCOEFcdTY1NzgoRW52aXJvbm1lbnQgVmFyaWFibGVzKVx1NkE5NFx1Njg0OFx1MzAwMicpXG4gICAgY3VzdG9tTG9nKCd2aXRlJywgJ1x1OEFDQlx1NTcyOFx1N0Q0Mlx1N0FFRlx1NkE1Rlx1OEYzOFx1NTE2NVx1MzAwQ2NwIC5lbnYuZXhhbXBsZSAuZW52XHUzMDBEIFx1NUVGQVx1N0FDQlx1NzRCMFx1NTg4M1x1OEI4QVx1NjU3OFx1NkE5NFx1Njg0OFx1MzAwMicpXG4gICAgY3VzdG9tTG9nKCd2aXRlJywgJ1x1NzZFRVx1NTI0RFx1NTBDNVx1NjUyRlx1NjNGNCAuZW52XHUzMDAxLmVudi5kZXZlbG9wbWVudFx1MzAwMS5lbnYucHJvZHVjdGlvbiBcdTRFMDlcdTdBMkVcdTZBMjFc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

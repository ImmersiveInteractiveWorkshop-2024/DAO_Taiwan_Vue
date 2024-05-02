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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAibG9hZEVudi5qcyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXGhvdGFpXFxcXERlc2t0b3BcXFxcdnVlLXRhaXdhbnN0cmVldFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaG90YWlcXFxcRGVza3RvcFxcXFx2dWUtdGFpd2Fuc3RyZWV0XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9ob3RhaS9EZXNrdG9wL3Z1ZS10YWl3YW5zdHJlZXQvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBmaWxlVVJMVG9QYXRoLCBVUkwgfSBmcm9tICdub2RlOnVybCdcblxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB2dWUgZnJvbSAnQHZpdGVqcy9wbHVnaW4tdnVlJ1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzXG5pbXBvcnQgZXNsaW50UGx1Z2luIGZyb20gJ3ZpdGUtcGx1Z2luLWVzbGludCdcbmltcG9ydCBsb2FkRW52IGZyb20gJy4vbG9hZEVudidcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRyb2wtcmVnZXhcbmNvbnN0IElOVkFMSURfQ0hBUl9SRUdFWCA9IC9bXFx4MDAtXFx4MUZcXHg3Rjw+KiNcInt9fF5bXFxdYDs/OiY9KyQsXS9nXG5jb25zdCBEUklWRV9MRVRURVJfUkVHRVggPSAvXlthLXpdOi9pXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XG4gIFxuICBsb2FkRW52KG1vZGUpXG4gIHJldHVybiAoe1xuICAgIGJhc2U6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyBgLyR7cHJvY2Vzcy5lbnYuUkVQT1NJVE9SWV9OQU1FfS9gIDogJy8nLFxuICAgIHBsdWdpbnM6IFtcbiAgICAgIHZ1ZSgpLFxuICAgICAgZXNsaW50UGx1Z2luKHtcbiAgICAgICAgaW5jbHVkZTogWydzcmMvKiovKi5qcycsICdzcmMvKiovKi52dWUnLCAnc3JjLyouanMnLCAnc3JjLyoudnVlJ11cbiAgICAgIH0pXG4gICAgXSxcbiAgICByZXNvbHZlOiB7XG4gICAgICBhbGlhczoge1xuICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgICAgfVxuICAgIH0sXG4gICAgYnVpbGQ6IHtcbiAgICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgICAgb3V0cHV0OiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9yb2xsdXAvcm9sbHVwL2Jsb2IvbWFzdGVyL3NyYy91dGlscy9zYW5pdGl6ZUZpbGVOYW1lLnRzXG4gICAgICAgICAgc2FuaXRpemVGaWxlTmFtZSAobmFtZSkge1xuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBEUklWRV9MRVRURVJfUkVHRVguZXhlYyhuYW1lKVxuICAgICAgICAgICAgY29uc3QgZHJpdmVMZXR0ZXIgPSBtYXRjaCA/IG1hdGNoWzBdIDogJydcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIGRyaXZlTGV0dGVyICtcbiAgICAgICAgICAgIG5hbWUuc2xpY2UoZHJpdmVMZXR0ZXIubGVuZ3RoKS5yZXBsYWNlKElOVkFMSURfQ0hBUl9SRUdFWCwgJycpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KVxufSlcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcaG90YWlcXFxcRGVza3RvcFxcXFx2dWUtdGFpd2Fuc3RyZWV0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxob3RhaVxcXFxEZXNrdG9wXFxcXHZ1ZS10YWl3YW5zdHJlZXRcXFxcbG9hZEVudi5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvaG90YWkvRGVza3RvcC92dWUtdGFpd2Fuc3RyZWV0L2xvYWRFbnYuanNcIjtpbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5cbmNvbnN0IGdldEN1cnJlbnRUaW1lU3RyaW5nID0gKCkgPT4ge1xuICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpXG4gIGxldCBob3VycyA9IG5vdy5nZXRIb3VycygpXG4gIGNvbnN0IG1pbnV0ZXMgPSBTdHJpbmcobm93LmdldE1pbnV0ZXMoKSkucGFkU3RhcnQoMiwgJzAnKVxuICBjb25zdCBzZWNvbmRzID0gU3RyaW5nKG5vdy5nZXRTZWNvbmRzKCkpLnBhZFN0YXJ0KDIsICcwJylcbiAgY29uc3QgYW1wbSA9IGhvdXJzID49IDEyID8gJ1x1NEUwQlx1NTM0OCcgOiAnXHU0RTBBXHU1MzQ4J1xuICBob3VycyAlPSAxMlxuICBob3VycyA9IGhvdXJzIHx8IDEyXG4gIGNvbnN0IGhvdXJzU3RyID0gU3RyaW5nKGhvdXJzKS5wYWRTdGFydCgyLCAnMCcpXG4gIHJldHVybiBgJHthbXBtfSR7aG91cnNTdHJ9OiR7bWludXRlc306JHtzZWNvbmRzfWBcbn1cblxuY29uc3QgY3VzdG9tTG9nID0gKHRhZywgbWVzc2FnZSwgdGFnQ29sb3IgPSAnXFx4MWJbMzZtJywgbWVzc2FnZUNvbG9yID0gJ1xceDFiWzMybScpID0+IHtcbiAgY29uc3QgdGltZVN0cmluZyA9IGdldEN1cnJlbnRUaW1lU3RyaW5nKClcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgY29uc29sZS5sb2coYFxceDFiWzkwbSVzXFx4MWJbMG0gJHt0YWdDb2xvcn1cXHgxYlsxbSVzXFx4MWJbMG0gJHttZXNzYWdlQ29sb3J9JXNcXHgxYlswbWAsIHRpbWVTdHJpbmcsIGBbJHt0YWd9XWAsIG1lc3NhZ2UpXG59XG5cbmV4cG9ydCBkZWZhdWx0IChtb2RlKSA9PiB7XG4gIGNvbnN0IGJhc2VQYXRoID0gcGF0aC5yZXNvbHZlKHByb2Nlc3MuY3dkKCksICcuZW52JylcbiAgY29uc3QgZW52UGF0aCA9IGAke2Jhc2VQYXRofS4ke21vZGV9YFxuICBjb25zdCBmaW5hbFBhdGggPSBmcy5leGlzdHNTeW5jKGVudlBhdGgpID8gZW52UGF0aCA6IGJhc2VQYXRoXG5cbiAgY29uc3QgZW52Q29uZmlnID0gZG90ZW52LmNvbmZpZyh7IHBhdGg6IGZpbmFsUGF0aCB9KVxuXG4gIGlmIChlbnZDb25maWcuZXJyb3IpIHtcbiAgICBjdXN0b21Mb2coJ3ZpdGUnLCAnXHU3MTIxXHU2Q0Q1XHU4QjgwXHU1M0Q2XHU1MjMwXHU3NEIwXHU1ODgzXHU4QjhBXHU2NTc4KEVudmlyb25tZW50IFZhcmlhYmxlcylcdTZBOTRcdTY4NDhcdTMwMDInKVxuICAgIGN1c3RvbUxvZygndml0ZScsICdcdThBQ0JcdTU3MjhcdTdENDJcdTdBRUZcdTZBNUZcdThGMzhcdTUxNjVcdTMwMENjcCAuZW52LmV4YW1wbGUgLmVudlx1MzAwRCBcdTVFRkFcdTdBQ0JcdTc0QjBcdTU4ODNcdThCOEFcdTY1NzhcdTZBOTRcdTY4NDhcdTMwMDInKVxuICAgIGN1c3RvbUxvZygndml0ZScsICdcdTc2RUVcdTUyNERcdTUwQzVcdTY1MkZcdTYzRjQgLmVudlx1MzAwMS5lbnYuZGV2ZWxvcG1lbnRcdTMwMDEuZW52LnByb2R1Y3Rpb24gXHU0RTA5XHU3QTJFXHU2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

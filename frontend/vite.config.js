import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 前端开发服务器端口，浏览器访问 http://localhost:5173
    // 代理：前端发往 /api 的请求会被转发到后端，这样前端不用写死 localhost:3000，也避免跨域
    proxy: {
      "/api": {
        target: "http://localhost:3000", // 后端地址，必须和后端 npm start 跑起来的端口一致
        changeOrigin: true,
      },
    },
  },
});

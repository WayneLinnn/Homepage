// ========== 后端入口：Node.js + Express ==========
// 本文件是后端“服务器”的入口。运行 node server.js 后，会监听一个端口（默认 3000），
// 等待前端或别的客户端发 HTTP 请求，然后根据路径（如 /api/health、/api/contact）返回数据。

const express = require("express");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
// 端口：本地开发用 3000；部署到 Railway 等平台时，平台会通过环境变量 PORT 注入端口
const PORT = process.env.PORT || 3000;

// ---------- 中间件：所有请求都会先经过这里 ----------
// CORS：浏览器的同源策略会阻止“前端(5173)”直接请求“后端(3000)”。后端必须声明“允许哪个来源”。
// 开发时用 * 允许任意来源；上线后应改为你的前端域名，例如 https://xxx.vercel.app
const corsOptions = {
  origin: process.env.CORS_ORIGIN || "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
// express.json()：把请求体里 Content-Type: application/json 的数据解析成 req.body 对象
app.use(express.json());

// 限流：同一 IP 在 15 分钟内最多请求 10 次，防止联系表单被刷
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: { success: false, message: "请求过于频繁，请稍后再试。" },
});

// ---------- 路由：根据 URL 路径和方法决定做什么 ----------

// GET /api/health：健康检查。部署后平台或监控会定期请求这个地址，确认服务还活着
app.get("/api/health", (req, res) => {
  res.json({ ok: true, timestamp: new Date().toISOString() });
});

// POST /api/contact：联系表单提交。先经过 contactLimiter 限流，再执行下面的回调
app.post("/api/contact", contactLimiter, (req, res) => {
  // req.body 是前端 fetch 里 body: JSON.stringify(form) 发过来的，已被 express.json() 解析成对象
  const { name, email, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "请填写姓名、邮箱和留言内容。",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: "邮箱格式不正确。",
    });
  }

  // 把留言追加到 backend/data/contact.json（可后续改为发邮件到你的邮箱）
  const logDir = path.join(__dirname, "data");
  if (!fs.existsSync(logDir)) fs.mkdirSync(logDir, { recursive: true });
  const logFile = path.join(logDir, "contact.json");
  const entry = {
    name: String(name).slice(0, 100),
    email: String(email).slice(0, 200),
    message: String(message).slice(0, 2000),
    createdAt: new Date().toISOString(),
  };
  let list = [];
  try {
    const raw = fs.readFileSync(logFile, "utf8");
    list = JSON.parse(raw);
  } catch {
    list = [];
  }
  list.push(entry);
  fs.writeFileSync(logFile, JSON.stringify(list, null, 2), "utf8");

  res.status(200).json({ success: true, message: "已收到您的留言，感谢！" });
});

// 启动 HTTP 服务器，监听 PORT。这就是“localhost:3000”的来源
app.listen(PORT, () => {
  console.log(`API 运行在 http://localhost:${PORT}`);
});

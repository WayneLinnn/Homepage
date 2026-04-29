# Wayne Lin 个人主页

React 前端 + Node.js 后端个人主页项目，含开发与部署说明。

## 技术栈

- **前端**：React 18、Vite 5、React Router 6
- **后端**：Node.js、Express、CORS、express-rate-limit
- **部署建议**：前端 Vercel，后端 Railway（或自建服务器）

## 本地开发

### 1. 环境要求

- Node.js 18+（建议 LTS）
- 验证：`node -v`、`npm -v`

### 2. 安装依赖

```bash
# 前端
cd frontend
npm install

# 后端（新开一个终端）
cd backend
npm install
```

### 3. 启动

**终端一 - 后端：**

```bash
cd backend
npm start
```

后端地址：http://localhost:3000

**终端二 - 前端：**

```bash
cd frontend
npm run dev
```

前端地址：http://localhost:5173

前端会通过 Vite 代理把 `/api` 请求转发到 `http://localhost:3000`，无需配置环境变量即可联调。

### 4. 功能说明

- **首页**：Hero 简介 + 入口
- **关于**：个人简介与技能
- **项目**：经历、作品项目蓝图与项目卡片
- **简历**：PDF 查看/下载（需将 PDF 放到 `frontend/public/resume.pdf`）
- **联系**：表单提交到后端 `/api/contact`，后端将留言写入 `backend/data/contact.json`
- **Career Toolkit**：集中展示 LinkedIn 文案、两版简历定位、目标岗位、学习路线与 3 个月计划

## 部署

### 方案 A：Vercel（前端）+ Railway（后端）

1. **后端部署到 Railway**
   - 在 [Railway](https://railway.app) 新建项目，连接本仓库
   - 根目录选 `backend`，启动命令：`npm start`
   - 在 Variables 中可设 `PORT`（Railway 会注入）、`CORS_ORIGIN` 为你的前端域名
   - 部署后得到后端 URL，例如 `https://xxx.railway.app`

2. **前端部署到 Vercel**
   - 在 [Vercel](https://vercel.com) 新建项目，连接同一仓库
   - 根目录选 `frontend`，构建命令：`npm run build`，输出目录：`dist`
   - 在 Environment Variables 中设置：`VITE_API_URL=https://xxx.railway.app`（你的后端 URL）
   - 部署后得到前端 URL

3. **后端 CORS**
   - 在 Railway 的 `CORS_ORIGIN` 中填写 Vercel 给你的前端域名，例如 `https://your-project.vercel.app`

### 方案 B：自建服务器（Nginx + Node）

1. 服务器安装 Node.js 和 Nginx
2. 前端：在项目里执行 `cd frontend && npm run build`，将 `frontend/dist` 内容放到 Nginx 的静态目录，或由 Nginx 反代前端开发服务器（不推荐生产）
3. 后端：用 PM2 运行 `cd backend && node server.js`，Nginx 反代 `http://127.0.0.1:3000`
4. 前端环境变量 `VITE_API_URL` 设为后端对外的完整 URL；后端 `CORS_ORIGIN` 设为前端域名

### 上线后检查

- 打开前端 URL，逐页检查首页、关于、项目、简历、联系
- 提交一次联系表单，确认后端收到（可看 Railway 日志或 `backend/data/contact.json`）
- 浏览器控制台无 CORS 报错、网络无 404

## 项目结构

```
.
├── frontend/          # React + Vite
│   ├── public/        # 静态资源，可将 resume.pdf 放这里
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── backend/           # Node.js + Express
│   ├── server.js      # 入口：健康检查 + 联系表单
│   ├── data/          # 联系表单写入的 contact.json（自动创建）
│   ├── .env.example
│   └── package.json
├── career-assets/     # 求职素材：LinkedIn、简历、投递与学习路线
├── portfolio-projects/# 两个高 ROI 作品项目的蓝图说明
├── 个人主页开发与部署指南.md   # 详细开发与选型说明
└── README.md          # 本文件
```

## 简历 PDF

- 将你的简历 PDF 放在 **`frontend/public/full-stack-ai-developer-feng-lin-2026.pdf`**，站点中的「View Résumé」与简历页会链接到该文件
- 若使用 `Wayne-Lin-Resume.tex`，在 Overleaf 或本地用 pdfLaTeX 编译后，将输出重命名/复制为 `frontend/public/full-stack-ai-developer-feng-lin-2026.pdf`

## 更多说明

详细的技术选型、分步计划与安全建议见 [个人主页开发与部署指南.md](./个人主页开发与部署指南.md)。

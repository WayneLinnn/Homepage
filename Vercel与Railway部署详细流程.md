# Vercel + Railway 部署详细流程

按顺序做完下面几步，你的个人主页就能被所有人访问，联系表单也会正常提交到后端。

---

## 前置条件

1. **代码已在 GitHub 上**
   - 把当前项目（含 `frontend` 和 `backend` 两个文件夹）推到一个 GitHub 仓库。
   - 若还没做：在项目根目录执行 `git init`，在 GitHub 上新建仓库，然后 `git remote add origin <仓库地址>`，再 `git add .`、`git commit`、`git push`。

2. **项目结构确认**
   - 仓库根目录下要有：`frontend/`（React + Vite）、`backend/`（Node + Express）。
   - 前端构建：在 `frontend` 里执行 `npm run build` 会生成 `frontend/dist`。
   - 后端启动：在 `backend` 里执行 `npm start` 会运行 `node server.js`。

下面先部署**后端**（Railway），拿到地址后再部署**前端**（Vercel），最后把两边的环境变量互相填好。

---

## 第一部分：把后端部署到 Railway

### 1. 注册 / 登录 Railway

- 打开：https://railway.app
- 点击 **Login**，选择 **Login with GitHub**，按提示授权。
- 登录后会进入 Railway 的 Dashboard（项目列表）。

### 2. 用 GitHub 仓库创建项目

- 点击 **New Project**。
- 选择 **Deploy from GitHub repo**（或 **Deploy from GitHub**）。
- 若首次使用，会提示连接 GitHub 账号或授权 Railway 访问仓库，按提示完成。
- 在仓库列表里选中你的**个人主页仓库**（例如 `feng-s-webpage` 或你起的名字），点选后确认。

### 3. 指定后端目录和启动方式

Railway 会克隆整个仓库，默认可能从**仓库根目录**找 `package.json` 并执行 `npm start`。你的后端在 `backend` 里，需要让 Railway 只使用 `backend` 目录：

- 在刚创建的项目里，会有一个 **Service**（可能叫你的仓库名）。点进这个 Service。
- 找到 **Settings** 或 **Configuration** 相关区域。
- 查找 **Root Directory**、**Source Directory** 或 **Monorepo** 设置：
  - 若有 **Root Directory**：填 `backend`（不要带前导斜杠）。
  - 若没有 Root Directory，但有 **Build Command**：可在 Build Command 里写 `cd backend && npm install`，Start Command 写 `cd backend && node server.js`（具体以 Railway 当前界面为准）。
- **Start Command**（或 **Run**）：若是单独填的，填 `node server.js` 或 `npm start`（因为此时工作目录应已是 `backend`）。
- 保存设置。

### 4. 添加环境变量（CORS）

- 在同一 Service 的 **Variables** 标签页（或 **Environment**）里，添加变量：
  - **Name**：`CORS_ORIGIN`
  - **Value**：先填 `*`（允许任意来源），部署成功、拿到前端地址后再改（见下文「第三部分」）。
- 若你的后端用到了 `PORT`，一般不用自己设，Railway 会注入。

### 5. 部署并拿到后端公网地址

- 保存后 Railway 会自动开始部署（或点 **Deploy**）。
- 部署成功后，在 Service 的 **Settings** 或 **Networking** 里找到 **Generate Domain** 或 **Public Networking**，给该服务**生成一个公网域名**（例如 `xxx.railway.app`）。
- **复制这个地址**（例如 `https://wayne-lin-api.railway.app`），后面一步在 Vercel 里要用。注意用 **https** 且**不要**在末尾加斜杠。

---

## 第二部分：把前端部署到 Vercel

### 1. 注册 / 登录 Vercel

- 打开：https://vercel.com
- 点击 **Sign Up** 或 **Login**，选择 **Continue with GitHub**，按提示授权。
- 登录后进入 Vercel 的 Dashboard。

### 2. 从 GitHub 导入项目

- 点击 **Add New…** → **Project**（或 **Import Project**）。
- 在列表里选择**同一个**个人主页仓库（和 Railway 用的是一个仓库）。
- 点击 **Import** 进入配置页。

### 3. 配置构建（重要：根目录选 frontend）

在 **Configure Project** 页面：

- **Framework Preset**：选 **Vite**（或留空，Vercel 会根据 `frontend` 里的配置识别）。
- **Root Directory**：点击 **Edit**，把默认的 `./` 改成 **`frontend`**。这样 Vercel 只会在 `frontend` 里执行构建，不会在仓库根目录找 `package.json`。
- **Build Command**：留空或填 `npm run build`（在 `frontend` 下执行）。
- **Output Directory**：留空或填 `dist`（Vite 默认输出到 `dist`）。
- **Install Command**：留空即用 `npm install`。

### 4. 添加环境变量（后端地址）

- 在同一个配置页下方，找到 **Environment Variables**。
- 添加一条：
  - **Name**：`VITE_API_URL`
  - **Value**：填你在 Railway 拿到的后端地址，例如 `https://wayne-lin-api.railway.app`（**不要**在末尾加 `/`）。
- **Environment**：三个都勾选（Production、Preview、Development）即可。
- 然后点击 **Deploy**，等待构建和部署完成。

### 5. 拿到前端访问地址

- 部署成功后，Vercel 会给你一个地址，形如：`https://你的项目名.vercel.app`。
- 用浏览器打开这个地址，检查：首页、About、Experience、Projects、Contact、简历 PDF 链接、会议论文 PDF 链接是否都正常。
- **联系表单**：在 Contact 页填姓名、邮箱、留言点 Send。若之前 CORS 在 Railway 里还是 `*`，一般能成功；若失败，看下一部分。

---

## 第三部分：前后端联调（CORS 与重部署）

### 1. 把前端的真实地址填到 Railway

- 回到 **Railway**，打开你的后端 Service。
- 进入 **Variables**，把 `CORS_ORIGIN` 从 `*` 改成你的 **Vercel 地址**，例如：  
  `https://你的项目名.vercel.app`  
  （不要末尾斜杠；若用了自定义域名，就填自定义域名。）
- 保存后 Railway 会重新部署一次。

### 2. 再次测试联系表单

- 打开你的 Vercel 前端地址，进入 Contact 页，再提交一次表单。
- 应显示成功提示；若有错误，打开浏览器 **开发者工具 → Network**，看请求是否发到 Railway 的 URL、响应状态码和报错信息。
- 后端留言会写在 Railway 的运行环境里（你当前是写文件到 `data/contact.json`，在无持久化磁盘时可能重启后丢失，但功能上可以验证；若要长期保存可后续改用数据库或邮件）。

---

## 第四部分：可选操作

### 自定义域名（Vercel）

- 在 Vercel 项目里点 **Settings → Domains**，添加你的域名（例如 `www.waynelin.com`）。
- 按页面提示在域名服务商处添加 CNAME 或 A 记录，验证通过后即可用自定义域名访问前端。
- 若改用自定义域名，记得把 Railway 的 `CORS_ORIGIN` 改成该域名（或同时保留 `xxx.vercel.app` 和自定义域名，若后端支持多个 origin 可逗号分隔，你当前是单值，就填主用的那个）。

### 自定义域名（Railway）

- Railway 也支持给服务绑定自己的域名，在 Service 的 **Settings → Networking/Domains** 里添加。
- 若你给后端绑了域名，需要回到 Vercel，把前端的 **Environment Variables** 里 `VITE_API_URL` 改成后端的新域名，然后重新部署一次前端（**Redeploy**）。

### 查看日志（排查问题）

- **Railway**：在 Service 里打开 **Deployments**，点进某次部署，可看 **Logs**（后端 `console.log` 和错误）。
- **Vercel**：在项目里打开 **Deployments**，点进某次部署，可看 **Building** 和 **Runtime** 日志（前端构建错误会在这里）。

---

## 流程小结（顺序别反）

| 顺序 | 平台    | 做什么                                                                                                                                   |
| ---- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| 1    | Railway | 用 GitHub 仓库创建项目，根目录设为 `backend`，启动 `node server.js`，设 `CORS_ORIGIN=*`，生成公网域名，**复制后端 URL**                  |
| 2    | Vercel  | 用同一仓库导入项目，根目录设为 `frontend`，构建 `npm run build`，输出 `dist`，环境变量 `VITE_API_URL=<后端 URL>`，部署，**复制前端 URL** |
| 3    | Railway | 把 `CORS_ORIGIN` 改为前端 URL（`https://xxx.vercel.app`），保存并等待重新部署                                                            |
| 4    | 浏览器  | 访问前端 URL，测一遍页面和联系表单                                                                                                       |

按这个顺序做，一般就能在 Vercel 上看到完整网站，在 Railway 上跑着后端，表单也能正常提交。若某一步的界面和上面描述不一致（例如 Railway 的 Root Directory 位置变了），以当前界面为准，核心只有三点：**后端只跑 `backend` 目录**、**前端只构建 `frontend` 目录**、**前端请求的 API 地址和 CORS 允许的域名一致**。

# 为什么需要 npm install 和 npm run dev？

---

## 一、电脑里已经有 npm 了，为什么还要执行 npm install？

**npm 本身** 和 **这个项目用到的库** 是两回事。

| 是什么                                    | 在哪                                     | 作用                                                                                                               |
| ----------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **npm**                                   | 你电脑里（装 Node.js 时一起装的）        | 一个“包管理工具”，用来**下载、安装**别人写好的代码（React、Vite 等）。`npm --version` 能看出版本，说明这个工具在。 |
| **项目依赖**（React、Vite、react-dom 等） | 在**每个项目的 `node_modules` 文件夹**里 | 你的前端代码**真正运行**时要用到这些库。它们**不会**因为你装了 Node/npm 就自动出现在项目里。                       |

也就是说：

- **npm** = 安装工具（你已经有了）
- **npm install** = 用这个工具，**按当前项目 `package.json` 的列表，把 React、Vite 等下载到当前项目的 `node_modules` 里**

所以：

- 不执行 `npm install`：项目目录下**没有** `node_modules`，没有 React、Vite 等，`npm run dev` 会报错（找不到模块）。
- 执行过 `npm install`：项目里才有 React、Vite 等，`npm run dev` 才能正常启动。

**类比**：npm 像“应用商店”，`npm install` 是“在这个项目里安装这个应用（React、Vite 等）”。电脑里有应用商店，不代表每个项目里都已经装好了要用的应用。

---

## 二、npm run dev 是干什么的？不 run 为什么直接打开 localhost 看不到？

### 1. npm run dev 在做什么？

执行 `npm run dev` 时，实际跑的是 `package.json` 里写的：

```json
"scripts": { "dev": "vite" }
```

也就是启动 **Vite 开发服务器**。它会做几件事：

1. **在本地开一个“网站服务”**，监听 **5173 端口**。  
   只有这个进程在跑，别人（包括浏览器）访问 `http://localhost:5173` 时，才有程序响应。
2. **按需编译你的代码**：
   - 浏览器不能直接执行 `import React from "react"`、JSX 等，Vite 会把这些转成浏览器能执行的 JavaScript，并在你访问时按需提供。
3. **把“路径”对上**：
   - `index.html` 里写的是 `<script src="/src/main.jsx">`。
   - 只有通过 **开发服务器** 访问（如 `http://localhost:5173`）时，`/src/main.jsx` 才会被 Vite 正确处理成“入口文件”；
   - 如果直接双击打开 `index.html`（file://），浏览器会把 `/src/main.jsx` 当成“根目录下的路径”，要么找不到文件，要么不会做编译，页面就不会正常显示。

所以：**npm run dev = 启动“本地网站服务 + 编译入口”，让你能用 http://localhost:5173 看到页面。**

### 2. 不 run，直接“查看 localhost”为什么看不到？

因为 **不 run 就根本没有服务在 5173 端口上**。

- **localhost** 表示“本机”。
- 浏览器访问 `http://localhost:5173` 时，是在向“本机 5173 端口上正在运行的程序”发请求。
- 你没执行 `npm run dev` → 没有 Vite 在监听 5173 → 没有程序响应 → 浏览器会显示“无法访问此网站”或“连接被拒绝”。

所以：**不是“不 run 也能打开 localhost 但看不到内容”，而是“不 run 的话，localhost:5173 上根本没有服务，连页面都打不开”。**

### 3. 能不能不 run，直接双击 index.html 看？

不行，原因有两个：

1. **没有编译**：  
   你的代码是 JSX、`import` 等，浏览器不会处理这些。必须有一个“构建/开发”步骤（Vite 在做）把代码转成浏览器能执行的 JS。  
   不 run = 没有 Vite = 没有这一步，页面要么空白要么报错。

2. **路径和协议**：  
   用 `file://` 打开 index.html 时，脚本路径 `/src/main.jsx` 在多数环境下会出问题，而且没有服务器就不会有“按需编译、正确提供打包结果”这一套，所以无法像在 localhost:5173 上那样正常显示。

---

## 三、总结成两句话

1. **为什么要 npm install？**  
   电脑里的 **npm** 只是工具；**React、Vite 等要装进这个项目**，必须在这个项目里执行一次 `npm install`，项目里才会有 `node_modules`，后续才能 `npm run dev`。

2. **为什么要 npm run dev？**  
   它**启动本地的开发服务器**（Vite），在 5173 端口提供页面，并**把 JSX/模块编译成浏览器能跑的形式**。不 run，就没有服务在 5173，也没有人帮你编译，所以直接打开 localhost 看不到、直接打开 index.html 也看不到正常页面。

**正确查看主页的方式**：在 `frontend` 目录先 `npm install`（首次），再 `npm run dev`，然后用浏览器打开 **http://localhost:5173**。

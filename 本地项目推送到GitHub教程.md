# 把本地项目保存到 GitHub：完整教程

按下面步骤，可以把当前电脑上的「个人主页」项目完整、安全地推到 GitHub，之后再用 Vercel / Railway 从该仓库部署。

---

## 一、前置准备

### 1. 安装 Git（若尚未安装）

- **Windows**：到 https://git-scm.com/download/win 下载安装包，按默认选项安装。安装后可在「开始」里打开 **Git Bash** 或 **CMD**，执行 `git --version` 能看见版本号即表示成功。
- **macOS**：在终端执行 `git --version`；若没有，会提示安装 Xcode Command Line Tools，按提示安装即可。

### 2. 注册 GitHub 账号并登录

- 打开 https://github.com ，若没有账号则 **Sign up**，若有则 **Sign in**。
- 建议开启**两步验证**（Settings → Password and authentication）提高安全性。

### 3. 本机与 GitHub 的认证方式（二选一）

推送代码时 GitHub 需要确认「是你本人」。常用两种方式：

- **HTTPS + 个人访问令牌（推荐）**
  - 推送时用 `https://github.com/用户名/仓库名.git`。
  - 密码处不再用登录密码，而是用 **Personal Access Token**：GitHub 网页 → Settings → Developer settings → Personal access tokens → Generate new token，勾选 **repo** 权限，生成后复制保存（只显示一次）。
  - 第一次 `git push` 时，用户名填 GitHub 用户名，密码处粘贴这个 Token。

- **SSH 密钥**
  - 本机生成密钥：`ssh-keygen -t ed25519 -C "你的邮箱"`（一路回车即可）。
  - 把公钥加到 GitHub：GitHub → Settings → SSH and GPG keys → New SSH key，把 `~/.ssh/id_ed25519.pub` 里的内容粘贴进去。
  - 之后用 `git@github.com:用户名/仓库名.git` 作为远程地址，推送时不再输密码。

下面步骤里用 **HTTPS** 举例；若你用 SSH，把「仓库地址」换成 SSH 形式即可。

---

## 二、在 GitHub 上新建仓库（空仓库）

1. 登录 GitHub，右上角 **+** → **New repository**。
2. **Repository name**：填英文，例如 `wayne-lin-homepage` 或 `feng-webpage`（不要空格，可用连字符）。
3. **Description**：可选，例如 `Personal portfolio site (React + Node.js)`。
4. **Public**：选 Public，这样 Vercel / Railway 才能免费连接。
5. **不要**勾选 "Add a README file"、"Add .gitignore"、"Choose a license"——保持仓库**完全空白**，方便后面用本地已有内容推送。
6. 点击 **Create repository**。
7. 创建完成后，页面上会显示仓库地址，形如：  
   `https://github.com/你的用户名/wayne-lin-homepage.git`  
   **复制这个地址**，下一步会用到。

---

## 三、在本地初始化 Git 并推送到 GitHub

以下命令在**项目根目录**执行（即包含 `frontend`、`backend` 文件夹的那一层）。  
在 Windows 可用 **Git Bash** 或 **CMD**；在 macOS/Linux 用**终端**。先进入项目目录，例如：

```bash
cd "c:\Users\LF\Desktop\feng's webpage"
```

（路径按你实际存放位置改；路径里有空格或中文要用英文双引号包起来。）

### 步骤 1：检查是否已有 Git 仓库

执行：

```bash
git status
```

- 若提示 `fatal: not a git repository`，说明当前目录还不是 Git 仓库，继续下面的「步骤 2」。
- 若已经显示文件列表（或 "nothing to commit"），说明已有 `.git`，可跳到「步骤 3」或「步骤 4」。

### 步骤 2：初始化仓库（仅当没有 .git 时）

```bash
git init
```

会生成隐藏文件夹 `.git`，表示当前目录是一个 Git 仓库。

### 步骤 3：添加要提交的文件

```bash
git add .
```

表示把当前目录下**所有未忽略的文件**加入暂存区。  
项目里已有 `.gitignore`（根目录、frontend、backend 下都有），会自动排除 `node_modules`、`dist`、`.env` 等，不会把它们提交上去。

若要先看哪些会被加入，可执行：

```bash
git status
```

绿色或 "Changes to be committed" 下的就是即将提交的。

### 步骤 4：第一次提交（commit）

```bash
git commit -m "Initial commit: React frontend + Node backend, resume and docs"
```

`-m` 后面是本次提交的说明，可以按你喜好改成一两句话。  
这样就在本地生成了**第一个提交**。

### 步骤 5：把本地仓库和 GitHub 远程仓库关联

把下面地址换成你在「二」里复制的仓库地址：

```bash
git remote add origin https://github.com/你的用户名/wayne-lin-homepage.git
```

若提示 `origin already exists`，可先删除再加：

```bash
git remote remove origin
git remote add origin https://github.com/你的用户名/wayne-lin-homepage.git
```

### 步骤 6：推送到 GitHub

当前 GitHub 默认主分支叫 `main`。若你本地是 `master`，可先改名为 `main`（与 GitHub 一致）：

```bash
git branch -M main
```

然后执行推送：

```bash
git push -u origin main
```

- 第一次推送会提示输入 GitHub 用户名和密码；**密码处填 Personal Access Token**（若用 HTTPS）。
- 成功后，刷新 GitHub 仓库页面，应能看到所有已提交的文件和文件夹。

之后若本地有修改，只需：

```bash
git add .
git commit -m "简短说明你改了什么"
git push
```

---

## 四、注意事项（专业习惯）

### 1. 不要提交敏感信息

- **不要**把 `.env`、`.env.local` 或任何含密码、API Key 的文件提交上去。
- 项目里已通过 `.gitignore` 排除了 `.env`；若你新建了带密钥的文件，确保文件名或路径在 `.gitignore` 里。

### 2. 大文件与二进制文件

- `frontend/public/full-stack-ai-developer-feng-lin-2026.pdf`、`frontend/public/COMP7860_conference_paper (1).pdf` 若在项目里，会被提交；Git 适合代码和小文件，若以后仓库体积变大，可考虑用 Git LFS 或把大文件放到网盘、只在页面上放链接。
- 根目录下若有重复的 PDF（和 public 里一样），可考虑只保留 public 里一份，避免仓库重复变大。

### 3. 提交信息写清楚

- 每次 `git commit -m "..."` 建议写一句**有信息量**的话，例如："Add contact form rate limit"、"Fix CORS for Vercel domain"，方便以后回溯和协作。

### 4. 推送前先拉取（多人或换电脑时）

若你在多台电脑或和别人协作，修改前先执行：

```bash
git pull origin main
```

再 `git add`、`commit`、`push`，减少冲突。

---

## 五、常用命令速查

| 操作          | 命令                                           |
| ------------- | ---------------------------------------------- |
| 查看状态      | `git status`                                   |
| 添加所有修改  | `git add .`                                    |
| 提交          | `git commit -m "说明"`                         |
| 推送到 GitHub | `git push`（首次用 `git push -u origin main`） |
| 查看远程地址  | `git remote -v`                                |
| 拉取最新代码  | `git pull origin main`                         |

---

## 六、若推送时报错

- **"failed to push some refs" / "Updates were rejected"**  
  多半是 GitHub 上已有提交（例如建仓时勾了 README），本地没有。先执行：  
  `git pull origin main --rebase`  
  再 `git push`。

- **"Authentication failed" / "Support for password authentication was removed"**  
  GitHub 已不支持用账号密码推送，必须用 **Personal Access Token**（HTTPS）或 **SSH 密钥**，见「一、3」。

- **"could not read Username"**  
  远程地址不对或没配置凭证。用 `git remote -v` 看 origin 地址；HTTPS 地址应是 `https://github.com/用户名/仓库名.git`。

按上述顺序做一遍，你的本地项目就会完整出现在 GitHub 上，之后就可以按《Vercel与Railway部署详细流程》从该仓库部署。

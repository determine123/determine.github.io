# determine · 个人学术主页

这是一个基于 Jekyll 的个人学术主页，视觉结构参考 `acad-homepage` / Academic Pages 风格，但内容已替换为 determine 的个人经历。

## GitHub Pages 部署

1. 直接使用现有仓库 `determine123/determine.github.io` 即可。由于仓库名不是 `determine123.github.io`，它会以 GitHub Pages 项目站点形式发布。
2. 将本目录中的全部文件上传到仓库根目录，或执行：

```bash
git init
git add .
git commit -m "build determine academic homepage"
git branch -M main
git remote add origin https://github.com/determine123/determine.github.io.git
git push -u origin main
```

3. `_config.yml` 已按 `determine.github.io` 项目站点配置，`baseurl` 是 `/determine.github.io`。
4. GitHub 仓库进入 **Settings → Pages**，在 **Build and deployment** 中选择 **Deploy from a branch**，分支选择 `main`，目录选择 `/ (root)`，保存。
5. 等待 Actions 构建完成，访问 `https://determine123.github.io/determine.github.io/`。

## 本地预览（可选）

GitHub Pages 会在推送后自动构建，本地不运行也不影响部署。若想预览：

```bash
bundle install
bundle exec jekyll serve
```

然后打开 `http://localhost:4000`。

注意：不要添加 `.nojekyll`，否则会绕过 Jekyll 构建。

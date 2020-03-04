# Electron+React 项目脚手架

- 通过create-react-app初始化项目

```
yarn create react-app electron-react
```
- react的webpack等配置（不使用 eject）

```
yarn add customize-cra react-app-rewired --dev
yarn add antd-dayjs-webpack-plugin --dev
yarn add webpack-bundle-analyzer --dev
**配置在config-overrides.js文件里面**
```

- 配置Electron

```
yarn add electron@latest --save-dev
yarn add electron-is-dev --save-dev
```
- 多个命令执行

```
yarn add concurrently --save-dev
```

- 等待资源准备好之后启动Electron

```
yarn add wait-on --save-dev
```

- cross-env 配置react项目默认不打开浏览器页面

```
yarn add cross-env --save-dev

# 配置 cross-env BROWSER=none
```

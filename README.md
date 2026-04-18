# 侧卫型号识别助手
一个基于选择题决策树的侧卫（Flanker）系列战机型号识别工具。通过回答一系列关于外观特征的简单问题，即可判断具体型号。

## 功能特点
- 纯静态网页，无需后端，双击即可运行（推荐使用本地HTTP服务器以正常加载图片）
- 覆盖侧卫家族主要型号，包括苏-27、苏-30、苏-33、苏-34、苏-35、歼-11、歼-15、歼-16 等及其衍生型
- 若干问题配有文字提示或示意图
- 清晰的结果展示，包含型号名称和简要描述
- 支持随时重新开始，返回介绍页

## 快速开始
### 方法一：直接打开（功能可用，图片可能无法加载）
1. 下载或克隆本项目到本地
2. 双击 index.html 文件，用浏览器打开
3. 开始使用
#### 注意：由于浏览器安全限制，直接双击打开时本地图片可能无法显示，但不影响选择题逻辑。

### 方法二：使用本地HTTP服务器（推荐，图片正常显示）
1. 使用 VS Code 的 Live Server 插件
2. 安装 Visual Studio Code
3. 安装 Live Server 扩展（作者：Ritwick Dey）
4. 用 VS Code 打开项目文件夹
5. 右键点击 index.html，选择 Open with Live Server

## 自定义与扩展

### 修改决策树
所有问题和分支定义在 script.js 中的 decisionTree 和 branches 对象内。
#### 节点结构
```javascript
{
    question: "问题文本",
    hint: "提示文本，可包含HTML <br> <img src='images/example.png' width='200'>",
    options: [
        {text: "[选项一]", next: "next_node_key"},
        {text: "[选项二]", result: {name: "型号名称", desc: "型号描述"}}
    ]
}
```
- next：指向 branches 中的下一个节点键名
- result：直接输出结果，包含 name 和 desc 字段

### 添加新分支
1. 在 branches 对象中添加新的节点键值对
2. 确保 next 字段与节点键名严格一致（区分大小写）

### 添加或更换图片
1. 将图片放入 images 文件夹
2. 在对应节点的 hint 中引用：`<img src='images/你的文件名.jpg' width='200'>`
3. 注意文件名大小写必须与实际文件一致

## 修改介绍页
介绍页内容定义在 introNode 对象中：
```javascript
const introNode = {
    question: "侧卫家族识别助手",
    hint: `介绍文本，支持HTML`,
    isIntro: true
};
```
## 技术栈
- HTML5
- CSS3
- 原生 JavaScript (ES6)

## 浏览器兼容性
支持所有现代浏览器（Chrome、Firefox、Edge、Safari 等）。

## 鸣谢
- 侧卫家族外观特征资料整理自公开军事资料及爱好者社区
- 项目灵感来源于贴吧天燕90翻译的侧卫决策树
- ~~地铺鞋客Johnny~~DeepSeek in April

## 许可证
本项目仅供学习与交流使用，请勿用于商业用途。图片资源版权归原作者所有。

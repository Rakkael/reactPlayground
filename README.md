### git 上的 issues
https://github.com/remix-run/history/issues/505
<br>
https://github.com/remix-run/history/pull/656
<br>
https://github.com/remix-run/history/issues/689

### react-router v5 文档
https://v5.reactrouter.com/web/example/url-params

拉取后 `yarn install` 就可以跑 demo 了。

### 期望解决
1. url 参数送入 %25%3D，要如何解码？

### 最终解决方案
参考：
https://github.com/remix-run/history/issues/505#issuecomment-462328076

安装 patch-package 依赖，修改 node_modules 中的 history 源码。

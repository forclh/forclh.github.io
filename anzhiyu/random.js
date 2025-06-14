var posts=["2025/06/14/百度智能云DNS解析/","2025/06/13/hello-world/","2025/06/14/学习笔记/前端/Vue/【Vue2】数据响应原理/","2025/06/14/学习笔记/前端/网络/HTTP个版本差异/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
var posts=["2024/09/25/hello-world/","2024/10/05/截图工具/","2024/09/26/简单文件压缩器/","2024/10/06/一个简单的游戏Demo/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };
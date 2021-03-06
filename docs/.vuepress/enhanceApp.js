

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
  options, // 附加到根实例的一些选项
  router, // 当前应用的路由实例
  siteData // 站点元数据
}) => {
  router.afterEach((to, from, next) => {
    // ...
    // encodeURIComponent
    if (to.hash) {
      if (document.querySelectorAll('.active.sidebar-link').length !== 0) return
      setTimeout(() => {
        let hashList = Array.prototype.map.call(document.querySelectorAll('.sidebar-link'),(item => item.hash));
        let index = hashList.findIndex(item => item == to.hash);
        let a = document.querySelectorAll('.sidebar-link')[index]
        a && a.click()
      }, 300);
    }
  })
}
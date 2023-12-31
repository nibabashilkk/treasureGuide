export const tabbars: Array<NavItem> = [
  {
    "icon": "icon-shouye",
    "pagePath": "/pages/index/index",
    "text": "首页"
  },
  {
    "icon": "icon-jia",
    "pagePath": "/pages/commit/commit",
    "text": "我的"
  },
  {
    "icon": "icon-wode",
    "pagePath": "/pages/my/my",
    "text": "我的"
  }
]

export const changeTab = function (this: WechatMiniprogram.Page.Instance<{}, {}>) {
  const path = '/' + this.route
  const index = tabbars.findIndex(item => item.pagePath === path)
  return index
}
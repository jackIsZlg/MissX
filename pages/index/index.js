//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    type:0,
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    extraData: getApp().globalData.extraData,
    openId: '',
    goodsGroupId: 105866329,
    goodsList: [105866329,105290598, 105290599,105866362],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../address/myAddress/myAddress'
    })
  },
  onLoad: function () {
    if (!wx.getStorageSync('loginInfo')) {
      this.getOpenId();
    } else {
      this.setData({
        openId: wx.getStorageSync('loginInfo').openid
      })
    } 
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  //获取openId，sessionKey
  getOpenId: function(){
    wx.login({
      success: res => {
        let that = this;
        wx.request({
          url: 'https://miss.xuanyantech.com/api-admin/wechat-login',
          data: {
            js_code: res.code
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'get',
          success(res) {
            wx.setStorageSync('loginInfo', res.data.result)
            that.setData({
              openId: res.data.result.openid
            })
            //console.log(res.data)
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  menuClick:function(e) {
    let num = e.target.dataset.num;
    this.setData({
      type: e.target.dataset.num,
      goodsGroupId: this.data.goodsList[num]
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleGoodsClick: function (e) {
    const { detail } = e;
    wx.navigateTo({
      url: `/packages/trade/index?pageType=goods-detail&alias=${detail.alias}&openId=${this.data.openId}`
    })
  }
})

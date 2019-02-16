const app = getApp();

Page({
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    openId: wx.getStorageSync('loginInfo').openid,
    extraData: app.globalData.extraData,
    showLogin: true
  },

  onLoad: function() {
    console.log(wx.getStorageSync('loginInfo').openid)
    this.setData({
      openId: wx.getStorageSync('loginInfo').openid
    })
  },

  handleShowZanAccount() {
    this.setData({
      showLogin: true
    });
  },

  handleBindSuccess(e) {
    console.log(e.detail, 'mobile');
  }
});

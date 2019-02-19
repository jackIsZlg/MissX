const app = getApp();

Page({
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    openId: wx.getStorageSync('loginInfo').openid,
    extraData: app.globalData.extraData,
    showLogin: true,
    from: ''
  },

  onLoad: function(options) {
    const { from } = options;
    console.log(from)
    this.setData({
      from: from,
      openId: wx.getStorageSync('loginInfo').openid
    })
  },

  handleShowZanAccount() {
    this.setData({
      showLogin: true
    });
  },

  bindMobile(mobile){
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/web/save-user',
      data: {
        openid: this.data.openId,
        mobile: mobile
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        if(that.data.from == 'my') {
          let loginInfo = wx.getStorageSync('loginInfo')
          loginInfo.flag = true;
          wx.setStorageSync('loginInfo', loginInfo);
          wx.switchTab({
            url: '/pages/my/my'
          })
        }
        //console.log(res.data)
      }
    })
  },

  handleBindSuccess(e) {
    this.bindMobile(e.detail)
    console.log(e.detail, 'mobile');
  }
});

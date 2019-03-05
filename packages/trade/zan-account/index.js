const app = getApp();

Page({
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    showFail: false,// 展示报错信息
    failInfo:'',// 报错信息
    openId: wx.getStorageSync('loginInfo').openid,
    extraData: app.globalData.extraData,
    showLogin: true,
    from: ''
  },

  onLoad: function(options) {
    let { from = '' } = options;
    if (!wx.getStorageSync('loginInfo')) {
      this.getOpenId()
    }
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
  //获取openId，sessionKey
  getOpenId: function () {
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
        let loginInfo = wx.getStorageSync('loginInfo')
        loginInfo.flag = true;
        wx.setStorageSync('loginInfo', loginInfo);
        if(that.data.from == 'my') {
          wx.switchTab({
            url: '/pages/my/my'
          })
        } else {
          wx.redirectTo({
            url: '/pages/community/communityJump/communityJump'
          })
          // wx.navigateToMiniProgram({
          //   appId: 'wx1218f52c957939af', // 要跳转的小程序的appid
          //   path: 'pages/goods/detail/index?alias=2ogl3i386cpxp', // 跳转的商品页面
          //   extarData: this.data.extraData,
          //   success(res) {
          //     // 打开成功  
          //   }
          // }) 
        }
        //console.log(res.data)
      }
    })
  },
  handleFail(e){
    this.setData({
      showFail: true,
      failInfo: e.detail.msg
    })
    setTimeout(()=>{
      this.setData({
        showFail: false,
        failInfo: ''
      })
    },2000)
  },
  handleBindSuccess(e) {
    this.bindMobile(e.detail)
    console.log(e.detail, 'mobile');
  }
});

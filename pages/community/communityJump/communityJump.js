// pages/community/communityJump/communityJump.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    extraData: getApp().globalData.extraData,
    openId: '',
  },
  onShow: function () {
    //请求接口判断是否成为分销员
    // wx.request({
    //   url: 'https://miss.xuanyantech.com/api-admin/web/yz-check-salesman',
    //   data: {
    //     openid: wx.getStorageSync('loginInfo').openid
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   method: 'get',
    //   success(res) {
    //     let loginInfo = wx.getStorageSync('loginInfo');
    //     loginInfo.salesmanFlag = res.data.result;
    //     wx.setStorageSync('loginInfo', loginInfo)
    //     if (res.data.result) {
    //       wx.redirectTo({
    //         url: '/pages/community/communitySelect/communitySelect'
    //       })
    //     }
    //   }
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      openId: wx.getStorageSync('loginInfo').openid
    })
  },
  handleGoodsClick(){
    this.getPayInfo();
  },
  getPayInfo: function () {
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/web/per-pay',
      data: {
        openid: wx.getStorageSync('loginInfo').openid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        let data = res.data.result
        wx.requestPayment({
          timeStamp: data.timeStamp,
          nonceStr: data.nonceStr,
          package: data.package,
          signType: 'MD5',
          paySign: data.paySign,
          success(res) {
            let loginInfo = wx.getStorageSync('loginInfo');
            loginInfo.memberFlag = true;
            wx.setStorageSync('loginInfo', loginInfo)
            wx.redirectTo({
              url: '/pages/community/communitySelect/communitySelect'
            })
          },
          fail(res) { 

          }
        })
      }
    })
  },
})
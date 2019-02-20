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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(getApp().globalData.extraData)
    this.setData({
      openId: wx.getStorageSync('loginInfo').openid
    })
  },

})
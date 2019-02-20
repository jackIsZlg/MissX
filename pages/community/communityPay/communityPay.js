// pages/community/communityPay/communityPay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    groupInfo: [],
    openid: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getInfo();
  },
  getInfo(){
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/web/my-group',
      data: {
        openid: wx.getStorageSync('loginInfo').openid
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        that.setData({
          groupInfo: res.data.result
        })
      }
    })
  },

})
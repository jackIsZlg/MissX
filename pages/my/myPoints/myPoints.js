// pages/my/myPoints/myPoints.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: null,
    hasUserInfo: false,
    openId: wx.getStorageSync('loginInfo').openid,
    pointsLevel:0,//等级
    totalPoints:"0",//总积分
    totalResults:"0",//总条数
    details:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })

      this.getPoints();
      this.getCoupon();
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  //积分接口
  getPoints: function(){
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/web/yz-point-log',
      data: {
        openid: that.data.openId
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        console.log(res.data.result);
        that.setData({
          pointsLevel: res.data.result.level,
          totalPoints: res.data.result.totalPoints,
          totalResults: res.data.result.totalResults,
          details: res.data.result.details
        })
      }
    })
  }
})
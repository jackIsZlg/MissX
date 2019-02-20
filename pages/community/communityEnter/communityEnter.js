// pages/communityEnter/communityEnter.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    baseUrl: getApp().globalData.baseUrl,
    extraData: getApp().globalData.extraData,
    bgSrc: app.globalData.baseUrl + '/img/WeChat/communityEnter.png'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  // 先绑定手机号
  buyCommunity:function(){
    if (!wx.getStorageSync('loginInfo').flag) {
      wx.navigateTo({
        url: '/packages/trade/zan-account/index'
      })
    } else {
      wx.navigateTo({
        url: '/pages/community/communityJump/communityJump'
      })
      // wx.navigateToMiniProgram({
      //   appId: 'wx1218f52c957939af', // 要跳转的小程序的appid
      //   path: 'pages/goods/detail/index?alias=2ogl3i386cpxp', // 跳转的目标页面
      //   extarData: this.data.extraData,
      //   success(res) {
      //     // 打开成功  
      //   }
      // }) 
    }

  }
})
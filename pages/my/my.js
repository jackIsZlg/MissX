// pages/my/my.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    myOrder:[
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_order1.png`, name: '待付款', url: '' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_order2.png`, name: '待发货', url: '' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_order3.png`, name: '已发货', url: '' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_order4.png`, name: '已完成', url: '' },
    ],
    myLink1:[
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon1.png`,name:'收货地址',url:''},
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon2.png`, name: '购物车', url: '' }
    ],
    myLink2: [
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon3.png`, name: '邀请奖励', url: '' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon4.png`, name: '我的积分', url: '' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon5.png`, name: '返现', url: '' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon6.png`, name: '优惠券', url: '' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon7.png`, name: '课程', url: '' },
    ]
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

  }
})
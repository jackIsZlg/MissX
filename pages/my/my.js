// pages/my/my.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    openId: wx.getStorageSync('loginInfo').openid,
    orderType: [
      'all', 'topay', 'tosend', 'send', 'sign'//全部订单，代付款，待发货，已发货，已完成
    ],
    myOrder:[
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_order1.png`, name: '待付款', url: '', type: 'topay' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_order2.png`, name: '待发货', url: '', type: 'tosend' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_order3.png`, name: '已发货', url: '', type: 'send'  },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_order4.png`, name: '已完成', url: '', type: 'sign'  },
    ],
    myLink1:[
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon1.png`, name: '收货地址', url:'/pages/address/myAddress/myAddress'},
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon2.png`, name: '购物车', url: '/pages/cart/cart' }
    ],
    myLink2: [
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon3.png`, name: '邀请奖励', url: '/pages/communityIntro/communityIntro' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon4.png`, name: '我的积分', url: '/pages/my/myPoints/myPoints' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon5.png`, name: '返现', url: '/pages/my/myBalance/myBalance' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon6.png`, name: '优惠券', url: '/pages/my/myCoupon/myCoupon' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon7.png`, name: '课程', url: '/pages/my/myCourse/myCourse' },
    ],

    userInfo: null,
    hasUserInfo: false
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
  goToMyCenter:function(){
    wx.navigateTo({
      url: '/pages/community/communityEnter/communityEnter'
    })
  },
  orderList: function (e) {
    let type = e.currentTarget.dataset.type;
    console.log(type)
    wx.navigateTo({
      url: `/packages/trade/index?pageType=order&type=${type}&openId=${this.data.openId}`
    })
  },

  getUserInfo: function(){
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})
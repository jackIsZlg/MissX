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
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon3.png`, name: '邀请奖励', url: '/pages/community/communityIntro/communityIntro' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon4.png`, name: '我的积分', url: '/pages/my/myPoints/myPoints' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon5.png`, name: '返现', url: '/pages/my/myBalance/myBalance' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon6.png`, name: '优惠券', url: '/pages/my/myCoupon/myCoupon' },
      { icon: `${app.globalData.baseUrl}/img/WeChat/myCenter_linkIcon7.png`, name: '课程', url: '/pages/my/myCourse/myCourse' },
    ],
    flag: wx.getStorageSync('loginInfo').flag,
    userInfo: null,
    hasUserInfo: false,
    pointsLevel: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(11111)
    this.setData({
      flag: wx.getStorageSync('loginInfo').flag,
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
      this.getPoints();
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
  toLink:function(e){
    let url = e.currentTarget.dataset.url;
    //积分和优惠券要绑定手机号
    if (url.indexOf('myPoints') > 0 || url.indexOf('myCoupon') > 0){
      if (!wx.getStorageSync('loginInfo').flag) {
        wx.navigateTo({
          url: '/packages/trade/zan-account/index?from=my'
        })
        return;
      }
    } else if (url.indexOf('myBalance') > 0) {
      wx.navigateToMiniProgram({
        appId: 'wx1218f52c957939af', // 要跳转的小程序的appid
        path: 'packages/salesman/salesman-center/index', // 跳转的目标页面
        extarData: this.data.extraData,
        success(res) {
          // 打开成功  
        }
      })
      return;
    }
    wx.navigateTo({
      url: url
    })
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
  },

  //积分接口
  getPoints: function () {
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
        that.setData({
          pointsLevel: res.data.result.level
        })
      }
    })
  },
})
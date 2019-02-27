// pages/index/membership/membership.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor1.jpg`},
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor2.png` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor3.png` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor4.jpg` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor5.jpg` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor6.png` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor7.jpg` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor8.jpg` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor9.jpg` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor10.jpg` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor11.jpg` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor12.jpg` },
      { url: `${app.globalData.baseUrl}/img/WeChat/membership_floor13.png` },
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

  },
  // 先绑定手机号
  buyCommunity: function () {
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
  },
  // //跳转社群
  // goToMyCenter: function () {
  //   let url = '';
  //   if (wx.getStorageSync('loginInfo').salesmanFlag) { // 如果支付成功已经成为分销员
  //     if (wx.getStorageSync('loginInfo').groupFlag) { //绑定过社群
  //       url = '/pages/community/communityPay/communityPay';
  //     } else { // 没有绑定过
  //       url = '/pages/community/communitySelect/communitySelect';
  //     }
  //   } else {
  //     url = '/pages/community/communityEnter/communityEnter';
  //   }
  //   wx.navigateTo({
  //     url: url
  //   })
  // },
  imageLoad: function (e) {
    var width = e.detail.width,    //获取图片真实宽度
      height = e.detail.height,
      url = e.currentTarget.dataset.src;
    var image = this.data.images;
    //将图片的datadata-index作为image对象的key,然后存储图片的宽高值
    image[e.target.dataset.index] = {
      url: url,
      width: `${width}rpx`,
      height: `${height}rpx`
    }
    this.setData({
      images: image
    })
  }
})
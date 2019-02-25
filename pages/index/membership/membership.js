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
// pages/shop/shop.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    openId: wx.getStorageSync('loginInfo').openid,
    type: 0,
    goodsList: [105929740,105927914,106075957,106179292,106179298],
    goodsGroupId: 105929740,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      openId: wx.getStorageSync('loginInfo').openid
    })
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
  // 菜单选择 
  menuClick: function (e) {
    let num = e.target.dataset.num;
    this.setData({
      type: e.target.dataset.num,
      goodsGroupId: this.data.goodsList[num]
    })
  },
  handleGoodsClick: function(e){
    const { detail } = e;
    wx.navigateTo({
      url: `/packages/trade/index?pageType=goods-detail&alias=${detail.alias}&openId=${this.data.openId}`
    })
  }
})
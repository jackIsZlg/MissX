// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    openId: 'oDpvq0LNzwhMGfiNRbq-NthY5oUo'
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

  goBuy({ detail: { bookKey } }) {
    const { openId, appId, shopId } = this.data;
    wx.navigateTo({
      url: `plugin://yzTradePlugin/buy?bookKey=${bookKey}&openId=${openId}&appId=${appId}&shopId=${shopId}`
    });
  },

  goGoodsDetail({ detail: { goodsId } }) {
    const { openId, appId, shopId } = this.data;
    wx.navigateTo({
      url: `plugin://yzTradePlugin/goods-detail?goodsId=${goodsId}&openId=${openId}&appId=${appId}&shopId=${shopId}`
    });
  }
})
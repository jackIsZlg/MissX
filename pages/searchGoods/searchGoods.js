// pages/searchGoods/searchGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    openId: wx.getStorageSync('loginInfo').openid,
    goodsIds: '',
    info: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { info = '' } = options
    this.setData({
      info: info
    })
    if (!info) {
    }else {
      this.searchGoods(info);
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
  arrayToString(array) {
    let str = '';
    array.forEach((item) => {
      str = str + item.item_id + ','
    })
    return str.substring(0, str.length - 1)
  },
  searchG:function(e){
    this.searchGoods(e.detail.value)
  },
  //搜索商品
  searchGoods:function(info) {
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/web/yz-get-items-on-sale',
      data: {
        q: info
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        let items = res.data.result.items;
        that.setData({
          goodsIds: that.arrayToString(items)
        })
      }
    })
  },
  handleGoodsClick: function (e) {
    const { detail } = e;
    wx.navigateTo({
      url: `/packages/trade/index?pageType=goods-detail&alias=${detail.alias}&openId=${this.data.openId}`
    })
  }
})
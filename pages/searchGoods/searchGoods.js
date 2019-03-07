// pages/searchGoods/searchGoods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    pageNo: 1,
    totalPage: 1,
    openId: wx.getStorageSync('loginInfo').openid,
    hasGoods: false,
    goodsIds: [],
    height: '',
    info: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let { info = 'nima111' } = options
    this.setData({
      info: info,
      hasGoods: !info ? false : true
    })
    this.getPhone();
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
  getPhone() {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          height: res.windowHeight - (res.windowWidth / 750) * 94 + "px"
        })
      }
    })
  },
  lower(e) {
    let { pageNo, totalPage, info} = this.data
    if (pageNo < totalPage) {
      pageNo = pageNo + 1;
      this.setData({
        pageNo: pageNo
      })
      this.searchGoods(info, pageNo)
    }
  },
  arrayToString(array) {
    let str = '';
    if (!array) {
      return '';
    }
    array.forEach((item) => {
      str = str + item.item_id + ','
    })
    return str.substring(0, str.length - 1)
  },
  searchG:function(e){
    this.setData({
      info: e.detail.value,
      goodsIds: [],
    })
    this.searchGoods(e.detail.value)
  },
  //搜索商品
  searchGoods: function (info, pageNo =1) {
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/web/yz-get-items-on-sale',
      data: {
        q: info,
        pageNo: pageNo,
        pageSize: 10
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        let items = res.data.result.items;
        that.data.goodsIds.push(that.arrayToString(items));
        that.setData({
          totalPage: Math.ceil(res.data.result.count / 10),
          hasGoods: that.data.goodsIds[0].length != 0  ? true : false,
          goodsIds: that.data.goodsIds
        })
        console.log(that.data.goodsIds)
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
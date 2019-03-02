// pages/goodsJump/goodsJump.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showMiaosha: true, // 是否是秒杀
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    groupId: '',
    miaoshaId: wx.getStorageSync('miaoshaId'),  // 秒杀Id
    extraData: getApp().globalData.extraData,
    openId: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (options.type == 'goods') {
      console.log(options.groupId)
      this.setData({
        groupId: options.groupId,
        showMiaosha:false,
        openId: wx.getStorageSync('loginInfo').openid
      })
    }else{// 秒杀
      this.setData({
        showMiaosha: true,
        miaoshaId: wx.getStorageSync('miaoshaId'),  // 秒杀Id
        openId: wx.getStorageSync('loginInfo').openid
      })
    }
    wx.setNavigationBarTitle({
      title: options.name
    })
  },
  handleGoodsClick: function (e) {
    const { detail } = e;
    wx.navigateTo({
      url: `/packages/trade/index?pageType=goods-detail&alias=${detail.alias}&openId=${this.data.openId}`
    })
  },
})
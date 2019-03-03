// pages/my/myCoupon/myCoupon.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    openId: wx.getStorageSync('loginInfo').openid,
    status: 'VALID',//VALID 有效（未使用） USED 已使用 INVALID 已失效
    cards:[],//优惠券
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'https://open.youzan.com/api/oauthentry/youzan.ump.promocard.buyer/3.0.1/search',
    //   data: {
    //     open_user_id: wx.getStorageSync('loginInfo').openid
    //   },
    //   header: {
    //     'content-type': 'application/x-www-form-urlencoded'
    //   },
    //   method: 'get',
    //   success(res) {
    //     //console.log(res.data)
    //   }
    // })
    this.getCoupon();
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

  //切换
  toggleStatus: function(e){
    let status = e.currentTarget.dataset.status;
    this.setData({
      status: status
    })
    this.getCoupon();
  },

  //优惠券接口
  getCoupon: function () {
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/web/yz-promo-card',
      data: {
        openid: that.data.openId,
        status: that.data.status
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        let cards = res.data.result.cards.map((val,index,arr)=>{
          // value优惠面额（单位：分）
          val.value = val.value / 100;
          // 领取到的折扣值（88，8.8折）
          val.discount = val.discount /10;
          // 卡券有效开始时间(UTC时间格式)
          val.valid_start_at = that.timeFormat1(val.valid_start_at);
          // 卡券有效过期时间
          val.expire_at = that.timeFormat1(val.expire_at);
          return val;
        })
        that.setData({
          cards: cards
        })
      }
    })
  },
  timeFormat1:function(time){
    time = time.substring(0,10)
    time = time.replace(/-/g,'.')
    return time
  },
  timeFormat: function(time){
      var d = new Date(time);
      var year = d.getFullYear();       //年  
      var month = d.getMonth() + 1;     //月  
      var day = d.getDate();            //日  

      var hh = d.getHours();            //时  
      var mm = d.getMinutes();          //分  
      var ss = d.getSeconds();           //秒  
      var clock = year + ".";
      if (month < 10)
        clock += "0";
      clock += month + ".";
      if (day < 10)
        clock += "0";
      clock += day + " ";
      if (hh < 10)
        clock += "0";
      clock += hh + ":";
      if (mm < 10) clock += '0';
      clock += mm + ":";
      if (ss < 10) clock += '0';
      clock += ss;
      return (clock);
  },
})
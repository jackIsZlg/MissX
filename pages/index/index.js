//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    type:0,
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    extraData: getApp().globalData.extraData,
    openId: '',
    goodsGroupId: 105866329,
    goodsList: [105866329, 105290599, 105866361, 105866362],
    zutuanId: '', // 组团Id
    miaoshaId: '',  // 秒杀Id
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../address/myAddress/myAddress'
    })
  },
  onLoad: function () {
    this.getActivityId(1); //组团
    this.getActivityId(2); //秒杀
    if (!wx.getStorageSync('loginInfo')) {
      this.getOpenId();
    } else {
      this.setData({
        openId: wx.getStorageSync('loginInfo').openid
      })
    }
  },
  arrayToString(array){
    let str = '';
    array.forEach((item)=>{
      str = str + item + ','
    })
    return str.substring(0, str.length-1)
  },
  //获取秒杀和拼团活动ID
  getActivityId(type){
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/backstage/activity-ids',
      data: {
        type: type,
        status:1
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        if(type == 1) {
          that.setData({
            zutuanId: that.arrayToString(res.data.result)
          })
        } else{
          that.setData({
            miaoshaId: that.arrayToString(res.data.result)
          })
        }
      }
    })
  },
  //获取openId，sessionKey
  getOpenId: function(){
    wx.login({
      success: res => {
        let that = this;
        wx.request({
          url: 'https://miss.xuanyantech.com/api-admin/wechat-login',
          data: {
            js_code: res.code
          },
          header: {
            'content-type': 'application/x-www-form-urlencoded'
          },
          method: 'get',
          success(res) {
            wx.setStorageSync('loginInfo', res.data.result)
            that.setData({
              openId: res.data.result.openid
            })
            //console.log(res.data)
          }
        })
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  menuClick:function(e) {
    let num = e.target.dataset.num;
    this.setData({
      type: e.target.dataset.num,
      goodsGroupId: this.data.goodsList[num]
    })
  },
  menuClick:function(e) {
    let num = e.target.dataset.num;
    this.setData({
      type: e.target.dataset.num,
      goodsGroupId: this.data.goodsList[num]
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  handleGoodsClick: function (e) {
    const { detail } = e;
    wx.navigateTo({
      url: `/packages/trade/index?pageType=goods-detail&alias=${detail.alias}&openId=${this.data.openId}`
    })
  }
})

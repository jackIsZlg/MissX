//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    type:0,
    bannerList: [], //banner链接地址
    appId: 'wxfb91c44127dc7a17',
    shopId: 98539213,
    extraData: getApp().globalData.extraData,
    openId: '',
    goodsGroupId: 105866329,
    goodsList: [105866329, 105290599, 105866361, 105866362],//依次是：会员任务，热卖，新品上架，明星同款
    jumpGoods: [
      {
        name: '寻美官推荐',
        groupId: 106075940
      },
      {
        name: '美妆个护',
        groupId: 106075949
      },
      {
        name: '时尚潮品',
        groupId: 106075950
      },
      {
        name: '变美黑科技',
        groupId: 106075955
      },
      {
        name: '越吃越美',
        groupId: 106075956
      },
      {
        name: '母婴居家',
        groupId: 106075957
      },
      {
        name: '大牌试用',
        groupId: 106075958
      },
      {
        name: '积分兑换',
        groupId: 106075959
      },
    ], //依次是寻美观推荐，美妆个护，时尚潮品，3C数码，趣味食品，母婴居家
    zutuanId: '', // 组团Id
    miaoshaId: '',  // 秒杀Id
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    showFix: false,
    imgUrls:[
      'https://miss.xuanyantech.com/img/WeChat/index-banner1.png',
      'https://miss.xuanyantech.com/img/WeChat/index-banner2.png',
      'https://miss.xuanyantech.com/img/WeChat/index-banner3.png',
    ],
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
    this.getImgbg();
    if (!wx.getStorageSync('loginInfo')) {
      this.getOpenId();
    } else {
      this.setData({
        openId: wx.getStorageSync('loginInfo').openid
      })
    }
  },
  // 获取图片背景
  getImgbg(){
    let that = this;
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/banner/list',
      data: {},
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        that.setData({
          bannerList: res.data.result
        })
      }
    })
  },
  // 四处跳转
  goToGoods(e){
    let type = e.currentTarget.dataset.type;
    let groupId = this.data.jumpGoods[type].groupId;
    let name = this.data.jumpGoods[type].name;
    wx.navigateTo({
      url: `/pages/goodsJump/goodsJump?groupId=${groupId}&type=goods&name=${name}`
    })
  },
  //跳专题
  goToZhuanTi(e) {
    let num = e.currentTarget.dataset.num;
    let groupId = num == 1 ? 105927834 : 105927849;
    let name = '诱惑专场';
    wx.navigateTo({
      url: `/pages/goodsJump/goodsJump?groupId=${groupId}&type=goods&name=${name}`
    })
  },
  // 限量秒杀
  goToMiaosha(){
   let name = '限量秒杀';
    wx.navigateTo({
      url: `/pages/goodsJump/goodsJump?type=miaosha&name=${name}`
    })
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
          wx.setStorageSync('miaoshaId', that.arrayToString(res.data.result))
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
  // 菜单点击
  menuClick:function(e) {
    let num = e.currentTarget.dataset.num;
    this.setData({
      type: e.currentTarget.dataset.num,
      goodsGroupId: this.data.goodsList[num]
    })
  },
  //跳转社群
  goToMyCenter: function () {
    let url = '';
    if (wx.getStorageSync('loginInfo').salesmanFlag) { // 如果支付成功已经成为分销员
      if (wx.getStorageSync('loginInfo').groupFlag) { //绑定过社群
        url = '/pages/community/communityPay/communityPay';
      } else { // 没有绑定过
        url = '/pages/community/communitySelect/communitySelect';
      }
    } else {
      url = '/pages/index/membership/membership';
    }
    wx.navigateTo({
      url: url
    })
  },
  //打开客服等信息
  openFix:function(e){
    let type = e.currentTarget.dataset.type;
    if (type == 'show' || type == 'close') {
      this.setData({
        showFix: type == 'show' ? true : false
      })
    } else if (type == 'shop') {
      wx.navigateTo({
        url: '/pages/cart/cart'
      })
    } else if (type == 'service'){

    } else {
      wx.pageScrollTo({
        scrollTop: 0
      });
      this.setData({
        showFix: false
      })
    }
  },
  getUserInfo: function(e) {
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

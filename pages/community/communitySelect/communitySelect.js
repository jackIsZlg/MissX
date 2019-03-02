// pages/community/communitySelect/communitySelect.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['豹变少女轻创社区'],
    index: 0,
    openid: '', 
    name: '',
    mobile: '',
    groupName: '',
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
  bindNameInput(e){
    this.setData({
      name: e.detail.value
    })
  },
  bindPhoneInput(e){
    this.setData({
      mobile: e.detail.value
    })
  },
  enterGroup(){
    let that = this;
    if (!this.data.name){
      wx.showModal({
        title: '提示',
        content: '姓名不能为空',
        showCancel: false,
        success(res) {
        }
      })
      return;
    } else if (!this.data.mobile){
      wx.showModal({
        title: '提示',
        content: '手机号不能为空',
        showCancel: false,
        success(res) {  
        }
      })
      return;
    }
    wx.request({
      url: 'https://miss.xuanyantech.com/api-admin/web/save-group',
      data: {
        openid: wx.getStorageSync('loginInfo').openid,
        name: this.data.name,
        mobile: this.data.mobile,
        groupName: this.data.array[this.data.index]
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'get',
      success(res) {
        let loginInfo = wx.getStorageSync('loginInfo');
        loginInfo.groupFlag = true;
        wx.setStorageSync('loginInfo', loginInfo)
        wx.redirectTo({
          url: '/pages/community/communityPay/communityPay'
        })
      }
    })
  }
})
Page({
  onLoad(options) {
    const { pageType } = options;
    let url;

    switch (pageType) {
      case 'goods-detail':
        url = `goods-detail?goodsId=${options.alias}`;
        break;
      case 'order':
        url = `order-list?type=${options.type}`;
        break;
      case 'order-detail':
        url = `detail?orderNo=${options.orderNo}`;
        break;
    }
    wx.redirectTo({
      url: `plugin://yzTradePlugin/${url}&openId=${options.openId}&shopId=98539213&appId=wxfb91c44127dc7a17`
    });
  }
});

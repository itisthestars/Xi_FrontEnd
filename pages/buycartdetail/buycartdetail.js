// pages/message4/message4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cart: [],
    allchecked: false,
    totalprice: 0,
    totalnum: 0,
    newcart: []
  },
  onShow() {

    const cart = wx.getStorageSync('cart')
    const newcart = cart.filter(v => v.checked)
    console.log(newcart)
    this.setData({
      newcart
    })
    // 计算总价 数量的功能
    let totalprice = 0;
    let totalnum = 0;
    // 循环数组 计算数量和总价
    newcart.forEach(v => {
      if (v.checked) {
        totalprice += v.price * v.num,
          totalnum += v.num
      } else {

      }
    })

    this.setData({
      totalnum,
      totalprice
    });

  },
  settlement() {
    wx.showToast({
      title: '支付成功',
      icon: 'error'
    })
  let nopay=wx.getStorageSync('cart')
  nopay=nopay.filter(v=>v.checked===false)
  wx.setStorageSync('cart', nopay)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },



  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
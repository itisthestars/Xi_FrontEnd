const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftlist: [],
    rightlist: [],
    leftindex: 0,
    scrolltop: 0,
    cates: [],
    url:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getlist()
    
  },

  getlist() {
    let url=app.globalData.url+'/articles/category/'
    wx.request({
      url: url,
      success: (result) => {
        console.log(result)
        this.setData({
          cates: result.data
        })


        let leftlist = this.data.cates.map(v => v.cat_a_title);
        let rightlist = this.data.cates[0].cat_b_title;
        this.setData({
          leftlist,
          rightlist
        })
      }
    })
  },
  handlist(e) {

    let rightlist = this.data.cates[e.currentTarget.dataset.inde].cat_b_title;
    this.setData({
      rightlist,
      leftindex: e.currentTarget.dataset.inde,
      scrolltop: 0

    })

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

  }
})
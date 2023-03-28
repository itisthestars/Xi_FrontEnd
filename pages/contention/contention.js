// pages/content/content.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content: [],
  },
  parameter: {
    cat_a_id: "",
    cat_b_id: ""
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.parameter.cat_a_id = Number(options.id1) + 1;
    this.parameter.cat_b_id = Number(options.id2);

    this.getcontent();
  },
  // 发起请求
  getcontent() {
    let url=app.globalData.url+'/articles/getarticle/'
    wx.request({
      url:url,
      data: {
        cat_a_id: this.parameter.cat_a_id,
        cat_b_id: this.parameter.cat_b_id
      },
      success: (re) => {
        console.log(re)
        this.setData({
          content: re.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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
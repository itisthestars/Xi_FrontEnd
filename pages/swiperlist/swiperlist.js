// pages/swiperlist/swiperlist.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
content:[]
  },
param:{
rank:''
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
this.param.rank=options.rank
this.getdata()
  },
  // 
getdata(){
  let url=app.globalData.url+'/header/newsinfo/'
wx.request({
  url:url,
  data: {
    rank: this.param.rank,
  },
  success:(res)=>{
console.log(res)
this.setData({
  content:res.data
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
// pages/collection/collection.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
collection:[],
id:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
const coll=wx.getStorageSync('collect');
this.setData({
  collection:coll
})
  },
  // getid(e){
  //   const {id}=e.currentTarget.dataset;
  //   console.log(id)
  //   this.setData({
  //     id,
  //   })
  // },
handdelete(e){
  // 获取点击的语句id
  const {id}=e.currentTarget.dataset;

 
  // 获取数组数据
  let collection=this.data.collection;
  // 找到所要删除的语句的索引
  let index=collection.findIndex(v=>v.id===id)
  wx.showModal({
    title: '提示',
    content: '是否要取消收藏该语句',
    success:(res)=> {
      if (res.confirm) {
        collection.splice(index, 1)
            wx.setStorageSync('collect', collection)
            this.setData({
              collection,
            })
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
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
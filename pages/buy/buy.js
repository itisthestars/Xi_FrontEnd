// pages/buy/buy.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
object:[{
  id:0,
  src:'https://itisthestar.oss-cn-hangzhou.aliyuncs.com/buy.png',
  price:10,
  name:'中国共产党章程'
},{
  id:1,
  src:'https://itisthestar.oss-cn-hangzhou.aliyuncs.com/buy1.png',
  price:15,
  name:'在庆祝中国共产党成立100周年大会上的讲话'
},{
  id:2,
  src:'https://itisthestar.oss-cn-hangzhou.aliyuncs.com/buy3.png',
  price:20,
  name:'论中国共产党历史'
}]
  },
  handadd(e){
console.log(e.target.dataset.id)
    // 1获取缓存中的购物车数组
    let cart=wx.getStorageSync("cart")||[];
    // 2判断商品对象是否存在于购物车数组中
    let index=cart.findIndex(v=>v.id===e.target.dataset.id);
    if(index===-1){
    this.data.object[e.target.dataset.id].num=1;
    this.data.object[e.target.dataset.id].checked=true;
    cart.push(this.data.object[e.target.dataset.id])
    }
    else{
    cart[index].num++;
    }
    // 把购物车重新添加回缓存中
    wx.setStorageSync('cart', cart);
    // 弹窗提示
    wx.showToast({
      title: '加入成功',
    })
    
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
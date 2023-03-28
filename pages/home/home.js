// pages/text/text.js
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数据
    swiperlist: [],
    // 一句话数据
    datalist: [],
    currentdata: null,
    random: '',
    checked: false,
    collectimage: '/images/collect.png',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 轮播图
    this.getlist()
    // 一句话
    this.getdatalist()
  },
  // 轮播图数据请求
  getlist() {
    let url=app.globalData.url+'/header/headinfo/'
    wx.request({
      url:url, //后端路径
      success: (res) => {
        this.setData({
          swiperlist: res.data
        })
      }
    })
  },
  // 一句话数据请求
  getdatalist() {
    let url=app.globalData.url+'/header/sentenceinfo/'
    console.log(url)
    wx.request({
      url:url,
      success: (re) => {
        this.setData({
          datalist: re.data,

        })
        this.setData({
          random: Math.floor(Math.random() * this.data.datalist.length)
        })

        this.setData({
          currentdata: re.data[this.data.random]
        })

      },

    })
  },
  // 点击刷新功能
  handrefresh() {
    this.setData({
      random: Math.floor(Math.random() * this.data.datalist.length)
    })
    const randomimdex = this.data.random;
    const randomdata = this.data.datalist[randomimdex];
    this.setData({
      currentdata: randomdata
    })
    this.setData({
      checked: false,
      collectimage: '/images/collect.png'
    })
    // 弹窗提示
    wx.showToast({
      title: '刷新成功',

    })

  },
  // 点击收藏功能
  handadd() {
    if(wx.getStorageSync('localUserInfo')!=''){
    // 1获取缓存中的购物车数组
    let collect = wx.getStorageSync('collect') || [];
    // let cart=wx.getStorageSync("cart")||[];
    // 2判断商品对象是否存在于购物车数组中
    let index = collect.findIndex(v => v.id === this.data.currentdata.id)
    // let index=cart.findIndex(v=>v.goods_id===this.data.GoodsInfo.goods_id);
    console.log(index)
    // 如果没有收藏过数据
    if (index === -1) {
      // this.data.GoodsInfo.checked=true;

      // 把当前的数据保存到本地存储中
      collect.push(this.data.currentdata)
      // 把收藏重新添加回缓存中
      wx.setStorageSync('collect', collect);
      // 删除保存过的数据
      this.data.datalist.splice(this.data.random, 1)
      this.setData({
        checked: true,
        collectimage: '/images/iscollect.png'
      })
      // 弹窗提示
      wx.showToast({
        title: '收藏成功',

      })
    }
    // 再次点击取消收藏 发现本地存储中保存这个数据 
    else {
      // 删除本地存储中的这个数据
      collect.splice(index, 1),
        // 在把这条数据加入到数组中
        this.data.datalist.push(this.data.currentdata)
      this.setData({
        checked: false,
        collectimage: '/images/collect.png'
      })
      // 再次更新本地存储
      wx.setStorageSync('collect', collect);
      // 弹窗提示
      wx.showToast({
        title: '取消成功',

      })
    
    }
  }
  else{
    wx.showToast({
      title: '请先登录',
    })
  }

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
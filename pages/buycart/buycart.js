// pages/message4/message4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: [],
    cart: [],
    allchecked: false,
    totalprice: 0,
    totalnum: 0,
  },


  // handadress() {
  //   // 获取地址 并且存储到本地存储中
  //   wx.chooseAddress({
  //     success: (re) => {
  //       wx.setStorageSync('address', re)
  //     }
  //   });
  // },
  onShow() {
    // 将获取到的地址存到数组中
    // const add = wx.getStorageSync('address');
    // this.setData({
    //   address: add
    // })
    // // 获取本地存储中的加入购物车数组 并且赋值
    // const cart=wx.getStorageSync('cart')
    // // 全选功能的实现 使用every 数组方法 会遍历 接受一个回调函数 每一个回调函数都会返回true 只要有一个回调函数返回false 就不再执行循环执行，直接返回false
    // const allchecked=cart.length?cart.every(v=>v.checked):false;

    // let totalprice=0;
    // let totalnum=0;
    // cart.forEach(v=>{
    //   if(v.checked){
    //     totalprice+=v.goods_price*v.num,
    //     totalnum+=v.num
    //   }
    //   else{

    //   }
    // })

    // this.setData({
    //   cart,
    //   allchecked,
    //   totalnum,
    //   totalprice
    // })

    // 将上面的注释的封装起来再调用 
    const cart = wx.getStorageSync('cart')
    this.setcart(cart);
  },

  // 商品的是否选中
  handitemchange(e) {
    // 1获取所点击商品的id
    const id = e.currentTarget.dataset.id;
    // 2获取购物车数组
    let cart = this.data.cart;
    // 3找到被修改的商品对象
    let index = cart.findIndex(v => v.id === id);
    // 4选中状态取反
    cart[index].checked = !cart[index].checked;
    // 重新计算
    this.setcart(cart);
  },

  // 封装购物车计算功能和是否全选的函数
  setcart(cart) {
    //  !全选功能的实现!   使用every 数组方法 会遍历 接受一个回调函数 每一个回调函数都会返回true 只要有一个回调函数返回false 就不再执行循环执行，直接返回false
    const allchecked = cart.length ? cart.every(v => v.checked) : false;
    // 计算总价 数量的功能
    let totalprice = 0;
    let totalnum = 0;
    // 循环数组 计算数量和总价
    cart.forEach(v => {
      if (v.checked) {
        totalprice += v.price * v.num,
          totalnum += v.num
      } else {

      }
    })

    this.setData({
      cart,
      allchecked,
      totalnum,
      totalprice
    });
    // 把计算过的数组 重新存入本地存储中
    wx.setStorageSync('cart', cart)
  },
  // 全选按钮功能
  handallcheck() {
    // 1获取data中的数据
    let {
      cart,
      allchecked
    } = this.data;
    // 2修改值
    allchecked = !allchecked;
    // 3循环修改cart数组中的商品选中状态
    cart.forEach(v => v.checked = allchecked);
    // 4把修改后的值 再填充回
    this.setcart(cart);
  },
  
  handjiajian(e) {
    // 1获取传递过来的参数
    const {
      operation,
      id
    } = e.currentTarget.dataset;
    //2获取数组数据
    let cart = this.data.cart;
    console.log(cart)
    // 3找到需要修改的商品索引
    let index = cart.findIndex(v => v.id === id)
    if (cart[index].num === 1 && operation === -1) {
      wx.showModal({
        title: '提示',
        content: '确定要删除',
        success: (res) => {
          if (res.confirm) {
            cart.splice(index, 1)
            wx.setStorageSync('cart', cart)
            this.setData({
              cart,
            })
            this.setcart(cart)
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    } else {
      // 4进行修改数量
      cart[index].num += operation;
      // 设置回缓存中和data中
      wx.setStorageSync('cart', cart)
      this.setData({
        cart,
      })
      this.setcart(cart)
    }
  },
  // 点击支付跳转
  pay() {
    const address = this.data.address;
    const totalnum=this.data.totalnum;
    console.log(address.userName)
    // if (!address.userName) {
    //   wx.showToast({
    //     title: '请填写完整地址信息',
    //     icon: 'error',
    //     duration: 300,

    //   })
    //   return;
    // }
    if(totalnum===0)
    {
      wx.showToast({
        title: '请选购商品',
        icon:'error',
        duration:300
      })
      return;
    }
    console.log('ok')
    wx.showToast({
      title: '支付成功',
      icon: 'error'
    })
  let nopay=wx.getStorageSync('cart')
  nopay=nopay.filter(v=>v.checked===false)
  wx.setStorageSync('cart', nopay)
  let newcart=wx.getStorageSync('cart')
  this.setcart(newcart);
    // wx.navigateTo({
    //   url: '/pages/buycartdetail/buycartdetail',
    // })
  },
  // settlement() {
  //   wx.showToast({
  //     title: '支付成功',
  //     icon: 'error'
  //   })
  // let nopay=wx.getStorageSync('cart')
  // nopay=nopay.filter(v=>v.checked===false)
  // wx.setStorageSync('cart', nopay)
  // },
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
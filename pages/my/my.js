const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

     //检测本地是否还保存着登录状态时的个人信息，可直接免登录
     if(wx.getStorageSync('localUserInfo')!=''){
      this.setData({
        userInfo: wx.getStorageSync('localUserInfo')
      })
    }
    // 登录
    wx.login({
      success: (res) => {
        // 发送 res.code 到后台换取 openId , sessionKey, unionId
        let url=app.globalData.url+'/wechat/login/'
        wx.request({
          url:url, //后端路径
          //  把code发送到后端
          data: {
            "code": res.code,
          },

          method: "POST",
          success: (res) => {
            wx.setStorageSync('login_key', res.data.data.login_key)
          }
        })
      },
    })
  },


  // 获取个人信息


  //授权登录的方法
  login() {
    let url=app.globalData.url+'/wechat/confirm/'
    //微信申请接口
    wx.getUserProfile({
      // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      desc: '必须授权才可以继续使用',
      //允许授权后，保存用户个人信息
      success: (res) => {
        console.log(res)
        wx.request({
          url:url,
          method: "POST",
          data: {
            "encryptedData": res.encryptedData,
            "iv": res.iv,
            "login_key": wx.getStorageSync("login_key")
          },

          success: (res) => {
            wx.setStorageSync('localUserInfo', res.data.data);
            this.setData({
              userInfo: res.data.data
            })
          }
        })

      },
      //拒绝授权后的提示
      fail(res) {
        wx.showModal({
          title: '提示',
          content: '必须授权才可以继续使用'
        })
      }
    })
  },
  // 退出登录
  loginOut(){
    this.setData({
      userInfo: '',
    })
    wx.setStorageSync('localUserInfo', '');
    wx.showToast({
      title: '已退出登录！',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
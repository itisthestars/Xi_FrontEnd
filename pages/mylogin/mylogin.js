const app = getApp()
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
Page({
    data: {
    user:{
    avatarurl: defaultAvatarUrl,
    username:""
    }
  },
  onLoad() {
   
  
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail 
    this.setData({
    ['user.avatarurl']:avatarUrl
    })
  
  },
  formSubmit(e) {
console.log(e.detail.value.username)
    this.setData({
      ['user.username']:e.detail.value.username
    })
    wx.setStorageSync('localUserInfo',this.data.user
    );
    wx.request({
      url: 'url',
      data:{

      },
      success:(res)=>{
        
      }
    })
    // 使用页面栈返回上一页
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    // 将这个页面的数值赋给上一页的对象
    prevPage.setData({
         userInfo: this.data.user,
    })
    wx.navigateBack({
         delta: 1,
    })
  },
  // goback(e){
   
  //     let pages = getCurrentPages();
  //     let prevPage = pages[pages.length - 2];
  //     prevPage.setData({
  //          message: e.currentTarget.dataset.msg,
  //     })
  //     wx.navigateBack({
  //          delta: 1,
  //     })


  // }
})

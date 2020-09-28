//app.js
App({
  onLaunch: function () {

    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })

    //  设置请求url
    // wx.setStorageSync('baseUrl', 'https://slocal.willv.cn:8080')

    wx.setStorageSync('baseUrl', 'http://tj.willv.tk:5000/')
  // wx.setStorageSync('http://tj.willv.tk:5000/')
    /**this.getUserInfo()  
     * */
  },

  /**
   * 获取
  
  getUserInfo: function(){
    wx.login({
      success: (res) => {
        if(res.code){
//        保存 临时登录凭证
          wx.setStorageSync('login_code', res.code)
        }
      }
    })
  },
   */
  globalData: {
    userInfo: null
  }
})
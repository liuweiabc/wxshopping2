// index.js
Page({
    data:{
        phone_number:'',
        code:''
    },
    getphone:function(e){
        this.setData({
            phone_number:e.detail.value
        })
        if(this.data.phone_number.length != 11){
            wx.showToast({
              title: '手机号码错误',
            })
            return;
        }
    },
    getcode:function(e){
        this.setData({
            code:e.detail.value
        })
    },
    login:function(){
        wx.request({
          url: 'http://www.hengyishun.cn/login/login',
          data:({
              phone:this.data.phone_number,
              code:this.data.code
          }),
          success(res){
              console.log(res.data)
              if(res.data == "false"){
                  wx.showToast({
                    title: '登录成功',
                  })
                  wx.switchTab({
                    url: '/pages/index/index',
                  })
              }
              else{
                  wx.showToast({
                    title: '登录失败',
                  })
              }
          }
        })
        
    }
})

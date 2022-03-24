// index.js
Page({
    data:{
       navlist:[],
       productlist:[]
    },
    getNavlist:function(){
        let that = this
        wx.request({
          url: 'http://www.hengyishun.cn/login/navlist',
          success(res){
            console.log(res)
            that.setData({
                navlist:res.data
            })
          }
        })
        
    },
    getProductlist:function(){
        let that = this;
        wx.request({
          url: 'http://www.hengyishun.cn/login/getProductList',
          success(res){
              that.setData({
                  productlist:res.data
              });
          }
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getNavlist();
        this.getProductlist();
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

})

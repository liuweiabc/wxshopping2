// pages/info/info.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        id:0,
    },

    addCar:function(){
        var idArray = wx.getStorageSync('idArray')
        var id = this.data.id;
        if(idArray == ''){
            idArray = []
        }
        if(idArray.includes(id)){
            wx.showToast({
              title: '购物车已存在',
            })
        }
        else{
            idArray.push(id)
            wx.setStorageSync('idArray', idArray)
            wx.showModal({
              title:"购物车页面提示",
              content:"添加购物车成功"
            })
        }
       
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id:options.id
        })
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

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})
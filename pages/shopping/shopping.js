// pages/shopping/shopping.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productAllList:[{"id":1,"name":"华为Mate 30","src":"/images/temp/cate1.jpg","price":4099},
        {"id":2,"name":"羽绒服","src":"/images/temp/cate2.jpg","price":4099},
        {"id":3,"name":"华为Mate 30","src":"/images/temp/cate3.jpg","price":4099},
        {"id":4,"name":"羽绒服","src":"/images/temp/cate4.jpg","price":4099},
        {"id":5,"name":"华为Mate 30","src":"/images/temp/cate5.jpg","price":4099},
        {"id":6,"name":"羽绒服","src":"/images/temp/cate6.jpg","price":4099},
        {"id":7,"name":"华为Mate 30","src":"/images/temp/cate7.jpg","price":4099},
        {"id":8,"name":"羽绒服","src":"/images/temp/cate8.jpg","price":4099}],
        productList:[],
        sumprice:0
    },

    judgeChange:function(e){
        var val = e.detail.value;
        var sumprice = this.data.sumprice;
        var p = this.data.productList;
        if(val != ''){
            for(var i = 0;i < p.length;i++){
                if(p[i].id == val){
                    sumprice = sumprice + p[i].price;
                }
            }
        }
        else{
            var id = e.currentTarget.id;
            for(var i = 0;i < p.length;i++){
                if(p[i].id == id){
                    sumprice = sumprice - p[i].price;
                }
            }
        }
        this.setData({
            sumprice:sumprice
        })
    },

    getproduct:function(){
        var idArray = wx.getStorageSync('idArray')
        if(idArray == ''){
            return;
        }
        console.log(idArray)
        var productlist = [];
        var productAllList = this.data.productAllList;
        for(var i = 0;i < productAllList.length;i++){
            if(idArray.includes(String(productAllList[i].id))){
                productlist.push(productAllList[i])
            }
        }
        this.setData({
            productList:productlist
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getproduct();
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
        this.getproduct();
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
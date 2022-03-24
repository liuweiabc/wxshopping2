// pages/classtype/classtype.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        productlist:[],
        productlistAll:[{"id":1,"name":"华为Mate 30","src":"/images/temp/cate1.jpg","price":4099, "classid":1},
        {"id":2,"name":"羽绒服","src":"/images/temp/cate2.jpg","price":4099, "classid":2},
        {"id":3,"name":"华为Mate 30","src":"/images/temp/cate3.jpg","price":4099, "classid":3},
        {"id":4,"name":"羽绒服","src":"/images/temp/cate4.jpg","price":4099, "classid":4},
        {"id":5,"name":"华为Mate 30","src":"/images/temp/cate5.jpg","price":4099, "classid":5},
        {"id":6,"name":"羽绒服","src":"/images/temp/cate6.jpg","price":4099, "classid":1},
        {"id":7,"name":"华为Mate 30","src":"/images/temp/cate7.jpg","price":4099, "classid":2},
        {"id":8,"name":"羽绒服","src":"/images/temp/cate8.jpg","price":4099, "classid":3}],
        typelist:[
            {"id":1,"name":"手机"},
            {"id":2,"name":"平板"},
            {"id":3,"name":"电脑"},
            {"id":4,"name":"古玩"},
            {"id":5,"name":"美妆"}
        ]
    },

    classquery:function(e){
        var p = this.data.productlistAll;
        var classid = e.currentTarget.id;
        var list = [];
        for(var i = 0;i < p.length;i++){
            if(p[i].classid == classid){
                list.push(p[i]);
            }
        }
        this.setData({
            productlist:list
        })
    },


    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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
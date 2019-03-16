var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * Created by CHENBIN on 2019/3/11.
 * 公共数据类
 */
var GloableData = (function () {
    function GloableData() {
    }
    /*
    *初始化后存储是否为移动设备
    *
    */
    GloableData.deviceType = "";
    /*
    *判断是否为真机环境
    *方便执行同步环境下的逻辑
    *默认为true=真机调试  false=本地调试
    */
    GloableData.isDebug = false;
    /*
    *课件数据
    */
    GloableData.quizsData = null;
    /*
    *当前课件第几页
    */
    GloableData.classMax = 0;
    GloableData.M_X = [846.1800000000001, 843.1800000000001, 839.1800000000001, 838.1800000000001, 836.1800000000001, 835.1800000000001, 835.1800000000001, 838.1800000000001, 843.1800000000001, 852.1800000000001, 861.1800000000001, 875.1800000000001, 882.1800000000001, 889.1800000000001, 907.1800000000001, 914.1800000000001, 920.1800000000001, 921.1800000000001, 921.1800000000001, 907.1800000000001, 870.1800000000001, 838.1800000000001, 828.1800000000001, 826.1800000000001, 825.1800000000001, 824.1800000000001, 823.1800000000001];
    GloableData.M_Y = [389, 389, 394, 397, 403, 409, 417, 433, 446, 456, 464, 466, 465, 462, 448, 442, 437, 430, 425, 410, 391, 387, 387, 388, 388, 389, 389];
    GloableData.M_C = [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
    return GloableData;
}());
__reflect(GloableData.prototype, "GloableData");
var EventData;
(function (EventData) {
    /*
    事件ID枚举
    */
    var eventID;
    (function (eventID) {
        eventID[eventID["start"] = 20001] = "start";
        eventID[eventID["end"] = 20005] = "end";
        eventID[eventID["next"] = 20002] = "next";
        eventID[eventID["prev"] = 20003] = "prev";
        eventID[eventID["point"] = 20004] = "point";
    })(eventID = EventData.eventID || (EventData.eventID = {}));
})(EventData || (EventData = {}));
//# sourceMappingURL=GloableData.js.map
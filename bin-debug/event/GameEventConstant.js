var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameEventConstant = (function () {
    function GameEventConstant() {
    }
    //倒计时事件
    GameEventConstant.TIME_EVENT = "TIME_EVENT";
    return GameEventConstant;
}());
__reflect(GameEventConstant.prototype, "GameEventConstant");

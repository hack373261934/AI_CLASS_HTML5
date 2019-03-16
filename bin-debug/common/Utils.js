var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var common;
(function (common) {
    var Utils = (function () {
        function Utils() {
        }
        Utils.getBitmap = function (name) {
            return new egret.Bitmap(RES.getRes(name));
        };
        return Utils;
    }());
    common.Utils = Utils;
    __reflect(Utils.prototype, "common.Utils");
})(common || (common = {}));

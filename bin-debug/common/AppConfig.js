var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var AppConfig = (function () {
    function AppConfig() {
    }
    AppConfig.init = function (stage) {
        this.stageWidth = stage.stageWidth;
        this.stageHeight = stage.stageHeight;
    };
    return AppConfig;
}());
__reflect(AppConfig.prototype, "AppConfig");
//# sourceMappingURL=AppConfig.js.map
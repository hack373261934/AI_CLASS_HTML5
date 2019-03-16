var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BaseUI = (function (_super) {
    __extends(BaseUI, _super);
    function BaseUI(onCompleteEvent, isCenter, openUI) {
        if (onCompleteEvent === void 0) { onCompleteEvent = null; }
        if (isCenter === void 0) { isCenter = false; }
        if (openUI === void 0) { openUI = ""; }
        var _this = _super.call(this) || this;
        _this._isCenter = isCenter;
        _this._opneUi = openUI;
        _this._onCompleteEvent = onCompleteEvent;
        _this.addEventListener(eui.UIEvent.CREATION_COMPLETE, _this.createCompleteEvent, _this);
        return _this;
    }
    BaseUI.prototype.addItem = function (child) {
        var index = this.numChildren;
        if (index < 1) {
            this.addChildAt(child, index);
        }
        else {
            this.addChildAt(child, index);
        }
    };
    BaseUI.prototype.createCompleteEvent = function (e) {
        if (this._onCompleteEvent) {
            EventCenter.dispatchEvent(new GameEvent(this._onCompleteEvent.event, this._onCompleteEvent.par));
        }
    };
    BaseUI.prototype.center = function () {
        if (!this._isCenter) {
            return;
        }
        this.x = (AppConfig.stageWidth - this.width) / 2;
        this.y = (AppConfig.stageHeight - this.height) / 2;
    };
    BaseUI.prototype.show = function () {
        this.visible = true;
    };
    BaseUI.prototype.hide = function () {
        this.visible = false;
    };
    BaseUI.prototype.dispose = function () {
    };
    return BaseUI;
}(eui.Component));
__reflect(BaseUI.prototype, "BaseUI");

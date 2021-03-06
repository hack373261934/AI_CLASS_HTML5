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
/**
 * coder by wangshengwei
 * 2019/3/15
 */
var ConTopicQusItem = (function (_super) {
    __extends(ConTopicQusItem, _super);
    function ConTopicQusItem() {
        var _this = _super.call(this) || this;
        // 是否已经被连接
        _this.isConnected = false;
        // 遮罩状态
        _this.currentMaskState = MASKSTATE.ACTIVE;
        _this.skinName = 'ConTopicQusItemSkin';
        return _this;
    }
    ConTopicQusItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ConTopicQusItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // 
        if (GloableData.deviceType == "Pc") {
            this.activeBtn.visible = true;
        }
    };
    return ConTopicQusItem;
}(eui.Component));
__reflect(ConTopicQusItem.prototype, "ConTopicQusItem", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ConTopicQusItem.js.map
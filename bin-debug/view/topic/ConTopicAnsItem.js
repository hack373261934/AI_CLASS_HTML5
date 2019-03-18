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
var ConTopicAnsItem = (function (_super) {
    __extends(ConTopicAnsItem, _super);
    function ConTopicAnsItem() {
        var _this = _super.call(this) || this;
        // 是否已经被连接
        _this.isConnected = false;
        // 遮罩状态
        _this.currentMaskState = MASKSTATE.ACTIVE;
        _this.skinName = 'ConTopicAnsItemSkin';
        return _this;
    }
    ConTopicAnsItem.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ConTopicAnsItem.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
    };
    return ConTopicAnsItem;
}(eui.Component));
__reflect(ConTopicAnsItem.prototype, "ConTopicAnsItem", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=ConTopicAnsItem.js.map
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
var ui;
(function (ui) {
    var BaseTabBar = (function (_super) {
        __extends(BaseTabBar, _super);
        function BaseTabBar(layout, widthN, heightN) {
            var _this = _super.call(this) || this;
            _this.nowHeight = 0;
            _this.nowWidth = 0;
            _this.widthN = 0;
            _this.heightN = 0;
            _this.items = [];
            _this.buttonTF = [];
            _this.layoutType = layout;
            _this.widthN = widthN;
            _this.heightN = heightN;
            return _this;
        }
        /*
         * 一般现实对象都在UI编辑器里边摆好位置了
         * 这里只对排列方式进行布局
         * */
        BaseTabBar.prototype.addItem = function (item, type) {
            if (this.layoutType == 1) {
                item.y = 0;
                item.x = this.nowWidth;
                this.nowWidth += item.width + this.widthN;
            }
            else {
                item.x = 0;
                item.y = this.nowHeight;
                this.nowHeight += item.height + this.heightN;
            }
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this._selectItem, this);
            this.addChild(item);
            if (type == 0) {
                this.items.push(item);
            }
            else {
                this.buttonTF.push(item);
                //item.y = 20
            }
        };
        BaseTabBar.prototype.addItems = function (items, type, defShow) {
            if (type === void 0) { type = 0; }
            if (defShow === void 0) { defShow = 0; }
            var i, m;
            for (i = 0, m = items.length; i < m; i++) {
                this.addItem(items[i], type);
            }
            if (type == 0)
                items[defShow].dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP));
        };
        BaseTabBar.prototype.selectItem = function (index) {
            var item = this.items[index];
            item.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP));
            return item;
        };
        BaseTabBar.prototype.itemRepPos = function (index) {
            this.addChild(this.items[index]);
        };
        BaseTabBar.prototype._selectItem = function (e) {
            if (e === void 0) { e = null; }
            var i, m;
            var clickButtonIndex;
            for (i = 0, m = this.items.length; i < m; i++) {
                var item = this.items[i];
                var btn = item;
                if (e.currentTarget === item) {
                    if (btn.enabled) {
                        btn.currentState = "down";
                        this.setChildIndex(item, this.items.length - 1);
                    }
                    //item.y = 0;
                    clickButtonIndex = i;
                }
                else {
                    if (btn.enabled) {
                        this.setChildIndex(item, i);
                        btn.currentState = "up";
                    }
                    //item.y = 10;
                }
            }
            for (i = 0, m = this.buttonTF.length; i < m; i++) {
                var item = this.buttonTF[i];
                if (i == clickButtonIndex) {
                    item.currentState = "down";
                    //item.y = 10;
                }
                else {
                    item.currentState = "up";
                    //item.y = 20;
                }
            }
        };
        BaseTabBar.prototype.dispose = function () {
            this.removeChildren();
            if (this.parent) {
                this.parent.removeChild(this);
            }
        };
        return BaseTabBar;
    }(eui.Group));
    ui.BaseTabBar = BaseTabBar;
    __reflect(BaseTabBar.prototype, "ui.BaseTabBar");
})(ui || (ui = {}));

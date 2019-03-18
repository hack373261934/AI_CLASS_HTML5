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
var MainUIView = (function (_super) {
    __extends(MainUIView, _super);
    function MainUIView() {
        var _this = _super.call(this) || this;
        _this.winMap = new Dictionary();
        _this.currentShowView = [];
        _this.uiLayer = new egret.DisplayObjectContainer();
        _this.addChild(_this.uiLayer);
        _this.otherLayer = new egret.DisplayObjectContainer();
        _this.addChild(_this.otherLayer);
        _this.mainLayer = new egret.DisplayObjectContainer();
        _this.addChild(_this.mainLayer);
        return _this;
    }
    MainUIView.prototype.addItem = function (view) {
        this.uiLayer.addChild(view);
    };
    MainUIView.prototype.addViewToOtherLayer = function (view) {
        this.otherLayer.addChild(view);
    };
    MainUIView.getInstance = function () {
        if (MainUIView._instance == null) {
            MainUIView._instance = new MainUIView();
        }
        return MainUIView._instance;
    };
    MainUIView.prototype.showView = function (view, meadiatorName, show) {
        if (show === void 0) { show = false; }
        if (!this.winMap.containsKey(meadiatorName)) {
            this.winMap.add(meadiatorName, view);
            this.uiLayer.addChild(view);
            if (show) {
                view.show();
            }
            else {
                view.hide();
            }
        }
    };
    MainUIView.prototype.showViewByMediatorName = function (meadiatorName) {
        if (this.winMap.containsKey(meadiatorName)) {
            var win = this.winMap.getValue(meadiatorName);
            win.show();
        }
    };
    MainUIView.prototype.closeAllView = function () {
        var i;
        var m = this.currentShowView.length;
        for (i = 0; i < m; i++) {
            var name = this.currentShowView[i];
            this.closeView(name);
            i--;
            m = this.currentShowView.length;
        }
    };
    MainUIView.prototype.getViewIsShow = function (meadiatorName) {
        var win = this.winMap.getValue(meadiatorName);
        if (win) {
            return win.visible;
        }
        return false;
    };
    MainUIView.prototype.hideView = function (meadiatorName) {
        var win = this.winMap.getValue(meadiatorName);
        if (win) {
            win.hide();
        }
    };
    MainUIView.prototype.closeView = function (meadiatorName) {
        var index = this.currentShowView.indexOf(meadiatorName);
        if (index !== -1) {
            this.currentShowView.splice(index, 1);
        }
        if (this.winMap.containsKey(meadiatorName)) {
            var win = this.winMap.getValue(meadiatorName);
            win.hide();
            AppFacade.getInstance().delMediatorByName(meadiatorName);
            this.winMap.remove(meadiatorName);
            if (win.parent) {
                win.parent.removeChild(win);
            }
            win.dispose();
            win = null;
            //if(this.winMap.containsKey(meadiatorName)){
            //
            //    this.closeView(meadiatorName)
            //}
        }
    };
    return MainUIView;
}(egret.DisplayObjectContainer));
__reflect(MainUIView.prototype, "MainUIView");
//# sourceMappingURL=MainUIView.js.map
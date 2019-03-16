var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mediator = (function () {
    function Mediator(name, viewComponent, openView) {
        if (openView === void 0) { openView = ""; }
        this.callBackView = "";
        this.name = name;
        this.viewComponent = viewComponent;
        this.onEventCenterRegister();
        this.onViewRegister();
        this.openPanel();
        this._viewComponent.center();
    }
    Mediator.prototype.onViewRegister = function () {
    };
    Mediator.prototype.onViewRemove = function () {
    };
    Mediator.prototype.onEventCenterRegister = function () {
    };
    Mediator.prototype.onEventCenterRemove = function () {
    };
    Mediator.prototype.openPanel = function () {
    };
    Mediator.prototype.removeListener = function () {
        this.onEventCenterRemove();
        this.onViewRemove();
        this.viewComponent = null;
    };
    Object.defineProperty(Mediator.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Mediator.prototype, "viewComponent", {
        get: function () {
            return this._viewComponent;
        },
        set: function (value) {
            this._viewComponent = value;
        },
        enumerable: true,
        configurable: true
    });
    Mediator.prototype.callback = function () {
    };
    return Mediator;
}());
__reflect(Mediator.prototype, "Mediator");
//# sourceMappingURL=Mediator.js.map
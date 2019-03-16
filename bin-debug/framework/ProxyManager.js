var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * @author zhao teng xi
 * 要在这里添加Proxy用于服务器通信
 * 在这里添加Proxy是为了服务器返回消息可以监听到
 */
var ProxyManager = (function () {
    function ProxyManager() {
    }
    ProxyManager.start = function () {
        //AppFacade.getInstance().registerProxy(new netProxy.LoginProxy());
    };
    return ProxyManager;
}());
__reflect(ProxyManager.prototype, "ProxyManager");

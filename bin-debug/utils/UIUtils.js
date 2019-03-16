var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var utils;
(function (utils) {
    var UIUtils = (function () {
        function UIUtils() {
        }
        UIUtils.getBitmap = function (name) {
            return new egret.Bitmap(RES.getRes(name));
        };
        UIUtils.showNum = function (parent, num, titleName, isremove) {
            if (isremove === void 0) { isremove = true; }
            if (isremove) {
                while (parent.numChildren) {
                    parent.removeChildAt(0);
                }
            }
            if (num < 0)
                return;
            var str = num.toString();
            var arr = str.split('.');
            str = arr[0];
            var num_pic;
            var num_x = 0;
            //console.debug((parent instanceof egret.) +"")
            for (var i = 0; i < str.length; i++) {
                num_pic = new eui.Image();
                //var bit:egret.Bitmap = UIUtils.getBitmap(titleName + str.charAt(i))
                num_pic.source = RES.getRes(name);
                num_pic.x = num_x;
                //if( parent instanceof egret.DisplayObjectContainer){
                parent.addChild(num_pic);
                //}else{
                //    (<egret.DisplayObjectContainer>parent).addChild(num_pic);
                //}
                num_x += num_pic.width;
            }
        };
        /**
         *
         * @param value 时间 毫秒为单位
         * @param type 1 00:30  分:秒
         *             2 00:00:00 时分秒
         *               3 3600 秒
         * @return
         *
         */
        UIUtils.getTime = function (value, type) {
            if (type === void 0) { type = 1; }
            var _lastTime;
            var tempS = Math.floor(value / 1000);
            var s = Math.floor(tempS % 60);
            var m = Math.floor(tempS / 60);
            m = m >= 60 ? Math.floor(m % 60) : m;
            var h = Math.floor(tempS / 3600);
            if (h > 24 && type == 4) {
                return Math.floor(h / 24) + "天";
            }
            switch (type) {
                case 1:
                    _lastTime = this.addPlace(m) + ":" + this.addPlace(s);
                    break;
                case 2:
                    _lastTime = this.addPlace(h) + ":" + this.addPlace(m) + ":" + this.addPlace(s);
                    break;
                case 3:
                    _lastTime = tempS.toString();
                    break;
            }
            return _lastTime;
        };
        /**
         * 补位
         * @param n 要补位的数字
         * @param placeStr 要补 的字符串
         * @param place 总共多少位
         * @param placeBefore 不在前面
         * @return
         *
         */
        UIUtils.addPlace = function (n, placeStr, place, placeBefore) {
            if (placeStr === void 0) { placeStr = "0"; }
            if (place === void 0) { place = 2; }
            if (placeBefore === void 0) { placeBefore = true; }
            var needPlace = "";
            var need = place - n.toString().length;
            for (var i = 0; i < need; i++) {
                needPlace += placeStr;
            }
            return placeBefore ? needPlace + n : n + needPlace;
        };
        return UIUtils;
    }());
    utils.UIUtils = UIUtils;
    __reflect(UIUtils.prototype, "utils.UIUtils");
})(utils || (utils = {}));

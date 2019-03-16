var utils;
(function (utils) {
    /**
     * 对两张图片进行布局 主要用于按钮
     * @param upName 上一张图片的名字
     * @param downName 地下图片的名字
     * */
    function picLayoutCenter(upName, downName) {
        var sp = new egret.DisplayObjectContainer();
        var up = new egret.Bitmap();
        up.texture = RES.getRes(upName);
        var down = new egret.Bitmap();
        down.texture = RES.getRes(downName);
        sp.addChild(down);
        sp.addChild(up);
        up.x = (down.width - up.width) / 2;
        up.y = (down.height - up.height) / 2;
        return sp;
    }
    utils.picLayoutCenter = picLayoutCenter;
})(utils || (utils = {}));

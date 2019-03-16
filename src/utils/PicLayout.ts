
module utils{

    /**
     * 对两张图片进行布局 主要用于按钮
     * @param upName 上一张图片的名字
     * @param downName 地下图片的名字
     * */
    export function picLayoutCenter(upName:string,downName:string):egret.DisplayObjectContainer{

        var sp:egret.DisplayObjectContainer = new egret.DisplayObjectContainer();

        var up:egret.Bitmap = new egret.Bitmap();
        up.texture = RES.getRes(upName);

        var down:egret.Bitmap = new egret.Bitmap();
        down.texture = RES.getRes(downName);

        sp.addChild(down);
        sp.addChild(up);
        up.x = (down.width - up.width)/2;
        up.y = (down.height - up.height)/2;

        return sp;
    }
}

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
 * Created by CHENBIN on 2019/3/11.
 * 序列帧工具类
 */
var MovieClip = (function (_super) {
    __extends(MovieClip, _super);
    /**
     *
     * @param json MovieClipDataFactory传入的json
     * @param texture MovieClipDataFactory传入的纹理texture
     * @param mc   播放名字
     * @param count 播放次数
     * @param mcx 定位X
     * @param mcy 定位Y
     */
    function MovieClip(json, texture, mc, count, mcx, mcy) {
        var _this = _super.call(this) || this;
        _this.onAddToStage(json, texture, mc, count, mcx, mcy);
        return _this;
    }
    MovieClip.prototype.onAddToStage = function (json, texture, mc, count, mcx, mcy) {
        var config = RES.getRes(json);
        var texture = RES.getRes(texture);
        this._MovieClipDataFactory = new egret.MovieClipDataFactory(config, texture);
        this._MovieClip = new egret.MovieClip(this._MovieClipDataFactory.generateMovieClipData(mc));
        this._MovieClip.addEventListener(egret.Event.COMPLETE, this.movieClipComplete, this);
        this._MovieClip.play(count);
        this._MovieClip.x = mcx;
        this._MovieClip.y = mcy;
        this.addChild(this._MovieClip);
    };
    MovieClip.prototype.movieClipComplete = function () {
        console.log("MovieClip播放完成！");
        //EventCenter.dispatchEvent(new egret.Event(GameEventConstant.MOVIECLIP_COMPLETE));
    };
    return MovieClip;
}(egret.DisplayObjectContainer));
__reflect(MovieClip.prototype, "MovieClip");
//# sourceMappingURL=BaseMovieClip.js.map
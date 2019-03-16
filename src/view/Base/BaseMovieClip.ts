/**
 * Created by CHENBIN on 2019/3/11.
 * 序列帧工具类
 */
class MovieClip extends egret.DisplayObjectContainer {
    public _MovieClip: egret.MovieClip;
    public _MovieClipDataFactory: egret.MovieClipDataFactory;
    /**
     *
     * @param json MovieClipDataFactory传入的json
     * @param texture MovieClipDataFactory传入的纹理texture
     * @param mc   播放名字
     * @param count 播放次数
     * @param mcx 定位X
     * @param mcy 定位Y
     */
    constructor(json: string, texture: string, mc: string, count: number,mcx:number,mcy:number) {
        super();
        this.onAddToStage(json, texture, mc, count,mcx,mcy);
    }

    public onAddToStage(json: string, texture: any, mc: string, count: number,mcx:number,mcy:number): void {
        var config = RES.getRes(json);
        var texture = RES.getRes(texture);
        this._MovieClipDataFactory = new egret.MovieClipDataFactory(config, texture);
        this._MovieClip = new egret.MovieClip(this._MovieClipDataFactory.generateMovieClipData(mc));
        this._MovieClip.addEventListener(egret.Event.COMPLETE, this.movieClipComplete, this);
        this._MovieClip.play(count);
        this._MovieClip.x=mcx;
        this._MovieClip.y=mcy;
        this.addChild(this._MovieClip);

    }

    public movieClipComplete(): void {
        console.log("MovieClip播放完成！");
        //EventCenter.dispatchEvent(new egret.Event(GameEventConstant.MOVIECLIP_COMPLETE));
    }
}
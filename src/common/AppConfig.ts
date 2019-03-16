
class AppConfig{
    public static stageWidth:number;
    public static stageHeight:number;
    public static init(stage:egret.Stage):void{
        this.stageWidth=stage.stageWidth;
        this.stageHeight=stage.stageHeight;

    }
}
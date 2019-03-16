
class BaseUI extends eui.Component{
    private _isCenter:boolean;
    private _opneUi:string;

    public _onCompleteEvent:any;
    public constructor(onCompleteEvent:any=null,isCenter:boolean=false,openUI:string=""){
        super();

        this._isCenter=isCenter;
        this._opneUi=openUI;
        this._onCompleteEvent=onCompleteEvent;
        this.addEventListener(eui.UIEvent.CREATION_COMPLETE, this.createCompleteEvent, this);

    }
    public addItem(child:egret.DisplayObject):void{
        var index:number = this.numChildren;
        if(index < 1){
            this.addChildAt(child,index);
        }else{
            this.addChildAt(child,index);
        }

    }
    public createCompleteEvent(e:eui.UIEvent):void{
        if(this._onCompleteEvent){
            EventCenter.dispatchEvent(new GameEvent(this._onCompleteEvent.event,this._onCompleteEvent.par))

        }

    }
    public center():void{
        if(!this._isCenter){
            return;
        }
        this.x=(AppConfig.stageWidth-this.width)/2;
        this.y=(AppConfig.stageHeight-this.height)/2;
    }
    public show():void{
        this.visible=true;
    }
    public hide():void{
        this.visible=false;
    }
    public dispose():void{

    }
}

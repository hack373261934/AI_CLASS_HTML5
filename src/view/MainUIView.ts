
class MainUIView extends egret.DisplayObjectContainer{
    private static _instance:MainUIView;
    /*
    * 主界面按钮层
    * */
    public mainLayer:egret.DisplayObjectContainer;
    /*
     * 界面层（城镇，队伍，等。。。。）
     * */
    public uiLayer:egret.DisplayObjectContainer;
    /*
     * 备用层
     * */
    public otherLayer:egret.DisplayObjectContainer;

    public winMap:Dictionary=new Dictionary();
    public currentShowView:string[]=[];

    public constructor(){
        super();
        this.uiLayer=new egret.DisplayObjectContainer();
        this.addChild(this.uiLayer);
        this.otherLayer=new egret.DisplayObjectContainer();
        this.addChild(this.otherLayer);
        this.mainLayer=new egret.DisplayObjectContainer();
        this.addChild(this.mainLayer);
    }
    public addItem(view:egret.DisplayObjectContainer):void{

        this.uiLayer.addChild(view)
    }
    public addViewToOtherLayer(view:egret.DisplayObjectContainer):void{
        this.otherLayer.addChild(view);
    }
    public static getInstance():MainUIView{
        if(MainUIView._instance == null){
            MainUIView._instance = new MainUIView();
        }
        return MainUIView._instance;
    }
    public showView(view:BaseUI,meadiatorName:string, show:Boolean=false):void{
      
        if (!this.winMap.containsKey(meadiatorName))
        {
            this.winMap.add(meadiatorName, view);
            this.uiLayer.addChild(view);


            if(show){
                view.show();
            }
            else{
               view.hide();
            }



        }
    }
    public showViewByMediatorName(meadiatorName:string):void{
        if(this.winMap.containsKey(meadiatorName)){
            var win:BaseUI=this.winMap.getValue(meadiatorName);
            win.show();
        }
    }
    public closeAllView():void{
        var i:number ;
        var m:number = this.currentShowView.length;
        for( i = 0;i<m;i++){
            var name:string = this.currentShowView[i];
            this.closeView(name);
            i--;
            m = this.currentShowView.length
        }
    }
    public getViewIsShow(meadiatorName:string):boolean{
        var win:BaseUI=this.winMap.getValue(meadiatorName);
        if(win){
            return win.visible;
        }
        return false
    }
    public hideView(meadiatorName:string):void{
        var win:BaseUI=this.winMap.getValue(meadiatorName);
        if(win){
            win.hide();
        }
    }
    public closeView(meadiatorName:string):void{
        var index:number = this.currentShowView.indexOf(meadiatorName);
        if(index !== -1){
            this.currentShowView.splice(index,1)
        }
        if (this.winMap.containsKey(meadiatorName))
        {
            var win:BaseUI=this.winMap.getValue(meadiatorName);
            win.hide();
            AppFacade.getInstance().delMediatorByName(meadiatorName);
            this.winMap.remove(meadiatorName);
            if (win.parent)
            {
                win.parent.removeChild(win);
            }
            win.dispose();
            win=null;
            //if(this.winMap.containsKey(meadiatorName)){
            //
            //    this.closeView(meadiatorName)
            //}
        }
    }

}
class Mediator{
    private _viewComponent:egret.DisplayObjectContainer;
    private _name:string;
    public  callBackView:string = "";
    public constructor(name:string, viewComponent:egret.DisplayObjectContainer, openView:string = "") {

        this.name = name;
        this.viewComponent = viewComponent;
        this.onEventCenterRegister();
        this.onViewRegister();
        this.openPanel();
        (<BaseUI>this._viewComponent).center();

    }

    public onViewRegister():void {

    }

    public  onViewRemove():void {

    }

    public onEventCenterRegister():void {

    }

    public onEventCenterRemove():void {

    }

    public openPanel():void {

    }

    public removeListener():void {
        this.onEventCenterRemove();
        this.onViewRemove();
        this.viewComponent = null;
    }

    public get name():string {
        return this._name;
    }

    public set name(value:string) {
        this._name = value;
    }

    public get viewComponent():egret.DisplayObjectContainer {
        return this._viewComponent;
    }

    public set viewComponent(value:egret.DisplayObjectContainer) {
        this._viewComponent = value;
    }

    public callback():void {

    }

}

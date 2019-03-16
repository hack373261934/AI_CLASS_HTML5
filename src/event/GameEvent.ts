
class GameEvent extends egret.Event{
    public parameter : any;
    public constructor(type: string,parameter?: any, bubbles?: boolean, cancelable?: boolean){
        super(type,bubbles,cancelable);
        this.parameter=parameter;
    }

}
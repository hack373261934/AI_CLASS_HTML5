

class EventCenter{
    private static instance:egret.EventDispatcher = new egret.EventDispatcher();

    static addEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean, priority?: number){
        this.instance.addEventListener(type, listener, thisObject, useCapture, priority)
    }
    static dispatchEvent(e:egret.Event){
        this.instance.dispatchEvent(e);
    }
    static hasEventListener(type: string):boolean{
        return this.instance.hasEventListener(type)
    }
    static removeEventListener(type: string, listener: Function, thisObject: any, useCapture?: boolean){
        this.instance.removeEventListener(type, listener, thisObject, useCapture)
    }
}


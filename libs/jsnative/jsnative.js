function dispathchEventToStage(msg){
    var context = egret.MainContext.instance;
    console.log("egret.Capabilities.os : " + egret.Capabilities.os);
    if(egret.Capabilities.os&&egret.Capabilities.os==='iOS'){
        console.log('ios platform');
        if(msg&&msg.eventData){
            context.stage.dispatchEventWith("onReceiveEvent", false,msg.eventData,false);
        }else{
            console.log('msg || msg.eventData is empty.');
        }
    }else{
        context.stage.dispatchEventWith("onReceiveEvent", false,msg,false);
    }
}
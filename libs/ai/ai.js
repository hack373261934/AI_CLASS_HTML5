//开启音频检测
function listenToKeyword(keywords,callback){
    var param ={
        keywords:keywords
    }
     var  bridge = window.WebViewJavascriptBridge;
    bridge.callHandler('listenToKeyword',param,callback);
}

//停止关键词监听
function stopListenKeyword(){
    var param={}
    var  bridge = window.WebViewJavascriptBridge;
    bridge.callHandler('stopListenKeyword',param,function(){});
}

function getNativeEnvVal(callback,thisObj){
    var param={}
     if(egret.Capabilities.os&&egret.Capabilities.os==='iOS'){
         var  bridge = window.WebViewJavascriptBridge;
         bridge.callHandler('getEnvVal',param,function(data){
             if(typeof data == "string"){
                 console.log("string")
                callback.apply(data,thisObj);
             }
            else{
                console.log("object")
                callback.apply(data,thisObj);
            } 
         });
     }else{
        window.getEnvVal(callback);
     }
}

//window.getEnvVal = getEnvVal;
window.listenToKeyword = listenToKeyword;
window.stopListenKeyword = stopListenKeyword;
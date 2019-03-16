function dispatchEvent(msg) {
    alert("call dispatchEvent method : "+msg);
    //js 调用 ts 的方法，通过事件派发到 stage
    dispathchEventToStage(msg.eventData);
}

function setNextNode(sourceNodeLid,targetNodeLid){
    var param = {
        sourceNodeLid : sourceNodeLid ,
        targetNodeLid : targetNodeLid
    };  
    var  bridge = window.WebViewJavascriptBridge;
    bridge.callHandler('setNextNode',param,function(){
        console.log('call setNextNode')
    });
}

//msg:事件内容，json格式数据
//eventType:事件类型，0：普通事件；1：开始上课事件；2：下课事件
function sendImEventMsg(msg,eventType){
    console.log("sendImEventMsg"+ msg +" "+eventType);
    if(egret.Capabilities.os&&egret.Capabilities.os==='iOS'){
        console.log("call sendImEventMsg for ios platform.");
        var data ={
            msgString:msg
        }
        //根据平台区分
         var  bridge = window.WebViewJavascriptBridge;
        bridge.callHandler('sendEventMsg',data,function(){
            console.log('call sendEventMsg'+ JSON.stringify(data));
        });
    }else{
        //call windows的方法
        sendEventMsg(msg,eventType);
    }
}
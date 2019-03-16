
class AppFacade
{
    private  static instance:AppFacade;
    private mediatorDictionary:Dictionary=new Dictionary();
    private proxyDictionary:Dictionary=new Dictionary();

    public constructor(){

    }
    
    public static  getInstance():AppFacade
    {
        if(this.instance == null){
            this.instance = new AppFacade();
        }
        return <AppFacade>this.instance;
    }
    
    public registerMediator(mediator:Mediator):void{
        this.mediatorDictionary[mediator.name]=mediator;
    }
    
    public registerProxy(proxy:Proxy):void{
        this.proxyDictionary[proxy.name]=proxy;
    }
    
    public getProxyByName(name:string):Proxy{
        return <Proxy>this.proxyDictionary[name];
    }

    public getMediatorByName(name:string):Mediator{
        return <Mediator>this.mediatorDictionary[name];
    }    

    public delMediatorByName(name:string):void{
        var med:Mediator=this.mediatorDictionary[name];
        if(med){
            med.removeListener();
        }
        
        this.mediatorDictionary[name]=null;
        delete this.mediatorDictionary[name];
    }
    
    public startUp():void{
        ProxyManager.start();
    }
}
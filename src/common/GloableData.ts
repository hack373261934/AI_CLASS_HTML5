/**
 * Created by CHENBIN on 2019/3/11.
 * 公共数据类
 */
class GloableData {
    /* 
    *初始化后存储是否为移动设备
    *
    */
    public static deviceType: string = "";

    /* 
    *判断是否为真机环境
    *方便执行同步环境下的逻辑
    *默认为true=真机调试  false=本地调试
    */
    public static isDebug: boolean = true;

    /* 
    *课件数据
    */
    public static quizsData: any = null;

    /* 
    *当前课件第几页
    */
    public static  classMax: number = 0;

    public static M_X:Array<number>=[846.1800000000001,843.1800000000001,839.1800000000001,838.1800000000001,836.1800000000001,835.1800000000001,835.1800000000001,838.1800000000001,843.1800000000001,852.1800000000001,861.1800000000001,875.1800000000001,882.1800000000001,889.1800000000001,907.1800000000001,914.1800000000001,920.1800000000001,921.1800000000001,921.1800000000001,907.1800000000001,870.1800000000001,838.1800000000001,828.1800000000001,826.1800000000001,825.1800000000001,824.1800000000001,823.1800000000001];
     public static M_Y:Array<number>=[389,389,394,397,403,409,417,433,446,456,464,466,465,462,448,442,437,430,425,410,391,387,387,388,388,389,389];
     public static M_C:Array<boolean>=[false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
}

module EventData {
    /*
    事件ID枚举
    */
    export enum eventID {
        start = 20001,//开始上课å
         end = 20005,//开始上课å
        next = 20002,//切换下一题
        prev = 20003,//切换上一题
        point = 20004,//画笔事件
    }
}
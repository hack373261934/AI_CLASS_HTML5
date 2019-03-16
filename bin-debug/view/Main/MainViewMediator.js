var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
/**
 * Created by 狗蛋儿 on 16/9/26.*
 */
var ui;
(function (ui) {
    var MainViewMediator = (function (_super) {
        __extends(MainViewMediator, _super);
        function MainViewMediator(view) {
            return _super.call(this, MainViewMediator.NAME, view) || this;
        }
        Object.defineProperty(MainViewMediator.prototype, "view", {
            get: function () {
                return this.viewComponent;
            },
            enumerable: true,
            configurable: true
        });
        MainViewMediator.prototype.onViewRegister = function () {
            this.view.stage.addEventListener("onReceiveEvent", this.handleEvent, this);
            this.view.BtnEnd.addEventListener(egret.TouchEvent.TOUCH_TAP, this.endClass, this);
            this.view.BtnNext.addEventListener(egret.TouchEvent.TOUCH_TAP, this.nextClass, this);
            this.view.BtnPrev.addEventListener(egret.TouchEvent.TOUCH_TAP, this.prevClass, this);
            this.view.BtnStart.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startClass, this);
            this.view.BtnAni.addEventListener(egret.TouchEvent.TOUCH_TAP, this.startAni, this);
            this.view.pan_01.addEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.pan_02.addEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.pan_03.addEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.BtnClearPan.addEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
        };
        MainViewMediator.prototype.onViewRemove = function () {
            this.view.BtnEnd.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.endClass, this);
            this.view.BtnNext.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.nextClass, this);
            this.view.BtnPrev.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.prevClass, this);
            this.view.BtnStart.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startClass, this);
            this.view.BtnAni.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.startAni, this);
            this.view.pan_01.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.pan_02.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.pan_03.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.BtnClearPan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
        };
        MainViewMediator.prototype.onEventCenterRegister = function () {
            // EventCenter.addEventListener(GameEventConstant.CLOSE_SERVERLIST,this.updateView,this);
            // EventCenter.addEventListener(GameEventConstant.SELECT_SERVER,this.initView,this);
        };
        MainViewMediator.prototype.onEventCenterRemove = function () {
        };
        MainViewMediator.prototype.testLiang = function () {
            // var params: any = "良建测试";
            // getEnvVal(function (data) {
            //     alert(data);
            // });
        };
        MainViewMediator.prototype.handleEvent = function (e) {
            MainViewHandle.getInstance().setHandle(this.view, e.data);
        };
        MainViewMediator.prototype.initPan = function (e) {
            this.view.BtnClearPan.enabled = true;
            switch (e.currentTarget) {
                case this.view.pan_01:
                    console.log("选择了“红色”画笔");
                    var _Pencil = new Pencil(0xFF0000, 10, [], [], []);
                    this.view.PenGroup.visible = true;
                    this.view.PenGroup.addChild(_Pencil);
                    alert("画笔区域宽：" + this.view.PenGroup.width + "----画笔区域高" + this.view.PenGroup.height);
                    break;
                case this.view.pan_02:
                    console.log("选择了“黄色”画笔");
                    var _Pencil = new Pencil(0xFFFF00, 10, [], [], []);
                    this.view.PenGroup.visible = true;
                    this.view.PenGroup.addChild(_Pencil);
                    break;
                case this.view.pan_03:
                    console.log("选择了“蓝色”画笔");
                    var _Pencil = new Pencil(0x0000FF, 10, [], [], []);
                    this.view.PenGroup.visible = true;
                    this.view.PenGroup.addChild(_Pencil);
                    break;
                default:
                    console.log("清除画笔");
                    this.view.PenGroup.removeChildren();
                    ;
                    this.view.PenGroup.visible = false;
                    this.view.BtnClearPan.enabled = false;
            }
        };
        MainViewMediator.prototype.startAni = function () {
            //创建 Sound 对象
            var sound = new egret.Sound();
            var url = "resource/assets/1.wav";
            //添加加载完成侦听
            sound.addEventListener(egret.Event.COMPLETE, this.onLoadComplete, this);
            //开始加载
            sound.load(url);
        };
        MainViewMediator.prototype.onLoadComplete = function (event) {
            //获取加载到的 Sound 对象
            var sound = event.target;
            //播放音乐
            var channel = sound.play(0, 1);
            this._fish = new MovieClip("fish_jinyugongzhu_json", "fish_jinyugongzhu_png", "fish_jinyugongzhu_idle", -1, 600, 200);
            this.view.AniGroup.addChild(this._fish);
            channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onSoundComplete, this);
        };
        MainViewMediator.prototype.onSoundComplete = function (event) {
            egret.log("onSoundComplete");
            this._fish.gotoAndStop();
        };
        MainViewMediator.prototype.startClass = function () {
            console.log(EventData.eventID.start);
            // 拼接参数
            var params = "{\"type\":" + EventData.eventID.start + ", \"quizId\":" + GloableData.quizsData.data.quizs[GloableData.classMax].quizId + ",\"quizItemId\":222,\"lessonLid\":100001,\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
            if (GloableData.isDebug == true) {
                sendImEventMsg(params, 1);
            }
            else {
                dispathchEventToStage(params);
            }
            this.view.timer.stop();
            this.view.DialogGroup.visible = false;
        };
        MainViewMediator.prototype.endClass = function () {
            // 拼接参数
            alert("结束");
            var params = "{\"type\":" + EventData.eventID.end + ", \"quizId\":-1,\"quizItemId\":-1,\"lessonLid\":100001,\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
            alert(params);
            sendImEventMsg(params, 2);
        };
        MainViewMediator.prototype.prevClass = function () {
            var _this = this;
            //var time = utils.UIUtils.getTime(1034049494, 1);
            //console.log("=======" + time);
            console.log("上一题");
            if (GloableData.classMax != 0) {
                this.view.GroupBox.removeChildren();
                GloableData.classMax -= 1;
                this.view.BtnNext.enabled = true;
                if (GloableData.classMax === 0) {
                    this.view.BtnPrev.enabled = false;
                }
                RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizBgImages[0].mediaUrl, function (data) {
                    console.log(data);
                    var image = new eui.Image();
                    image.source = data;
                    //image.source = this.testDate.kjbg[0].imgSrc;
                    _this.view.GroupBox.addChild(image);
                    image.x = _this.view.stage.stageWidth / 2 - image.width / 2;
                    image.y = 0;
                }, this, RES.ResourceItem.TYPE_IMAGE);
            }
            var params = "{\"type\":" + EventData.eventID.prev + ", \"quizId\":" + GloableData.quizsData.data.quizs[GloableData.classMax].quizId + ",\"quizItemId\":222,\"lessonLid\":100001,\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
            if (GloableData.isDebug == true) {
                sendImEventMsg(params, 1);
            }
            else {
                dispathchEventToStage(params);
            }
        };
        MainViewMediator.prototype.nextClass = function () {
            var _this = this;
            console.log("下一题");
            this.view.PenGroup.removeChildren();
            ;
            this.view.PenGroup.visible = false;
            this.view.BtnClearPan.enabled = false;
            GloableData.classMax += 1;
            if (GloableData.classMax != GloableData.quizsData.data.quizs.length) {
                this.view.GroupBox.removeChild(this.view.classTI);
                this.view.BtnPrev.enabled = true;
                RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizBgImages[0].mediaUrl, function (data) {
                    _this.view.classTI = new eui.Image;
                    _this.view.classTI.source = data;
                    _this.view.GroupBox.addChild(_this.view.classTI);
                    _this.view.classTI.x = 0;
                    _this.view.classTI.y = 0;
                }, this, RES.ResourceItem.TYPE_IMAGE);
                // //画一个转场背景图
                // this.imgBg = new egret.Bitmap();
                // this.imgBg.texture = RES.getRes("test_jpg");
                // this.imgBg.x = (this.view.GroupBox.width - this.imgBg.width) / 2;
                // this.view.AniGroup.addChild(this.imgBg);
                // //画一个圆形的遮罩
                // this.circle = new egret.Shape();
                // this.circle.graphics.beginFill(0x0000ff);
                // this.circle.graphics.drawCircle(0, 0, 620);
                // this.circle.graphics.endFill();
                // this.circle.scaleX = 0;
                // this.circle.scaleY = 0;
                // this.circle.x = this.view.GroupBox.width / 2;
                // this.circle.y = this.view.GroupBox.height / 2;
                // //    this.circle.anchorOffsetX = this.circle.width / 2;
                // // this.circle.anchorOffsetY = this.circle.width / 2;
                // this.view.AniGroup.addChild(this.circle);
                // this.imgBg.mask = this.circle;
                // egret.Tween.get(this.circle, {
                //     loop: false,//设置循环播放
                //     onChangeObj: this//更新函数作用域
                // })
                //     .to({ scaleX: 1, scaleY: 1, anchorOffsetX: 0.5, anchorOffsetY: 0.5 }, 500)
                //     // .to({ scaleX: 0.5, scaleY: 5 }, 300)
                //     // .to({ scaleX: 0.75, scaleY: 0.75 }, 300)
                //     // .to({ scaleX: 1, scaleY: 1 }, 300)
                //     .call(this.maskOnComplate, this);//设置回调函数及作用域，可用于侦听动画完成
            }
            else {
                if (GloableData.classMax == GloableData.quizsData.data.quizs.length) {
                    this.view.DialogGroup.visible = true;
                    this.view.start.visible = false;
                    this.view.end.visible = true;
                    this.view.GroupBox.removeChild(this.view.classTI);
                }
            }
            // 拼接参数
            var params = "{\"type\":" + EventData.eventID.next + ", \"quizId\":" + GloableData.quizsData.data.quizs[GloableData.classMax].quizId + ",\"quizItemId\":222,\"lessonLid\":100001,\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
            if (GloableData.isDebug == true) {
                sendImEventMsg(params, 1);
            }
            else {
                dispathchEventToStage(params);
            }
        };
        MainViewMediator.NAME = "MainViewMediator";
        return MainViewMediator;
    }(Mediator));
    ui.MainViewMediator = MainViewMediator;
    __reflect(MainViewMediator.prototype, "ui.MainViewMediator");
    // private prevContent(event: egret.Event): void {
    //     egret.ImageLoader.crossOrigin = 'anonymous';
    //     RES.getResByUrl(this.view.testDate.data.quizs[this.view.classMax].quizBgImages[this.view.classMax].mediaUrl, (data) => {
    //         console.log(data);
    //         var image = new eui.Image();
    //         image.source = data;
    //         //image.source = this.testDate.kjbg[0].imgSrc;
    //         this.view.GroupBox.addChild(image);
    //         image.x = this.view.stage.stageWidth / 2 - image.width / 2;
    //         image.y = 0;
    //     }, this, RES.ResourceItem.TYPE_IMAGE)
    //     this.view.lable = new egret.TextField();
    //     //设置字体
    //     this.view.lable.fontFamily = "Arial";
    //     this.view.lable.y = 300;
    //     this.view.lable.width = 1476;
    //     this.view.lable.height = 750;
    //     this.view.lable.textAlign = "center";
    //     this.view.lable.text = "第" + (this.view.classMax + 1) + "课";
    //     this.view.lable.size = 80;
    //     this.view.GroupBox.addChild(this.view.lable);
    // }
    // private nextContent(event: egret.Event): void {
    //     RES.getResByUrl(this.view.testDate.data.quizs[this.view.classMax].quizBgImages[this.view.classMax].mediaUrl, (data) => {
    //         console.log(data);
    //         var image = new eui.Image();
    //         image.source = data;
    //         //image.source = this.testDate.kjbg[0].imgSrc;
    //         this.view.GroupBox.addChild(image);
    //         image.x = this.view.stage.stageWidth / 2 - image.width / 2;
    //         image.y = 0;
    //     }, this, RES.ResourceItem.TYPE_IMAGE)
    //     this.view.lable = new egret.TextField();
    //     //设置字体
    //     this.view.lable.fontFamily = "Arial";
    //     this.view.lable.y = 300;
    //     this.view.lable.width = 1476;
    //     this.view.lable.height = 750;
    //     this.view.lable.textAlign = "center";
    //     this.view.lable.text = "第" + (this.view.classMax + 1) + "课";
    //     this.view.lable.size = 80;
    //     this.view.GroupBox.addChild(this.view.lable);
    // }
})(ui || (ui = {}));
//# sourceMappingURL=MainViewMediator.js.map
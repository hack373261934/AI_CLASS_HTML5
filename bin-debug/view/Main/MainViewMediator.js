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
            this.view.pan_01.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.pan_02.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.pan_03.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
            this.view.BtnClearPan.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.initPan, this);
        };
        MainViewMediator.prototype.onEventCenterRegister = function () {
            // EventCenter.addEventListener(GameEventConstant.CLOSE_SERVERLIST,this.updateView,this);
            // EventCenter.addEventListener(GameEventConstant.SELECT_SERVER,this.initView,this);
            EventCenter.addEventListener(GameEventConstant.CLEARPAN_EVENT, this.clearPan, this);
            EventCenter.addEventListener(GameEventConstant.PAN_EVENT, this.initPan, this);
        };
        MainViewMediator.prototype.onEventCenterRemove = function () {
            EventCenter.removeEventListener(GameEventConstant.CLEARPAN_EVENT, this.clearPan, this);
            EventCenter.removeEventListener(GameEventConstant.PAN_EVENT, this.initPan, this);
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
            console.log(1111111);
            var _Pencil = new Pencil(0xFF0000, 10, [], [], []);
            this.view.PenGroup.visible = true;
            this.view.PenGroup.addChild(_Pencil);
            // switch (e.currentTarget) {
            //     case this.view.pan_01:
            //         console.log("选择了“红色”画笔");
            //         var _Pencil = new Pencil(0xFF0000, 10, [], [], []);
            //         this.view.PenGroup.visible = true;
            //         this.view.PenGroup.addChild(_Pencil);
            //         break;
            //     case this.view.pan_02:
            //         console.log("选择了“黄色”画笔");
            //         var _Pencil = new Pencil(0xFFFF00, 10, [], [], []);
            //         this.view.PenGroup.visible = true;
            //         this.view.PenGroup.addChild(_Pencil);
            //         break;
            //     case this.view.pan_03:
            //         console.log("选择了“蓝色”画笔");
            //         var _Pencil = new Pencil(0x0000FF, 10, [], [], []);
            //         this.view.PenGroup.visible = true;
            //         this.view.PenGroup.addChild(_Pencil);
            //         break;
            //     default:
            //         console.log("清除画笔")
            //         this.view.PenGroup.removeChildren();;
            //         this.view.PenGroup.visible = false;
            //         this.view.BtnClearPan.enabled = false;
            // }
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
            var params = "{\"type\":" + EventData.eventID.start + ", \"quizId\":" + GloableData.quizsData.data.quizs[GloableData.classMax].quizId + ",\"quizItemId\":0,\"lessonLid\":" + GloableData.lessonID + ",\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
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
            var params = "{\"type\":" + EventData.eventID.end + ", \"quizId\":-1,\"quizItemId\":-1,\"lessonLid\":100001,\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
            if (GloableData.isDebug == true) {
                sendImEventMsg(params, 2);
            }
            else {
                dispathchEventToStage(params);
            }
        };
        MainViewMediator.prototype.clearPan = function () {
            var params = "{\"type\":" + EventData.eventID.clear + ", \"quizId\":" + GloableData.quizsData.data.quizs[GloableData.classMax].quizId + ",\"quizItemId\":-1,\"lessonLid\":" + GloableData.lessonID + ",\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
            if (GloableData.isDebug == true) {
                sendImEventMsg(params, 2);
            }
            else {
                dispathchEventToStage(params);
            }
            // var _PencilClear = new Pencil(0xFF0000, 10, [], [], [],false);
            this.view.PenGroup.removeChildren();
            ;
            //this.view.PenGroup.visible = false;
            //this.view.BtnClearPan.enabled = false;
        };
        MainViewMediator.prototype.prevClass = function () {
            this.prevContent();
            var params = "{\"type\":" + EventData.eventID.prev + ", \"quizId\":" + GloableData.quizsData.data.quizs[GloableData.classMax].quizId + ",\"quizItemId\":0,\"lessonLid\":" + GloableData.lessonID + ",\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
            if (GloableData.isDebug == true) {
                sendImEventMsg(params, 1);
            }
            else {
                dispathchEventToStage(params);
            }
        };
        MainViewMediator.prototype.nextClass = function () {
            console.log("下一题");
            this.nextContent();
            var currentQuizId = -1;
            console.log(GloableData.classMax + "--->" + GloableData.quizsData.data.quizs.length);
            if (GloableData.classMax < GloableData.quizsData.data.quizs.length) {
                currentQuizId = GloableData.quizsData.data.quizs[GloableData.classMax].quizId;
            }
            // 拼接参数
            var params = "{\"type\":" + EventData.eventID.next + ", \"quizId\":" + currentQuizId + ",\"quizItemId\":0,\"lessonLid\":" + GloableData.lessonID + ",\"data\":{\"eventData\":{\"pointX\":[],\"pointY\":[]}}}";
            if (GloableData.isDebug == true) {
                sendImEventMsg(params, 1);
            }
            else {
                dispathchEventToStage(params);
            }
        };
        // private maskOnComplate(): void {
        //     egret.Tween.removeAllTweens();
        //     this.view.AniGroup.removeChild(this.circle);
        //     this.view.AniGroup.removeChild(this.imgBg);
        // }
        MainViewMediator.prototype.nextContent = function () {
            var _this = this;
            this.view.PenGroup.removeChildren();
            this.view.PenGroup.visible = false;
            GloableData.classMax += 1;
            if (GloableData.classMax != GloableData.quizsData.data.quizs.length) {
                this.view.GroupBox.removeChildren();
                this.view.LableTip.text = GloableData.classMax + 1 + "/" + GloableData.quizsData.data.quizs.length + ":调整就位就可以开始上课了";
                this.view.BtnPrev.enabled = true;
                RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizFgImages[0].mediaUrl, function (data) {
                    if (GloableData.quizsData.data.quizs[GloableData.classMax].quizType == 2) {
                        _this.viewTopic = new ConnectTopic(GloableData.quizsData.data.quizs[GloableData.classMax]);
                        _this.viewTopic.width = _this.view.width;
                        _this.viewTopic.height = _this.view.height;
                        _this.viewTopic.x = (_this.view.GroupBox.width - _this.viewTopic.width) / 2;
                        _this.view.GroupBox.addChildAt(_this.viewTopic, -1);
                        return;
                    }
                    else {
                        if (GloableData.deviceType == "Pc") {
                            _this.view.classTI.x = (_this.view.GroupBox.width - _this.view.classTI.width) / 2;
                            _this.view.classTI.source = data;
                            _this.view.GroupBox.addChild(_this.view.classTI);
                        }
                        else {
                            var scale = _this.view.GroupBox.height / _this.view.classTI.height;
                            alert('data' + data);
                            _this.view.classTI.source = data;
                            _this.view.classTI.width = _this.view.classTI.width * scale;
                            _this.view.classTI.height = _this.view.classTI.height * scale;
                            _this.view.GroupBox.addChild(_this.view.classTI);
                            _this.view.classTI.x = (1077 - _this.view.classTI.width) / 2;
                        }
                    }
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
                    this.view.LableTip.text = GloableData.classMax + "/" + GloableData.quizsData.data.quizs.length + ":调整就位就可以开始上课了";
                    this.view.DialogGroup.visible = true;
                    this.view.BtnStart.enabled = false;
                    this.view.start.visible = false;
                    this.view.end.visible = true;
                    this.view.BtnPrev.enabled = true;
                    this.view.GroupBox.removeChild(this.view.classTI);
                    return;
                }
            }
        };
        MainViewMediator.prototype.prevContent = function () {
            var _this = this;
            this.view.PenGroup.removeChildren();
            this.view.PenGroup.visible = false;
            console.log("上一题");
            if (GloableData.classMax != 0) {
                this.view.GroupBox.removeChildren();
                GloableData.classMax -= 1;
                this.view.LableTip.text = GloableData.classMax + 1 + "/" + GloableData.quizsData.data.quizs.length + ":调整就位就可以开始上课了";
                this.view.BtnNext.enabled = true;
                if (GloableData.classMax === 0) {
                    this.view.BtnPrev.enabled = false;
                }
                RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizFgImages[0].mediaUrl, function (data) {
                    _this.view.classTI = new eui.Image;
                    _this.view.classTI.source = data;
                    _this.view.GroupBox.addChild(_this.view.classTI);
                    _this.view.classTI.x = (_this.view.GroupBox.width - _this.view.classTI.width) / 2;
                    _this.view.classTI.y = 0;
                }, this, RES.ResourceItem.TYPE_IMAGE);
            }
        };
        MainViewMediator.NAME = "MainViewMediator";
        return MainViewMediator;
    }(Mediator));
    ui.MainViewMediator = MainViewMediator;
    __reflect(MainViewMediator.prototype, "ui.MainViewMediator");
})(ui || (ui = {}));

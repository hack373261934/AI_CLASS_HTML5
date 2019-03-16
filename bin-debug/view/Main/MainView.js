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
    var MainView = (function (_super) {
        __extends(MainView, _super);
        function MainView() {
            var _this = _super.call(this) || this;
            _this.imgURL = "";
            _this.StartTime = 1551945300000;
            _this.NowTime = 1551945203000;
            _this.hour = "";
            _this.min = "";
            _this.sec = "";
            return _this;
        }
        MainView.prototype.createCompleteEvent = function (e) {
            _super.prototype.createCompleteEvent.call(this, e);
            console.log(GloableData.deviceType);
            switch (GloableData.deviceType) {
                case "Pc":
                    this.stage.setContentSize(1440, 1080);
                    console.log(GloableData.deviceType + "--加载老师端皮肤");
                    this.skinName = "resource/game_skins/TeaViewSkin.exml";
                    break;
                case "Pad":
                    this.stage.setContentSize(1440, 812);
                    console.log(GloableData.deviceType + "--加载学生端Pad版皮肤");
                    this.skinName = "resource/game_skins/PadViewSkin.exml";
                    this.BtnStart.visible = true;
                    this.TimerLable.y = 330;
                    break;
                default:
                    console.log(GloableData.deviceType + "--加载学生端Mobile版皮肤");
                    this.skinName = "resource/game_skins/StuViewSkin.exml";
                    this.BtnStart.visible = false;
                    this.TimerLable.y = 470;
            }
            if (GloableData.isDebug == true) {
                if (GloableData.deviceType != "Pc") {
                    var scale = window.innerHeight / 812.0;
                    console.log("Swwww+++" + this.stage.width + ",Shhhhh++++" + this.stage.height);
                    console.log("Iwwww+++" + window.innerWidth + ",Ihhhhh++++" + window.innerHeight);
                    console.log("sssssss+++" + scale);
                    var params_teacher = {
                        "userIndex": 0,
                        "x": (this._teacher.x + 1077 + 9) * scale,
                        "y": this._teacher.y * scale,
                        "width": this._teacher.width * scale,
                        "height": this._teacher.height * scale
                    };
                    console.log(params_teacher);
                    modifyGLViewPositionAndSize(params_teacher);
                    var params_student = {
                        "userIndex": 1,
                        "x": (this._student.x + 1077 + 9) * scale,
                        "y": this._student.y * scale,
                        "width": this._student.width * scale,
                        "height": this._student.height * scale
                    };
                    console.log(params_student);
                    modifyGLViewPositionAndSize(params_student);
                }
            }
            this.timeFun();
            //创建一个计时器对象
            this.timer = new egret.Timer(1000, 0);
            //注册事件侦听器
            this.timer.addEventListener(egret.TimerEvent.TIMER, this.timerFunc, this);
            this.timer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timerComFunc, this);
            //开始计时
            this.timer.start();
            ///创建 URLLoader 对象
            var urlLoader = new egret.URLLoader();
            var urlReq = new egret.URLRequest();
            var urlLoader = new egret.URLLoader();
            var urlReq = new egret.URLRequest();
            urlReq.url = "resource/assets/classData.json";
            urlLoader.load(urlReq);
            urlLoader.addEventListener(egret.Event.COMPLETE, this.init, this);
            AppFacade.getInstance().registerMediator(new ui.MainViewMediator(this));
        };
        ;
        MainView.prototype.init = function (event) {
            var _this = this;
            var data = event.target.data;
            GloableData.quizsData = JSON.parse(data);
            // GloableData.classMax=GloableData.quizsData.data.quizs.length;
            this._zhuanshi = new MovieClip("testmc_json", "testmc_png", "bai", -1, 0, 0);
            this.AniGroup.addChild(this._zhuanshi);
            if (GloableData.deviceType != "Pc") {
                //-----创建背景对象
                egret.ImageLoader.crossOrigin = 'anonymous';
                RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizBgImages[GloableData.classMax].mediaUrl, function (data) {
                    console.log(data);
                    _this.classBG.source = data;
                    _this.GroupBox.addChild(_this.classBG);
                }, this, RES.ResourceItem.TYPE_IMAGE);
            }
            //-----创建图片对象
            egret.ImageLoader.crossOrigin = 'anonymous';
            RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizItems[0].mediaUrl, function (data) {
                console.log(data);
                _this.classTI = new eui.Image;
                _this.classTI.source = data;
                _this.GroupBox.addChild(_this.classTI);
            }, this, RES.ResourceItem.TYPE_IMAGE);
            // ///创建 ImageLoader 对象
            // var loader: egret.ImageLoader = new egret.ImageLoader();
            // //添加加载完成侦听
            // loader.addEventListener(egret.Event.COMPLETE, this.oneClass, this);
            // this.imgURL = this.testDate.data.quizs[this.classMax].quizBgImages[this.classMax].mediaUrl;
            // //开始加载
            // loader.load(this.imgURL);
            // var loader: egret.ImageLoader = <egret.ImageLoader>event.target;
            // //获取加载到的纹理对象
            // var bitmapData: egret.BitmapData = loader.data;
            // //创建纹理对象
            // this.texture = new egret.Texture();
            // this.texture.bitmapData = bitmapData;
            // //创建 Bitmap 进行显示
            // this.GroupBox.addChild(new egret.Bitmap(this.texture));
            // //------创建文字对象
            // //创建 TextField 对象
            // this.lable = new egret.TextField();
            // //设置字体
            // this.lable.fontFamily = "Arial";
            // this.lable.y = 300;
            // this.lable.width = 1476;
            // this.lable.height = 750;
            // this.lable.textAlign = "center";
            // this.lable.text = "第1课";
            // this.lable.size = 80;
            // this.GroupBox.addChild(this.lable);
            // this.mc.addEventListener(egret.Event.COMPLETE, function () {
            //     console.log("播放完成")
            //     this.removeChild(this.role);
            // }, this)
            // //-----创建图片对象
            // egret.ImageLoader.crossOrigin = 'anonymous';
            // var image = new eui.Image();
            //     image.source = "http://cdn.chaofer.com/1.png";
            //     //image.source = this.testDate.kjbg[0].imgSrc;
            //     this.GroupBox.addChild(image);
            //     image.x = 100;
            //     image.y = 100;
            // RES.getResByUrl('http://cdn.chaofer.com/1.png', (data) => {
            //     console.log(data);
            // }, this, RES.ResourceItem.TYPE_IMAGE)
        };
        MainView.prototype.timerFunc = function () {
            this.timeFun();
        };
        MainView.prototype.timerComFunc = function () {
            this.timer.stop();
        };
        MainView.prototype.timeFun = function () {
            var endTime = this.StartTime;
            //var nowTime = Date.parse(new Date().toString());
            this.NowTime += 1000;
            var t = endTime - this.NowTime;
            if (t > 0) {
                var hourData = Math.floor(t / 1000 / 60 / 60 % 24);
                var minData = Math.floor(t / 1000 / 60 % 60);
                var secData = Math.floor(t / 1000 % 60);
                if (hourData < 10) {
                    this.hour = "0" + hourData;
                }
                else {
                    this.hour = "" + hourData;
                }
                if (minData < 10) {
                    this.min = "0" + minData;
                }
                else {
                    this.min = "" + minData;
                }
                if (secData < 10) {
                    if (secData === 0) {
                        this.sec = "6" + secData;
                    }
                    else {
                        this.sec = "0" + secData;
                    }
                }
                else {
                    this.sec = "" + secData;
                }
                var countDownTime = this.min + ":" + this.sec;
                //this.StartTime=this.StartTime;
                this.TimerLable.text = countDownTime;
            }
        };
        return MainView;
    }(BaseUI));
    ui.MainView = MainView;
    __reflect(MainView.prototype, "ui.MainView");
})(ui || (ui = {}));

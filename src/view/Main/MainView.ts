/**
 * Created by 狗蛋儿 on 16/9/26.*
 */
module ui {
    import tr = egret.sys.tr;
    export class MainView extends BaseUI {
        public _teacher: eui.Rect;
        public _student: eui.Rect;
        public classBG: eui.Image;
        public classTI: eui.Image;
        public GroupBox: eui.Group;
        public start: eui.Group;
        public end: eui.Group;
        public EvenGroup: eui.Group;
        public DialogGroup: eui.Group;
        public AniGroup: eui.Group;
        public PenGroup: eui.Group;
        public BtnPrev: eui.Button;
        public BtnNext: eui.Button;
        public BtnStart: eui.Button;
        public BtnEnd: eui.Button;
        public BtnAni: eui.Button;
        public pan_01: eui.Button;
        public pan_02: eui.Button;
        public pan_03: eui.Button;
        public BtnClearPan: eui.Button;
        public BtnLiang: eui.Button;
        public TimerLable: eui.Label;
        public imgURL: string = "";
        public lable: egret.TextField;
        public texture: egret.Texture;
        public StartTime: number = 1551945300000;
        public NowTime: number = 1551945203000;
        public timer: egret.Timer;
        public hour = "";
        public min = "";
        public sec = "";
        public _zhuanshi;
        constructor() {
            super()

        }

        public createCompleteEvent(e: eui.UIEvent): void {

            super.createCompleteEvent(e);

            console.log(GloableData.deviceType);
            switch (GloableData.deviceType) {
                case "Pc":
                    this.stage.setContentSize(1440, 1080);
                    console.log(GloableData.deviceType + "--加载老师端皮肤")
                    this.skinName = "resource/game_skins/TeaViewSkin.exml";
                    break;
                case "Pad":
                    this.stage.setContentSize(1440, 812);
                    console.log(GloableData.deviceType + "--加载学生端Pad版皮肤")
                    this.skinName = "resource/game_skins/PadViewSkin.exml";
                    this.BtnStart.visible = true;
                    this.TimerLable.y = 330;
                    break;
                default:
                    console.log(GloableData.deviceType + "--加载学生端Mobile版皮肤")
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
                    var params_teacher: any = {
                        "userIndex": 0,
                        "x": (this._teacher.x + 1077 + 9) * scale,
                        "y": this._teacher.y * scale,
                        "width": this._teacher.width * scale,
                        "height": this._teacher.height * scale
                    };
                    console.log(params_teacher);
                    modifyGLViewPositionAndSize(params_teacher)
                    var params_student: any = {
                        "userIndex": 1,
                        "x": (this._student.x + 1077 + 9) * scale,
                        "y": this._student.y * scale,
                        "width": this._student.width * scale,
                        "height": this._student.height * scale
                    }
                    console.log(params_student);
                    modifyGLViewPositionAndSize(params_student)
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
            var urlLoader: egret.URLLoader = new egret.URLLoader();
            var urlReq: egret.URLRequest = new egret.URLRequest();

            var urlLoader: egret.URLLoader = new egret.URLLoader();
            var urlReq: egret.URLRequest = new egret.URLRequest();
            urlReq.url = "resource/assets/classData.json";
            urlLoader.load(urlReq);
            urlLoader.addEventListener(egret.Event.COMPLETE, this.init, this);

            AppFacade.getInstance().registerMediator(new ui.MainViewMediator(this));
        };

        private init(event: egret.Event): void {
            var data = event.target.data;
            GloableData.quizsData = JSON.parse(data);
            // GloableData.classMax=GloableData.quizsData.data.quizs.length;
            this._zhuanshi = new MovieClip("testmc_json", "testmc_png", "bai", -1, 0, 0);
            this.AniGroup.addChild(this._zhuanshi);

            if (GloableData.deviceType != "Pc") {
                //-----创建背景对象
                egret.ImageLoader.crossOrigin = 'anonymous';
                RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizBgImages[GloableData.classMax].mediaUrl, (data) => {
                    console.log(data);
                    this.classBG.source = data;
                    this.GroupBox.addChild(this.classBG);

                }, this, RES.ResourceItem.TYPE_IMAGE)
            }


            //-----创建图片对象
            egret.ImageLoader.crossOrigin = 'anonymous';
            RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizItems[0].mediaUrl, (data) => {
                console.log(data);
                this.classTI = new eui.Image;
                this.classTI.source = data;
                this.GroupBox.addChild(this.classTI);


            }, this, RES.ResourceItem.TYPE_IMAGE)

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


        }
        private timerFunc(): void {
            this.timeFun();
        }
        private timerComFunc(): void {
            this.timer.stop();
        }

        private timeFun(): void {
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
                } else {
                    this.hour = "" + hourData;
                }
                if (minData < 10) {
                    this.min = "0" + minData;
                } else {
                    this.min = "" + minData;
                }
                if (secData < 10) {
                    if (secData === 0) {
                        this.sec = "6" + secData;
                    } else {
                        this.sec = "0" + secData;
                    }
                } else {
                    this.sec = "" + secData;
                }
                var countDownTime = this.min + ":" + this.sec;
                //this.StartTime=this.StartTime;
                this.TimerLable.text = countDownTime;
            }


        }
    }
}
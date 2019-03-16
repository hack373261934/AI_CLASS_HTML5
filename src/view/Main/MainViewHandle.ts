/**
 * Created by CHENBIN on 2019/3/11.
 * 开始上课数据类
 */
class MainViewHandle extends egret.DisplayObjectContainer {
    private static _instance: MainViewHandle;
    constructor() {
        super();
    }

    public static getInstance(): MainViewHandle {
        if (MainViewHandle._instance == null) {
            MainViewHandle._instance = new MainViewHandle();
        }
        return MainViewHandle._instance;
    }

    public setHandle(view: any, _IDATA: any): void {
        this.getHandle(view, _IDATA);
    }

    public getHandle(view, _IDATA): void {
        var _IDATA = JSON.parse(_IDATA)
        console.log(_IDATA)
        switch (_IDATA.type) {
            case 20001:
                console.log("MainViewHandle正常");
                view.timer.stop();
                view.removeChild(view.AniGroup);
                break;
            case 20002:
                if (GloableData.classMax != GloableData.quizsData.data.quizs.length - 1) {
                view.GroupBox.removeChildren();
                GloableData.classMax += 1;
                view.BtnPrev.enabled = true;

                if (GloableData.classMax === GloableData.quizsData.data.quizs.length - 1) {
                    view.BtnNext.enabled = false;
                }

                RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizBgImages[0].mediaUrl, (data) => {
                    console.log(data);
                    var image = new eui.Image();
                    image.source = data;
                    //image.source = this.testDate.kjbg[0].imgSrc;
                    view.GroupBox.addChild(image);
                    image.x = view.stage.stageWidth / 2 - image.width / 2;
                    image.y = 0;

                }, this, RES.ResourceItem.TYPE_IMAGE)

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
                break;
            case 20003:
                if (view.classMax != 0) {
                    view.GroupBox.removeChildren();
                    view.classMax -= 1;
                    view.BtnNext.enabled = true;
                    if (view.classMax === 0) {
                        view.BtnPrev.enabled = false;
                    }

                    RES.getResByUrl(view.testDate.data.quizs[view.classMax].quizBgImages[0].mediaUrl, (data) => {
                        console.log(data);
                        var image = new eui.Image();
                        image.source = data;
                        view.GroupBox.addChild(image);
                        image.x = view.stage.stageWidth / 2 - image.width / 2;
                        image.y = 0;

                    }, this, RES.ResourceItem.TYPE_IMAGE)

                }
                break;
            case 20004:
                //var _Pencil = new Pencil(0xFF0000, 10,GloableData.M_X,GloableData.M_Y,GloableData.M_C);
                //view.PenGroup.visible = true;
                var _Pencil = new Pencil( _IDATA.data.eventData.pointColor, _IDATA.data.eventData.pointThickness, _IDATA.data.eventData.pointX, _IDATA.data.eventData.pointY, _IDATA.data.eventData.pointDrag);
                view.PenGroup.addChild(_Pencil);

                break;
            default:
                return;
        }
    }

}
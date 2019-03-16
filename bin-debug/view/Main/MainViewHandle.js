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
 * Created by CHENBIN on 2019/3/11.
 * 开始上课数据类
 */
var MainViewHandle = (function (_super) {
    __extends(MainViewHandle, _super);
    function MainViewHandle() {
        return _super.call(this) || this;
    }
    MainViewHandle.getInstance = function () {
        if (MainViewHandle._instance == null) {
            MainViewHandle._instance = new MainViewHandle();
        }
        return MainViewHandle._instance;
    };
    MainViewHandle.prototype.setHandle = function (view, _IDATA) {
        console.log(_IDATA);
        this.getHandle(view, _IDATA);
    };
    MainViewHandle.prototype.getHandle = function (view, _IDATA) {
        var _IDATA = JSON.parse(_IDATA);
        console.log(_IDATA);
        //alert("handle:"+_IDATA);
        if (GloableData.deviceType != "Pc") {
            switch (_IDATA.type) {
                case 20001:
                    //alert("上课");
                    view.timer.stop();
                    view.removeChild(view.DialogGroup);
                    break;
                case 20002:
                    view.PenGroup.removeChildren();
                    ;
                    view.PenGroup.visible = false;
                    view.BtnClearPan.enabled = false;
                    if (GloableData.classMax != GloableData.quizsData.data.quizs.length - 1) {
                        view.GroupBox.removeChildren();
                        GloableData.classMax += 1;
                        view.BtnPrev.enabled = true;
                        if (GloableData.classMax === GloableData.quizsData.data.quizs.length - 1) {
                            view.BtnNext.enabled = false;
                        }
                        RES.getResByUrl(GloableData.quizsData.data.quizs[GloableData.classMax].quizBgImages[0].mediaUrl, function (data) {
                            console.log(data);
                            var image = new eui.Image();
                            image.source = data;
                            //image.source = this.testDate.kjbg[0].imgSrc;
                            view.GroupBox.addChild(image);
                            image.x = 0;
                            image.y = 0;
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
                    break;
                case 20003:
                    if (view.classMax != 0) {
                        view.GroupBox.removeChildren();
                        view.classMax -= 1;
                        view.BtnNext.enabled = true;
                        if (view.classMax === 0) {
                            view.BtnPrev.enabled = false;
                        }
                        RES.getResByUrl(view.testDate.data.quizs[view.classMax].quizBgImages[0].mediaUrl, function (data) {
                            console.log(data);
                            var image = new eui.Image();
                            image.source = data;
                            view.GroupBox.addChild(image);
                            image.x = 0;
                            image.y = 0;
                        }, this, RES.ResourceItem.TYPE_IMAGE);
                    }
                    break;
                case 20004:
                    //var _Pencil = new Pencil(0xFF0000, 10,GloableData.M_X,GloableData.M_Y,GloableData.M_C);
                    view.PenGroup.visible = true;
                    var _Pencil = new Pencil(_IDATA.data.eventData.pointColor, _IDATA.data.eventData.pointThickness, _IDATA.data.eventData.pointX, _IDATA.data.eventData.pointY, _IDATA.data.eventData.pointDrag);
                    view.PenGroup.addChild(_Pencil);
                    break;
                default:
                    return;
            }
        }
    };
    return MainViewHandle;
}(egret.DisplayObjectContainer));
__reflect(MainViewHandle.prototype, "MainViewHandle");

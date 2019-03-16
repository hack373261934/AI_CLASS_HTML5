/**
 * Created by CHENBIN on 2019/3/11.
 * 画笔工具类
 */
class Pencil extends egret.DisplayObjectContainer {
    private B_Paint: boolean;
    private M_ClickX: Array<number>;
    private M_ClickY: Array<number>;
    private M_ClickDrag: Array<boolean>;
    private M_Shap: egret.Shape;
    private B_Color: number;
    private B_thickness: number;
    /**
     *
     * @param color:传入画笔的颜色
     * @param thickness:传入画笔的粗细
     */
    constructor(color: number, thickness: number, M_ClickX: Array<number>, M_ClickY: Array<number>, M_ClickDrag: Array<boolean>) {
        super();
        this.B_Color = color;
        this.B_thickness = thickness;
        // this.M_ClickX = M_ClickX;
        // this.M_ClickY = M_ClickY;
        this.M_ClickX = M_ClickX;
        this.M_ClickY = M_ClickY;
        this.M_ClickDrag = M_ClickDrag;
        console.log("--======" + this.M_ClickX)
        this.onAddToStage();
    }

    public onAddToStage(): void {
        //this.removeChild(this.M_Shap);
        this.M_Shap = new egret.Shape;
        this.M_Shap.graphics.beginFill(0xFFFFFF, 0);
        this.M_Shap.graphics.drawRect(0, 0, 1440, 1080);
        this.M_Shap.graphics.endFill();
        this.M_Shap.cacheAsBitmap = true;
        this.M_Shap.touchEnabled = true;
        this.addChild(this.M_Shap);
        if (GloableData.deviceType == "Pc") {
             console.log("老师端画笔")
            this.M_ClickX = new Array;
            this.M_ClickY = new Array;
            this.M_ClickDrag = new Array;
            this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.onTouchBegin, this);
            this.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onTouchMoved, this);
            this.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouchEnded, this);
        } else {
            if (this.M_ClickX.length != 0 || this.M_ClickY.length != 0 || this.M_ClickDrag.length != 0) {
                console.log("有数据")
                this.M_Shap.graphics.lineStyle(this.B_thickness, this.B_Color, 1, true, "", "", "round");

                for (var i = 0; i < this.M_ClickX.length; i++) {
                    if (this.M_ClickDrag[i] && i) {
                        this.M_Shap.graphics.moveTo(this.M_ClickX[i - 1], this.M_ClickY[i - 1]);
                    } else {
                        this.M_Shap.graphics.moveTo(this.M_ClickX[i], this.M_ClickY[i]);
                    }
                    this.M_Shap.graphics.lineTo(this.M_ClickX[i], this.M_ClickY[i]);
                }
                this.M_Shap.graphics.endFill();
            }

        }




    }

    private addTouchPoint(locationX: number, locationY: number, isDragging: boolean = false): void {
        if (locationX > 0 || locationX < this.stage.x + this.stage.width) {
            this.M_ClickX.push(locationX);
        }
        if (locationY > 0 || locationY < this.stage.y + this.stage.height) {
            this.M_ClickY.push(locationY);
        }


        this.M_ClickDrag.push(isDragging);
    }

    private redraw(color: number, thickness: number): void {

        //this.M_Shap.graphics.clear();
        this.M_Shap.graphics.lineStyle(thickness, color, 1, true, "", "", "round");

        for (var i = 0; i < this.M_ClickX.length; i++) {
            if (this.M_ClickDrag[i] && i) {
                this.M_Shap.graphics.moveTo(this.M_ClickX[i - 1], this.M_ClickY[i - 1]);
            } else {
                this.M_Shap.graphics.moveTo(this.M_ClickX[i], this.M_ClickY[i]);
            }
            this.M_Shap.graphics.lineTo(this.M_ClickX[i], this.M_ClickY[i]);
        }
        this.M_Shap.graphics.endFill();
    }

    // public clearTouchPoints(): void
    // {
    //     if (this.m_clickX)
    //         delete this.m_clickX;
    //
    //     if (this.m_clickY)
    //         delete this.m_clickY;
    //
    //     if (this.m_clickDrag)
    //         delete this.m_clickDrag;
    //
    //     this.m_clickX = new Array;
    //     this.m_clickY = new Array;
    //     this.m_clickDrag = new Array;
    //
    //     this.redraw();
    // }

    private onTouchBegin(event: egret.TouchEvent): void {
        console.log("touch begins");
        this.B_Paint = true;
        this.addTouchPoint(event.localX, event.localY);
        console.log("localX:" + event.localX, "---localY:" + event.localY);
        this.redraw(this.B_Color, this.B_thickness);
    }

    private onTouchMoved(event: egret.TouchEvent): void {
        console.log("touch moved");
        if (this.B_Paint) {
            this.addTouchPoint(event.localX, event.localY, true);
            console.log("localX:" + event.localX, "---localY:" + event.localY);
            this.redraw(this.B_Color, this.B_thickness);
        }
    }

    private onTouchEnded(event: egret.TouchEvent): void {
        console.log("touch ends");
        console.log("M_ClickX:" + this.M_ClickX, "---M_ClickY:" + this.M_ClickY, "---M_ClickDrag:" + this.M_ClickDrag);
        // 拼接参数
        var params: any = "{\"type\":" + EventData.eventID.point + ", \"quizId\":" + GloableData.quizsData.data.quizs[GloableData.classMax].quizId + ",\"quizItemId\":222,\"lessonLid\":100001,\"data\":{\"eventData\":{\"pointX\":[" + this.M_ClickX + "],\"pointY\":[" + this.M_ClickY + "],\"pointDrag\":[" + this.M_ClickDrag + "],\"pointColor\":" + this.B_Color + ",\"pointThickness\":" + this.B_thickness + "}}}";
         if (GloableData.isDebug == true) {
            sendImEventMsg(params, 1);
        } else {
            dispathchEventToStage(params);
        }
        this.M_ClickX = [];
        this.M_ClickY = [];
        this.M_ClickDrag = [];
        this.B_Paint = false;
    }
}
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
 * coder by wangshengwei
 * 2019/3/15
 */
var ConnectTopic = (function (_super) {
    __extends(ConnectTopic, _super);
    function ConnectTopic(data) {
        var _this = _super.call(this) || this;
        _this.deviceType = GloableData.deviceType;
        // 滑动拖线的起点是否有效
        _this.isValidStart = false;
        // 当前激活的问题
        _this.activeQuestionItem = null;
        // 绘制线条起点
        _this.startPointOfLine = new egret.Point();
        // 连线的斜率
        _this.slope = 1;
        _this.skinName = 'ConnectTopicSkin';
        return _this;
    }
    ConnectTopic.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    ConnectTopic.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        // 初始化数据
        this.init();
        // 监听事件
        this.addListener();
    };
    ConnectTopic.prototype.init = function () {
        // 配置文件
        var config = [2, 0, 1];
        this.config = config;
        // 图片资源(后续为url获取);
        var questionImgArr = ['fan', 'cab', 'hat'];
        var answerImgArr = ['ff', 'hh', 'cc'];
        for (var i = 0; i < config.length; i++) {
            // 简历问题与答案之间的索引关系
            this.questionGroup.getChildAt(i).name = this.answerGroup.getChildAt(config[i]).name = i.toString();
            this.questionGroup.getChildAt(i).bgImg.source = questionImgArr[i] + '_png';
            this.answerGroup.getChildAt(i).bgImg.source = answerImgArr[i] + '_png';
        }
    };
    ConnectTopic.prototype.addListener = function () {
        // 添加激活问题按钮监听
        this.questionGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.questionGroupHandler, this);
        // 添加滑动连线事件
        this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.stageBeginHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.stageMoveHandler, this);
        this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.stageEndHandler, this);
        // 发布答案按钮
        this.publishBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.publishBtnTapHandler, this);
    };
    ConnectTopic.prototype.questionGroupHandler = function (e) {
        var _this = this;
        var btn = e.target;
        if (btn instanceof eui.Button) {
            // 隐藏激活按钮
            btn.visible = false;
            // 激活题目
            this.activeQuestionItem = btn.parent;
            // 记录起始点
            // 起点坐标(舞台坐标系)
            var point = this.activeQuestionItem.localToGlobal();
            this.startPointOfLine.x = point.x + this.activeQuestionItem.width / 2;
            this.startPointOfLine.y = point.y + this.activeQuestionItem.height + 10;
            ;
            this.maskLayer.visible = true;
            // 变更题目item的状态
            this.questionGroup.$children.forEach(function (element) {
                if (element.name != btn.parent.name) {
                    _this.updateMaskState(element.maskLayer, MASKSTATE.UNACTIVE);
                }
                else {
                    // 显示正在连接的遮罩颜色
                    _this.updateMaskState(element.maskLayer, MASKSTATE.ACTIVE);
                }
            });
            // 变更答案item的状态
            this.answerGroup.$children.forEach(function (element) {
                if (element.isConnected) {
                    _this.updateMaskState(element.maskLayer, MASKSTATE.UNACTIVE);
                }
                else {
                    // 显示正在连接的遮罩颜色
                    _this.updateMaskState(element.maskLayer, MASKSTATE.ACTIVE);
                }
            });
        }
    };
    //
    ConnectTopic.prototype.stageBeginHandler = function (e) {
        // console.log(e.stageX, e.stageY);
        // console.log(e);
        // 如果没有题目被激活,则不进行以下逻辑
        if (!this.activeQuestionItem) {
            return;
        }
        var content = e.target.parent;
        // 有效的连线起点
        if (content instanceof ConTopicQusItem) {
            if (!content.isConnected && content.name == this.activeQuestionItem.name) {
                this.isValidStart = true;
            }
            // 变更题目item的状态
            this.activeQuestionItem && this.updateMaskState(this.activeQuestionItem.maskLayer, MASKSTATE.PRE);
        }
    };
    ConnectTopic.prototype.stageMoveHandler = function (e) {
        if (this.isValidStart) {
            // 记录当前的点
            var curX = e.stageX;
            var curY = e.stageY;
            if (!this.activeLine) {
                this.activeLine = new eui.Image(RES.getRes('line_pre_png'));
                // 把线条添加上去
                this.lineGroup.addChild(this.activeLine);
                this.activeLine.x = this.activeQuestionItem.x + this.activeQuestionItem.width / 2;
                this.activeLine.y = this.activeQuestionItem.y + 30;
                this.activeLine.anchorOffsetX = 20;
                this.activeLine.anchorOffsetY = 20;
            }
            this.updateActiveLine(curX, curY);
        }
    };
    ConnectTopic.prototype.stageEndHandler = function (e) {
        var _this = this;
        if (this.isValidStart) {
            var content_1 = e.target.parent;
            if (content_1 instanceof ConTopicAnsItem) {
                // 终点吸附的点
                var curX = content_1.localToGlobal().x + content_1.width / 2;
                var curY = content_1.localToGlobal().y - 10;
                console.log(curY);
                // 吸附
                this.updateActiveLine(curX, curY);
                // 落点及长度需要优化(wsw)
                this.activeLine.width += 40;
                // 寻找到答案区域
                if (content_1.name == this.activeQuestionItem.name) {
                    // 连接到正确答案(待封装成方法)
                    content_1.isConnected = this.activeQuestionItem.isConnected = true;
                    console.log('答案正确!');
                    // 回复问答区
                    this.maskLayer.visible = false;
                    // 变更题目item的状态
                    this.questionGroup.$children.forEach(function (element) {
                        if (element.name == _this.activeQuestionItem.name) {
                            // 修改问题的当前mask状态
                            element.currentMaskState = MASKSTATE.RIGHT;
                        }
                        // 更新mask状态
                        _this.updateMaskState(element.maskLayer, element.currentMaskState);
                    });
                    // 变更答案item的状态
                    this.answerGroup.$children.forEach(function (element) {
                        if (element.name == content_1.name) {
                            // 修改正确答案的当前mask状态
                            element.currentMaskState = MASKSTATE.RIGHT;
                        }
                        // 更新mask状态
                        _this.updateMaskState(element.maskLayer, element.currentMaskState);
                    });
                    this.activeLine.source = 'line_right_png';
                    // 重置绘制线段(优化方案: 放在激活逻辑里去);
                    this.activeLine = null;
                }
                else {
                    console.log('连接到了错误答案!');
                    this.updateMaskState(this.activeQuestionItem.maskLayer, MASKSTATE.ERROR);
                    !content_1.isConnected && this.updateMaskState(content_1.maskLayer, MASKSTATE.ERROR);
                    this.activeLine.source = 'line_error_png';
                    setTimeout(function () {
                        _this.cancelActiveLine(content_1);
                    }, 500);
                }
            }
            else {
                this.cancelActiveLine();
            }
            // 结束一轮绘图
            this.isValidStart = false;
        }
    };
    // 取消线段和边框绘制
    ConnectTopic.prototype.cancelActiveLine = function (ansItem) {
        // 没有连接到答案区域, 则取消线条
        this.activeLine && this.activeLine.parent && this.activeLine.parent.removeChild(this.activeLine);
        this.activeLine = null;
        // 边框也要消失
        this.updateMaskState(this.activeQuestionItem.maskLayer, this.activeQuestionItem.currentMaskState);
        ansItem && !ansItem.isConnected && this.updateMaskState(ansItem.maskLayer, ansItem.currentMaskState);
    };
    // 根据两个点来动态更新activeLine
    ConnectTopic.prototype.updateActiveLine = function (curX, curY) {
        var startX = this.startPointOfLine.x;
        var startY = this.startPointOfLine.y;
        // 长度-1,为了让结束的点不触发在line上,直接穿透触发在answerItem上
        var distance = Math.sqrt(Math.pow(curX - startX, 2) + Math.pow(curY - startY, 2)) - 1;
        this.activeLine.width = distance < 100 ? 100 : distance;
        // 旋转角度
        var angle = Math.floor(180 / (Math.PI / Math.atan((curY - startY) / (curX - startX))));
        // 鼠标在四象限
        if (curX < startX && curY < startY) {
            angle -= 180;
        }
        // 鼠标在y轴负方向上
        if (curX == startX && curY < startY) {
            angle = 180;
        }
        // 鼠标在x轴正方向上
        if (curX > startX && curY == startY) {
            angle = 180;
        }
        // 鼠标在三象限
        if (curX < startX && curY > startY) {
            angle += 180;
        }
        // 鼠标在x轴负方向
        if (curX < startX && curY == startY) {
            angle = 270;
        }
        // 鼠标在二象限
        // if(curX < startX && curY < startY){
        // 	angle = 360 - angle;
        // }
        this.activeLine.rotation = angle;
    };
    ConnectTopic.prototype.updateMaskState = function (maskLayer, state) {
        // 填充颜色
        var fillColor = 0x000000;
        // 填充透明度
        var fillAlpha = 0.5;
        // 描边颜色
        var strokeColor = 0xF9FF7C;
        // 描边透明度
        var strokeAlpha = 1;
        // 描边宽度
        var strokeWeight = 10;
        // 切角
        var ellipse = 40;
        // 高度
        // let height = 260;
        if (maskLayer.parent instanceof ConTopicQusItem) {
            maskLayer.parent.activeBtn.touchEnabled = true;
        }
        switch (state) {
            case MASKSTATE.ACTIVE:
                // 激活状态
                fillAlpha = 0;
                strokeAlpha = 1;
                strokeColor = 0xffffff;
                break;
            case MASKSTATE.PRE:
                // 答题中状态
                fillAlpha = 0;
                strokeAlpha = 1;
                strokeColor = 0xF9FF7C;
                break;
            case MASKSTATE.RIGHT:
                fillAlpha = 0;
                strokeColor = 0x79C500;
                break;
            case MASKSTATE.ERROR:
                fillAlpha = 0;
                strokeColor = 0xF35261;
                break;
            case MASKSTATE.UNACTIVE:
                ellipse = 0;
                strokeWeight = 0;
                // height += 30;
                // 设置激活按钮不可点
                if (maskLayer.parent instanceof ConTopicQusItem) {
                    maskLayer.parent.activeBtn.touchEnabled = false;
                }
                break;
            default:
                break;
        }
        maskLayer.fillColor = fillColor;
        maskLayer.fillAlpha = fillAlpha;
        maskLayer.strokeColor = strokeColor;
        maskLayer.strokeAlpha = strokeAlpha;
        maskLayer.strokeWeight = strokeWeight;
        maskLayer.ellipseWidth = maskLayer.ellipseHeight = ellipse;
        // maskLayer.height = height;
        // console.log(height);
    };
    // 发布答案按钮的逻辑
    ConnectTopic.prototype.publishBtnTapHandler = function (e) {
        var _this = this;
        if (this.activeQuestionItem) {
            console.log(111);
            // 先触发激活按钮
            // this.activeQuestionItem.activeBtn.disp
            // 触发touchbegin
            this.stageBeginHandler({ target: this.activeQuestionItem.activeBtn });
            // 然后触发touchmove
            // 先找到当前题目对应的答案
            var ansItemIndex = this.config[this.activeQuestionItem.name];
            var ansItem_1 = this.answerGroup.getChildAt(ansItemIndex);
            // 计算出斜率
            var endPointX = ansItem_1.localToGlobal().x + ansItem_1.width / 2;
            var endPointY = ansItem_1.localToGlobal().y;
            this.slope = (this.startPointOfLine.y - endPointY) / (this.startPointOfLine.x - endPointX);
            egret.Tween.get(this).to({ publishDistance: endPointX }, 800).call(function () {
                console.log('publish连线完成');
                _this.stageEndHandler({ target: ansItem_1.bgImg });
            });
        }
    };
    Object.defineProperty(ConnectTopic.prototype, "publishDistance", {
        get: function () {
            return this.activeQuestionItem ? (this.activeQuestionItem.localToGlobal().x + this.activeQuestionItem.width / 2) : 0;
        },
        set: function (value) {
            var y1 = this.slope * (value - this.startPointOfLine.x);
            this.stageMoveHandler({ stageX: value, stageY: y1 + this.startPointOfLine.y });
            console.log(value, this.slope, this.slope * value);
        },
        enumerable: true,
        configurable: true
    });
    return ConnectTopic;
}(eui.Component));
__reflect(ConnectTopic.prototype, "ConnectTopic", ["eui.UIComponent", "egret.DisplayObject"]);
var MASKSTATE;
(function (MASKSTATE) {
    MASKSTATE[MASKSTATE["ACTIVE"] = 1] = "ACTIVE";
    MASKSTATE[MASKSTATE["PRE"] = 2] = "PRE";
    MASKSTATE[MASKSTATE["RIGHT"] = 3] = "RIGHT";
    MASKSTATE[MASKSTATE["ERROR"] = 4] = "ERROR";
    MASKSTATE[MASKSTATE["UNACTIVE"] = 5] = "UNACTIVE"; // 未激活状态
})(MASKSTATE || (MASKSTATE = {}));

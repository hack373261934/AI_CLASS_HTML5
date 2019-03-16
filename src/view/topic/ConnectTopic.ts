/**
 * coder by wangshengwei 
 * 2019/3/15
 */
class ConnectTopic extends eui.Component implements eui.UIComponent {

	public maskLayer: eui.Rect;
	public questionGroup: eui.Group;
	public answerGroup: eui.Group;
	public lineGroup: eui.Group;
	public timeLabel: eui.Label;
	public publishBtn: eui.Button;
	public publishGroup: eui.Group;

	public deviceType = GloableData.deviceType;
	// 当前游戏的答案拍下来
	private config;

	// 滑动拖线的起点是否有效
	private isValidStart = false;
	// 当前激活的问题
	private activeQuestionItem: ConTopicQusItem = null;
	// 当前正在绘制的线条
	private activeLine: eui.Image;
	// 绘制线条起点
	private startPointOfLine: egret.Point = new egret.Point();
	// 连线的斜率
	private slope = 1;

	// 数据
	private data;

	public constructor(data) {
		super();
		this.data = data;
		this.skinName = 'ConnectTopicSkin';
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();

		// 初始化数据
		this.init();
		// 监听事件
		this.addListener();
	}

	private init() {
		// 配置文件
		this.config = [];
		let answerObj = JSON.parse(this.data.answer).answer;
		for (let key in answerObj) {
			this.config[key] = answerObj[key];
		}
		// 图片资源(后续为url获取);
		let questionImgArr = [];
		for (let i: number = 0; i < this.data.upQuizItems.length; i++) {
			questionImgArr.push(this.data.upQuizItems[i].mediaUrl);
		}
		let answerImgArr = [];
		for (let i: number = 0; i < this.data.downQuizItems.length; i++) {
			answerImgArr.push(this.data.downQuizItems[i].mediaUrl);
		}
		for (let i: number = 0; i < this.config.length; i++) {
			// 简历问题与答案之间的索引关系
			this.questionGroup.getChildAt(i).name = this.answerGroup.getChildAt(this.config[i]).name = i.toString();
			(<ConTopicQusItem>this.questionGroup.getChildAt(i)).bgImg.source = questionImgArr[i];
			(<ConTopicAnsItem>this.answerGroup.getChildAt(i)).bgImg.source = answerImgArr[i];
			// 激活按钮的显示逻辑
			(<ConTopicQusItem>this.questionGroup.getChildAt(i)).activeBtn.visible = this.deviceType == 'Pc';
		}
	}

	private addListener() {
		// 添加激活问题按钮监听
		this.questionGroup.addEventListener(egret.TouchEvent.TOUCH_TAP, this.questionGroupHandler, this);
		// 添加滑动连线事件
		this.stage.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.stageBeginHandler, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.stageMoveHandler, this);
		this.stage.addEventListener(egret.TouchEvent.TOUCH_END, this.stageEndHandler, this);
		// 发布答案按钮
		this.publishBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.publishBtnTapHandler, this);
	}

	private questionGroupHandler(e: egret.TouchEvent) {
		let btn = e.target;
		if (btn instanceof eui.Button) {
			// 隐藏激活按钮
			btn.visible = false;
			// 激活题目
			this.activeQuestionItem = <ConTopicQusItem>btn.parent;
			// 显示public group
			this.publishGroup.visible = true;
			// 先让publish按钮enabled
			this.publishBtn.enabled = false;
			// 更新倒计时
			let num = Math.floor(this.data.upQuizItems[this.activeQuestionItem.name].duration / 1000);
			this.timeLabel.text = num + 's';
			let interval = 1000;
			let t = setInterval(() => {
				num -= 1;
				this.timeLabel.text = num + 's';
				if (num <= 0) {
					this.publishBtn.enabled = true;
					clearInterval(t);
				}
			}, interval);
			// 记录起始点
			// 起点坐标(舞台坐标系)
			let point = this.activeQuestionItem.localToGlobal();
			this.startPointOfLine.x = point.x + this.activeQuestionItem.width / 2;
			this.startPointOfLine.y = point.y + this.activeQuestionItem.height + 10;;
			this.maskLayer.visible = true;
			// 变更题目item的状态
			this.questionGroup.$children.forEach((element: ConTopicQusItem) => {
				if (element.name != btn.parent.name) {
					this.updateMaskState(element.maskLayer, MASKSTATE.UNACTIVE);
				} else {
					// 显示正在连接的遮罩颜色
					this.updateMaskState(element.maskLayer, MASKSTATE.ACTIVE);
				}
			});
			// 变更答案item的状态
			this.answerGroup.$children.forEach((element: ConTopicAnsItem) => {
				if (element.isConnected) {
					this.updateMaskState(element.maskLayer, MASKSTATE.UNACTIVE);
				} else {
					// 显示正在连接的遮罩颜色
					this.updateMaskState(element.maskLayer, MASKSTATE.ACTIVE);
				}
			});
		}
	}
	//
	private stageBeginHandler(e: egret.TouchEvent | { target: any }) {
		// 如果没有题目被激活,则不进行以下逻辑
		if (!this.activeQuestionItem) {
			return;
		}
		let content = e.target.parent;
		// 有效的连线起点
		if (content instanceof ConTopicQusItem) {
			if (!content.isConnected && content.name == this.activeQuestionItem.name) {
				this.isValidStart = true;
			}
			// 变更题目item的状态
			this.activeQuestionItem && this.updateMaskState(this.activeQuestionItem.maskLayer, MASKSTATE.PRE)
		}
	}
	private stageMoveHandler(e: egret.TouchEvent | { stageX: number, stageY: number }) {
		if (this.isValidStart) {
			// 记录当前的点
			let curX = e.stageX;
			let curY = e.stageY;
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

	}
	private stageEndHandler(e: egret.TouchEvent | { target: any }) {
		if (this.isValidStart) {
			let content = e.target.parent;
			if (content instanceof ConTopicAnsItem) {
				// 终点吸附的点
				let curX = content.localToGlobal().x + content.width / 2;
				let curY = content.localToGlobal().y - 10;
				console.log(curY);
				// 吸附
				this.updateActiveLine(curX, curY);
				// 落点及长度需要优化(wsw)
				this.activeLine.width += 40;
				// 寻找到答案区域
				if (content.name == this.activeQuestionItem.name) {
					// 连接到正确答案(待封装成方法)
					content.isConnected = this.activeQuestionItem.isConnected = true;
					console.log('答案正确!')
					// 回复问答区
					this.maskLayer.visible = false;
					// 变更题目item的状态
					this.questionGroup.$children.forEach((element: ConTopicQusItem) => {
						if (element.name == this.activeQuestionItem.name) {
							// 修改问题的当前mask状态
							element.currentMaskState = MASKSTATE.RIGHT;
						}
						// 更新mask状态
						this.updateMaskState(element.maskLayer, element.currentMaskState);
					});
					// 变更答案item的状态
					this.answerGroup.$children.forEach((element: ConTopicAnsItem) => {
						if (element.name == content.name) {
							// 修改正确答案的当前mask状态
							element.currentMaskState = MASKSTATE.RIGHT;
						}
						// 更新mask状态
						this.updateMaskState(element.maskLayer, element.currentMaskState);
					});
					this.activeLine.source = 'line_right_png';
					// 重置绘制线段(优化方案: 放在激活逻辑里去);
					this.activeLine = null;
					// 隐藏publish group 
					this.publishGroup.visible = false;
					// 重置this.activeQuestionItem
					this.activeQuestionItem = null;
				} else {
					console.log('连接到了错误答案!');
					this.updateMaskState(this.activeQuestionItem.maskLayer, MASKSTATE.ERROR);
					!content.isConnected && this.updateMaskState(content.maskLayer, MASKSTATE.ERROR);
					this.activeLine.source = 'line_error_png';
					setTimeout(() => {
						this.cancelActiveLine(content);
					}, 500);
				}
			} else {
				this.cancelActiveLine();
			}
			// 结束一轮绘图
			this.isValidStart = false;
		}
	}
	// 取消线段和边框绘制
	private cancelActiveLine(ansItem?) {
		// 没有连接到答案区域, 则取消线条
		this.activeLine && this.activeLine.parent && this.activeLine.parent.removeChild(this.activeLine);
		this.activeLine = null;
		// 边框也要消失
		this.updateMaskState(this.activeQuestionItem.maskLayer, this.activeQuestionItem.currentMaskState);
		ansItem && !ansItem.isConnected && this.updateMaskState(ansItem.maskLayer, ansItem.currentMaskState);

	}

	// 根据两个点来动态更新activeLine
	private updateActiveLine(curX, curY) {
		let startX = this.startPointOfLine.x;
		let startY = this.startPointOfLine.y;
		// 长度-1,为了让结束的点不触发在line上,直接穿透触发在answerItem上
		let distance = Math.sqrt(Math.pow(curX - startX, 2) + Math.pow(curY - startY, 2)) - 1;
		this.activeLine.width = distance < 100 ? 100 : distance;
		// 旋转角度
		let angle = Math.floor(180 / (Math.PI / Math.atan((curY - startY) / (curX - startX))));
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
	}

	private updateMaskState(maskLayer: eui.Rect, state) {
		// 填充颜色
		let fillColor = 0x000000;
		// 填充透明度
		let fillAlpha = 0.5;
		// 描边颜色
		let strokeColor = 0xF9FF7C;
		// 描边透明度
		let strokeAlpha = 1;
		// 描边宽度
		let strokeWeight = 10;
		// 切角
		let ellipse = 40;
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
	}

	// 发布答案按钮的逻辑
	private publishBtnTapHandler(e: egret.TouchEvent) {
		if (this.activeQuestionItem) {
			// console.log(111);
			// 先触发激活按钮
			// this.activeQuestionItem.activeBtn.disp
			// 触发touchbegin
			this.stageBeginHandler({ target: this.activeQuestionItem.activeBtn });
			// 然后触发touchmove
			// 先找到当前题目对应的答案
			let ansItemIndex = this.config[this.activeQuestionItem.name];
			let ansItem = <ConTopicAnsItem>this.answerGroup.getChildAt(ansItemIndex);
			// 计算出斜率
			let endPointX = ansItem.localToGlobal().x + ansItem.width / 2;
			let endPointY = ansItem.localToGlobal().y;
			this.slope =  (this.startPointOfLine.x - endPointX) / (this.startPointOfLine.y - endPointY);
			console.log(this.publishDistance);
			egret.Tween.get(this).to({ publishDistance: endPointY }, 800).call(() => {
				console.log('publish连线完成');
				this.stageEndHandler({ target: ansItem.bgImg })
			})
		}
	}

	public get publishDistance(): number {
		return this.activeQuestionItem ? this.startPointOfLine.y : 0;
	}
	public set publishDistance(value: number) {
		let x1 = (value - this.startPointOfLine.y) * this.slope;
		this.stageMoveHandler({ stageX: x1 + this.startPointOfLine.x, stageY: value });
	}

}
enum MASKSTATE {
	ACTIVE = 1, // 激活状态
	PRE,		// 答题中
	RIGHT, 		// 答对
	ERROR, 		// 答错
	UNACTIVE	// 未激活状态
}
/**
 * coder by wangshengwei 
 * 2019/3/15
 */
class ConTopicQusItem extends eui.Component implements eui.UIComponent {

	public bgImg: eui.Image;
	public activeBtn: eui.Button;
	public maskLayer: eui.Rect;


	// 是否已经被连接
	public isConnected: boolean = false;
	// 遮罩状态
	public currentMaskState: MASKSTATE = MASKSTATE.ACTIVE;

	public constructor() {
		super();
		this.skinName = 'ConTopicQusItemSkin';
	}
	protected partAdded(partName: string, instance: any): void {
		super.partAdded(partName, instance);
	}

	protected childrenCreated(): void {
		super.childrenCreated();
		// 
	}
}


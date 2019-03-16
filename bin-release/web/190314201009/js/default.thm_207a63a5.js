window.skins={};
                function __extends(d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = {};
                generateEUI.paths = {};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/PadViewSkin.exml'] = window.StuViewSkin = (function (_super) {
	__extends(StuViewSkin, _super);
	var StuViewSkin$Skin1 = 	(function (_super) {
		__extends(StuViewSkin$Skin1, _super);
		function StuViewSkin$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hong_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin1;
	})(eui.Skin);

	var StuViewSkin$Skin2 = 	(function (_super) {
		__extends(StuViewSkin$Skin2, _super);
		function StuViewSkin$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "huang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin2;
	})(eui.Skin);

	var StuViewSkin$Skin3 = 	(function (_super) {
		__extends(StuViewSkin$Skin3, _super);
		function StuViewSkin$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "lan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin3;
	})(eui.Skin);

	function StuViewSkin() {
		_super.call(this);
		this.skinParts = ["classBG","GroupBox","AniGroup","BtnPrev","BtnAni","BtnNext","pan_01","pan_02","pan_03","BtnClearPan","EvenGroup","PenGroup","BtnLiang","TimerLable","BtnStart","DialogGroup","_teacher","_student"];
		
		this.height = 810;
		this.width = 1440;
		this.elementsContent = [this.classBG_i(),this.GroupBox_i(),this.AniGroup_i(),this.EvenGroup_i(),this.PenGroup_i(),this.DialogGroup_i(),this._teacher_i(),this._student_i()];
	}
	var _proto = StuViewSkin.prototype;

	_proto.classBG_i = function () {
		var t = new eui.Image();
		this.classBG = t;
		t.fillMode = "scale";
		t.height = 810;
		t.source = "";
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.GroupBox_i = function () {
		var t = new eui.Group();
		this.GroupBox = t;
		t.height = 810;
		t.width = 1077;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.AniGroup_i = function () {
		var t = new eui.Group();
		this.AniGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.width = 1077;
		return t;
	};
	_proto.EvenGroup_i = function () {
		var t = new eui.Group();
		this.EvenGroup = t;
		t.height = 810;
		t.visible = false;
		t.width = 1077;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.BtnPrev_i(),this.BtnAni_i(),this.BtnNext_i(),this.pan_01_i(),this.pan_02_i(),this.pan_03_i(),this.BtnClearPan_i()];
		return t;
	};
	_proto.BtnPrev_i = function () {
		var t = new eui.Button();
		this.BtnPrev = t;
		t.bottom = 0;
		t.enabled = false;
		t.height = 50;
		t.label = "上一题";
		t.left = 0;
		return t;
	};
	_proto.BtnAni_i = function () {
		var t = new eui.Button();
		this.BtnAni = t;
		t.enabled = true;
		t.height = 50;
		t.label = "播放动画";
		t.right = 0;
		t.width = 100;
		t.y = 55;
		return t;
	};
	_proto.BtnNext_i = function () {
		var t = new eui.Button();
		this.BtnNext = t;
		t.bottom = 0;
		t.label = "下一题";
		t.right = 0;
		return t;
	};
	_proto.pan_01_i = function () {
		var t = new eui.Button();
		this.pan_01 = t;
		t.height = 50;
		t.label = "";
		t.right = 0;
		t.width = 100;
		t.y = 111;
		t.skinName = StuViewSkin$Skin1;
		return t;
	};
	_proto.pan_02_i = function () {
		var t = new eui.Button();
		this.pan_02 = t;
		t.height = 50;
		t.label = "";
		t.right = 0;
		t.width = 100;
		t.y = 164;
		t.skinName = StuViewSkin$Skin2;
		return t;
	};
	_proto.pan_03_i = function () {
		var t = new eui.Button();
		this.pan_03 = t;
		t.height = 50;
		t.label = "";
		t.right = 0;
		t.width = 100;
		t.y = 217;
		t.skinName = StuViewSkin$Skin3;
		return t;
	};
	_proto.BtnClearPan_i = function () {
		var t = new eui.Button();
		this.BtnClearPan = t;
		t.enabled = false;
		t.height = 50;
		t.label = "清除画笔";
		t.right = 0;
		t.width = 100;
		t.y = 270;
		return t;
	};
	_proto.PenGroup_i = function () {
		var t = new eui.Group();
		this.PenGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 810;
		t.width = 1077;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.DialogGroup_i = function () {
		var t = new eui.Group();
		this.DialogGroup = t;
		t.height = 810;
		t.width = 1077;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.BtnLiang_i(),this.TimerLable_i(),this.BtnStart_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 401.52;
		t.strokeAlpha = 0;
		t.width = 784;
		t.x = 147;
		t.y = 204;
		return t;
	};
	_proto.BtnLiang_i = function () {
		var t = new eui.Button();
		this.BtnLiang = t;
		t.horizontalCenter = 0;
		t.label = "良建测试专用";
		t.y = 649.76;
		return t;
	};
	_proto.TimerLable_i = function () {
		var t = new eui.Label();
		this.TimerLable = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Verdana";
		t.height = 154;
		t.horizontalCenter = 0;
		t.size = 122;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 550;
		t.y = 385.76;
		return t;
	};
	_proto.BtnStart_i = function () {
		var t = new eui.Button();
		this.BtnStart = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 74;
		t.horizontalCenter = 0;
		t.label = "开始上课";
		t.width = 248;
		t.y = 572.73;
		return t;
	};
	_proto._teacher_i = function () {
		var t = new eui.Rect();
		this._teacher = t;
		t.height = 259;
		t.width = 345;
		t.x = 1086;
		t.y = 0;
		return t;
	};
	_proto._student_i = function () {
		var t = new eui.Rect();
		this._student = t;
		t.height = 259;
		t.width = 345;
		t.x = 1086;
		t.y = 265;
		return t;
	};
	return StuViewSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/StuViewSkin.exml'] = window.StuViewSkin = (function (_super) {
	__extends(StuViewSkin, _super);
	var StuViewSkin$Skin4 = 	(function (_super) {
		__extends(StuViewSkin$Skin4, _super);
		function StuViewSkin$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hong_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin4;
	})(eui.Skin);

	var StuViewSkin$Skin5 = 	(function (_super) {
		__extends(StuViewSkin$Skin5, _super);
		function StuViewSkin$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "huang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin5;
	})(eui.Skin);

	var StuViewSkin$Skin6 = 	(function (_super) {
		__extends(StuViewSkin$Skin6, _super);
		function StuViewSkin$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "lan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin6;
	})(eui.Skin);

	function StuViewSkin() {
		_super.call(this);
		this.skinParts = ["classBG","GroupBox","AniGroup","BtnPrev","BtnAni","BtnNext","pan_01","pan_02","pan_03","BtnClearPan","EvenGroup","PenGroup","BtnLiang","TimerLable","BtnStart","DialogGroup","_teacher","_student"];
		
		this.height = 1080;
		this.width = 2340;
		this.elementsContent = [this.classBG_i(),this.GroupBox_i(),this.AniGroup_i(),this.EvenGroup_i(),this.PenGroup_i(),this.DialogGroup_i(),this._teacher_i(),this._student_i()];
	}
	var _proto = StuViewSkin.prototype;

	_proto.classBG_i = function () {
		var t = new eui.Image();
		this.classBG = t;
		t.fillMode = "scale";
		t.height = 1080;
		t.source = "";
		t.width = 2340;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.GroupBox_i = function () {
		var t = new eui.Group();
		this.GroupBox = t;
		t.height = 1080;
		t.width = 1856;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.AniGroup_i = function () {
		var t = new eui.Group();
		this.AniGroup = t;
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		return t;
	};
	_proto.EvenGroup_i = function () {
		var t = new eui.Group();
		this.EvenGroup = t;
		t.height = 1080;
		t.visible = false;
		t.width = 1856;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this.BtnPrev_i(),this.BtnAni_i(),this.BtnNext_i(),this.pan_01_i(),this.pan_02_i(),this.pan_03_i(),this.BtnClearPan_i()];
		return t;
	};
	_proto.BtnPrev_i = function () {
		var t = new eui.Button();
		this.BtnPrev = t;
		t.enabled = false;
		t.height = 50;
		t.label = "上一题";
		t.left = 70;
		t.y = 1000;
		return t;
	};
	_proto.BtnAni_i = function () {
		var t = new eui.Button();
		this.BtnAni = t;
		t.enabled = true;
		t.height = 50;
		t.label = "播放动画";
		t.width = 100;
		t.x = 1686;
		t.y = 55;
		return t;
	};
	_proto.BtnNext_i = function () {
		var t = new eui.Button();
		this.BtnNext = t;
		t.label = "下一题";
		t.x = 1686;
		t.y = 1000;
		return t;
	};
	_proto.pan_01_i = function () {
		var t = new eui.Button();
		this.pan_01 = t;
		t.height = 50;
		t.label = "";
		t.width = 100;
		t.x = 1686;
		t.y = 111;
		t.skinName = StuViewSkin$Skin4;
		return t;
	};
	_proto.pan_02_i = function () {
		var t = new eui.Button();
		this.pan_02 = t;
		t.height = 50;
		t.label = "";
		t.width = 100;
		t.x = 1686;
		t.y = 164;
		t.skinName = StuViewSkin$Skin5;
		return t;
	};
	_proto.pan_03_i = function () {
		var t = new eui.Button();
		this.pan_03 = t;
		t.height = 50;
		t.label = "";
		t.width = 100;
		t.x = 1686;
		t.y = 217;
		t.skinName = StuViewSkin$Skin6;
		return t;
	};
	_proto.BtnClearPan_i = function () {
		var t = new eui.Button();
		this.BtnClearPan = t;
		t.enabled = false;
		t.height = 50;
		t.horizontalCenter = 808;
		t.label = "清除画笔";
		t.right = 70;
		t.width = 100;
		t.y = 270;
		return t;
	};
	_proto.PenGroup_i = function () {
		var t = new eui.Group();
		this.PenGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1080;
		t.visible = false;
		t.width = 1856;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.DialogGroup_i = function () {
		var t = new eui.Group();
		this.DialogGroup = t;
		t.height = 1080;
		t.width = 1856;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.BtnLiang_i(),this.TimerLable_i(),this.BtnStart_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 401.52;
		t.strokeAlpha = 0;
		t.width = 784;
		t.x = 536;
		t.y = 339;
		return t;
	};
	_proto.BtnLiang_i = function () {
		var t = new eui.Button();
		this.BtnLiang = t;
		t.label = "良建测试专用";
		t.x = 860;
		t.y = 649.76;
		return t;
	};
	_proto.TimerLable_i = function () {
		var t = new eui.Label();
		this.TimerLable = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Verdana";
		t.height = 154;
		t.size = 122;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 550;
		t.x = 653;
		t.y = 385.76;
		return t;
	};
	_proto.BtnStart_i = function () {
		var t = new eui.Button();
		this.BtnStart = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 74;
		t.label = "开始上课";
		t.width = 248;
		t.x = 804;
		t.y = 572.73;
		return t;
	};
	_proto._teacher_i = function () {
		var t = new eui.Rect();
		this._teacher = t;
		t.bottom = 723;
		t.horizontalCenter = 928;
		t.left = 1868;
		t.right = 12;
		t.top = 12;
		t.verticalCenter = -355.5;
		return t;
	};
	_proto._student_i = function () {
		var t = new eui.Rect();
		this._student = t;
		t.bottom = 366;
		t.horizontalCenter = 928;
		t.left = 1868;
		t.right = 12;
		t.top = 369;
		t.verticalCenter = 1.5;
		return t;
	};
	return StuViewSkin;
})(eui.Skin);generateEUI.paths['resource/game_skins/TeaViewSkin.exml'] = window.StuViewSkin = (function (_super) {
	__extends(StuViewSkin, _super);
	var StuViewSkin$Skin7 = 	(function (_super) {
		__extends(StuViewSkin$Skin7, _super);
		function StuViewSkin$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "hong_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin7;
	})(eui.Skin);

	var StuViewSkin$Skin8 = 	(function (_super) {
		__extends(StuViewSkin$Skin8, _super);
		function StuViewSkin$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "huang_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin8;
	})(eui.Skin);

	var StuViewSkin$Skin9 = 	(function (_super) {
		__extends(StuViewSkin$Skin9, _super);
		function StuViewSkin$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = StuViewSkin$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "lan_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return StuViewSkin$Skin9;
	})(eui.Skin);

	function StuViewSkin() {
		_super.call(this);
		this.skinParts = ["GroupBox","AniGroup","PenGroup","BtnPrev","BtnAni","BtnNext","pan_01","pan_02","pan_03","BtnClearPan","EvenGroup","BtnLiang","TimerLable","BtnStart","DialogGroup"];
		
		this.height = 1080;
		this.width = 1440;
		this.elementsContent = [this.GroupBox_i(),this.AniGroup_i(),this.PenGroup_i(),this.EvenGroup_i(),this.DialogGroup_i()];
	}
	var _proto = StuViewSkin.prototype;

	_proto.GroupBox_i = function () {
		var t = new eui.Group();
		this.GroupBox = t;
		t.height = 1080;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.AniGroup_i = function () {
		var t = new eui.Group();
		this.AniGroup = t;
		t.height = 1080;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.PenGroup_i = function () {
		var t = new eui.Group();
		this.PenGroup = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1080;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.EvenGroup_i = function () {
		var t = new eui.Group();
		this.EvenGroup = t;
		t.anchorOffsetX = 0;
		t.height = 1080;
		t.width = 100;
		t.x = 1336;
		t.y = 0;
		t.elementsContent = [this.BtnPrev_i(),this.BtnAni_i(),this.BtnNext_i(),this.pan_01_i(),this.pan_02_i(),this.pan_03_i(),this.BtnClearPan_i()];
		return t;
	};
	_proto.BtnPrev_i = function () {
		var t = new eui.Button();
		this.BtnPrev = t;
		t.bottom = 0;
		t.enabled = false;
		t.height = 50;
		t.label = "上一题";
		t.left = 0;
		t.visible = false;
		return t;
	};
	_proto.BtnAni_i = function () {
		var t = new eui.Button();
		this.BtnAni = t;
		t.enabled = true;
		t.height = 50;
		t.label = "播放动画";
		t.right = 0;
		t.width = 100;
		t.y = 55;
		return t;
	};
	_proto.BtnNext_i = function () {
		var t = new eui.Button();
		this.BtnNext = t;
		t.bottom = 0;
		t.label = "下一题";
		t.right = 0;
		return t;
	};
	_proto.pan_01_i = function () {
		var t = new eui.Button();
		this.pan_01 = t;
		t.height = 50;
		t.label = "";
		t.right = 0;
		t.width = 100;
		t.y = 111;
		t.skinName = StuViewSkin$Skin7;
		return t;
	};
	_proto.pan_02_i = function () {
		var t = new eui.Button();
		this.pan_02 = t;
		t.height = 50;
		t.label = "";
		t.right = 0;
		t.width = 100;
		t.y = 164;
		t.skinName = StuViewSkin$Skin8;
		return t;
	};
	_proto.pan_03_i = function () {
		var t = new eui.Button();
		this.pan_03 = t;
		t.height = 50;
		t.label = "";
		t.right = 0;
		t.width = 100;
		t.y = 217;
		t.skinName = StuViewSkin$Skin9;
		return t;
	};
	_proto.BtnClearPan_i = function () {
		var t = new eui.Button();
		this.BtnClearPan = t;
		t.enabled = false;
		t.height = 50;
		t.label = "清除画笔";
		t.right = 0;
		t.width = 100;
		t.y = 270;
		return t;
	};
	_proto.DialogGroup_i = function () {
		var t = new eui.Group();
		this.DialogGroup = t;
		t.height = 1080;
		t.width = 1440;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Rect1_i(),this.BtnLiang_i(),this.TimerLable_i(),this.BtnStart_i()];
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.ellipseHeight = 20;
		t.ellipseWidth = 20;
		t.fillColor = 0xffffff;
		t.height = 401.52;
		t.strokeAlpha = 0;
		t.width = 784;
		t.x = 328;
		t.y = 339;
		return t;
	};
	_proto.BtnLiang_i = function () {
		var t = new eui.Button();
		this.BtnLiang = t;
		t.horizontalCenter = 0;
		t.label = "良建测试专用";
		t.y = 649.76;
		return t;
	};
	_proto.TimerLable_i = function () {
		var t = new eui.Label();
		this.TimerLable = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Verdana";
		t.height = 154;
		t.horizontalCenter = 0;
		t.size = 122;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x000000;
		t.verticalAlign = "middle";
		t.width = 550;
		t.y = 385.76;
		return t;
	};
	_proto.BtnStart_i = function () {
		var t = new eui.Button();
		this.BtnStart = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.enabled = true;
		t.height = 74;
		t.horizontalCenter = 0;
		t.label = "开始上课";
		t.width = 248;
		t.y = 572.73;
		return t;
	};
	return StuViewSkin;
})(eui.Skin);
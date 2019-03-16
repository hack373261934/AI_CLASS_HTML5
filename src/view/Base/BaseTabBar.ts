
module ui {
    export class BaseTabBar extends eui.Group {
        /*
         * 布局形式
         * 横向=1
         * 纵向=0
         * 3==在外部进行坐标设置
         * */
        public layoutType:number;

        private nowHeight:number = 0;
        private nowWidth:number = 0
        public widthN:number = 0;
        public heightN:number = 0;
        private items:eui.UIComponent[] = [];
        private buttonTF:eui.UIComponent[] = [];

        constructor(layout:number, widthN:number, heightN:number) {
            super();
            this.layoutType = layout;
            this.widthN = widthN;
            this.heightN = heightN
        }

        /*
         * 一般现实对象都在UI编辑器里边摆好位置了
         * 这里只对排列方式进行布局
         * */
        addItem(item:eui.UIComponent, type:number):void {
            if (this.layoutType == 1) {
                item.y = 0
                item.x = this.nowWidth;
                this.nowWidth += item.width + this.widthN;
            } else {
                item.x = 0
                item.y = this.nowHeight;
                this.nowHeight += item.height + this.heightN;
            }
            item.addEventListener(egret.TouchEvent.TOUCH_TAP, this._selectItem, this);
            this.addChild(item);
            if (type == 0) {
                this.items.push(item)
            } else {
                this.buttonTF.push(item);
                //item.y = 20
            }

        }

        addItems(items:eui.UIComponent[], type:number = 0, defShow:number = 0):void {
            var i:number, m:number;
            for (i = 0, m = items.length; i < m; i++) {
                this.addItem(items[i], type)
            }
            if (type == 0)
                items[defShow].dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP))
        }

        public selectItem(index:number):any {
            var item:eui.UIComponent = this.items[index];
            item.dispatchEvent(new egret.TouchEvent(egret.TouchEvent.TOUCH_TAP));
            return item;
        }

        public itemRepPos(index:number):void {
            this.addChild(this.items[index])
        }

        private _selectItem(e:egret.TouchEvent = null):void {
            var i:number, m:number;
            var clickButtonIndex:number;
            for (i = 0, m = this.items.length; i < m; i++) {
                var item:eui.UIComponent = this.items[i];
                var btn:eui.Button = <eui.Button>item
                if (e.currentTarget === item) {
                    if(btn.enabled){

                        btn.currentState="down";
                        this.setChildIndex(item, this.items.length - 1);
                    }

                    //item.y = 0;
                    clickButtonIndex = i;
                } else {
                    if(btn.enabled){
                        this.setChildIndex(item, i);
                        btn.currentState="up"
                    }

                    //item.y = 10;
                }

            }

            for (i = 0, m = this.buttonTF.length; i < m; i++) {
                var item:eui.UIComponent = this.buttonTF[i];

                if (i == clickButtonIndex) {
                    (<eui.Button>item).currentState="down";
                    //item.y = 10;
                } else {

                    (<eui.Button>item).currentState="up";
                    //item.y = 20;
                }

            }

        }

        dispose():void {
            this.removeChildren();
            if (this.parent) {
                this.parent.removeChild(this);
            }
        }
    }
}

module utils {
    export class UIUtils {
        static getBitmap(name:string):egret.Bitmap {
            return new egret.Bitmap(RES.getRes(name));
        }

        static showNum(parent:eui.Group, num:number, titleName:string,isremove:boolean=true):void {
            if(isremove){
                while (parent.numChildren) {
                    parent.removeChildAt(0);
                }
            }


            if (num < 0)return;
            var str:string = num.toString();
            var arr:string[] = str.split('.');
            str = arr[0];
            var num_pic:eui.Image;
            var num_x:number = 0;
            //console.debug((parent instanceof egret.) +"")
            for (var i:number = 0; i < str.length; i++) {
                num_pic = new eui.Image();
                //var bit:egret.Bitmap = UIUtils.getBitmap(titleName + str.charAt(i))
                num_pic.source = RES.getRes(name);
                num_pic.x = num_x;

                //if( parent instanceof egret.DisplayObjectContainer){
                parent.addChild(num_pic);
                //}else{
                //    (<egret.DisplayObjectContainer>parent).addChild(num_pic);
                //}

                num_x += num_pic.width;
            }
        }



        /**
         *
         * @param value 时间 毫秒为单位
         * @param type 1 00:30  分:秒
         *             2 00:00:00 时分秒
         *               3 3600 秒
         * @return
         *
         */
        public static getTime(value:number, type:number = 1):string {


            var _lastTime:string;
            var tempS:number = Math.floor(value / 1000);

            var s:number = Math.floor(tempS % 60);

            var m:number = Math.floor(tempS / 60);

            m = m >= 60 ? Math.floor(m % 60) : m;

            var h:number = Math.floor(tempS / 3600);
            if (h > 24 && type == 4) {
                return Math.floor(h / 24) + "天";
            }
            switch (type) {
                case 1 :

                    _lastTime = this.addPlace(m) + ":" + this.addPlace(s);

                    break;

                case 2 :


                    _lastTime = this.addPlace(h) + ":" + this.addPlace(m) + ":" + this.addPlace(s);

                    break;
                case 3 :

                    _lastTime = tempS.toString();

                    break;
            }


            return _lastTime;
        }

        /**
         * 补位
         * @param n 要补位的数字
         * @param placeStr 要补 的字符串
         * @param place 总共多少位
         * @param placeBefore 不在前面
         * @return
         *
         */
        private static addPlace(n:number, placeStr:string = "0", place:number = 2, placeBefore:Boolean = true):string {
            var needPlace:string = "";

            var need:number = place - n.toString().length

            for (var i:number = 0; i < need; i++) {
                needPlace += placeStr;
            }

            return placeBefore ? needPlace + n : n + needPlace;

        }
    }
}

module common {
    export class Utils {
        static getBitmap(name:string):egret.Bitmap {
            return new egret.Bitmap(RES.getRes(name));
        }
    }
}

module utils {

    /**
     * 检查一个参数对象内是否存在所有的属性
     * @param param
     * @param propName
     * @returns {boolean}
     */
    export function hasProperties(param:any, ...propName: string[]):boolean {
        var result:boolean = true;
        var name:string;

        for (var i:number = 0, m:number = propName.length; i<m; i++) {
            name = propName[i];

            if (param[name] === undefined) {

                result = false;
                break;
            }
        }

        return result;
    }

    /**
     * 在两个对象之间按不同的属性名进行值复制
     * @param dest
     * @param source
     * @param destParams
     * @param sourceParams
     */
    export function copyProperties(dest:any, source:any, destParams:string[], sourceParams?:string[]):void {
        if (!sourceParams)
            sourceParams = destParams;

        var i:number, m:number = Math.min(destParams.length, sourceParams.length);
        var v:any;

        for (i=0; i<m; i++) {
            v = source[sourceParams[i]];

            switch (typeof v) {
                case 'string':
                case 'number':
                case 'boolean':
                    dest[destParams[i]] = v;
                    break;

                case 'object':
                    if (v.slice) {
                        // 如果是数组，则做浅拷贝
                        dest[destParams[i]] = v.slice();
                    } else {
                        // 现在是个 object 类型对象
                        var v2:any = {};
                        var key:string;
                        for (key in v) {
                            v2[key] = v[key];
                        }
                        dest[destParams[i]] = v2;
                    }
            }
        }
    }

    /**
     * 从静态数值对象复制属性到实例对象。
     * 在静态数值里，所有属性名都是首字母大写规范，
     * 在实例对象里，所有静态属性名都是与对应静态数值内相同属性名的首字母小写规范。
     * 比如，迷宫名称，在静态数值内是 Maze.Name，在实例内是 Maze.name
     *
     * @param dest
     * @param source
     * @param destParams
     */
    export function copyPropertiesFromStaticData(dest:any, source:any, destParams:string[]):void {
        var sourceParams:string[];

        sourceParams = destParams.map(function(param:string):string {
            return initialUpper(param);
        });

        return copyProperties(dest, source, destParams, sourceParams);
    }

    /**
     * 首字母大写
     *
     * 由于代码使用的属性基于首字母小写，而静态数据表内基于首字母大写；
     * 所以在部分逻辑里需要把首字母从小写转为大写，从而获得在静态数据表内的相同术语。
     *
     * @param property
     */
    export function initialUpper(property:string):string {
        if (!property || property.length === 0)
            return '';

        var initialCode:number = property.charCodeAt(0);

        if (initialCode >= 97 && initialCode <= 122) {
            initialCode -= 32;

            return String.fromCharCode(initialCode) + property.substring(1);
        }

        return property;
    }
    /*
     *计算两点之间的角度
     *结果在*180/Math.PI，得到角度值
     *
     */
    export function  pointToAngle(statPoint:egret.Point,endPoint:egret.Point):number
    {
        if (endPoint.x == statPoint.x)
            if (endPoint.y > statPoint.y)
                return Math.PI * 0.5;
            else return Math.PI * 1.5;
        else if (endPoint.y == statPoint.y)
            if (endPoint.x > statPoint.x)
                return 0;
            else return Math.PI;
        else
        {
            var Result:number = Math.atan((statPoint.y-endPoint.y)/(statPoint.x-endPoint.x))
            if ((endPoint.x < statPoint.x) && (endPoint.x > statPoint.x))
                return Result + Math.PI;
            else if ((endPoint.x < statPoint.x) && (endPoint.x < statPoint.x))
                return Result + Math.PI;
            else if ((endPoint.x > statPoint.x) && (endPoint.x < statPoint.x))
                return Result + 2 * Math.PI;
            else return Result;
        }
    }
    /*
     *两点之间的距离
     *
     *
     */
    export function getPointDistance(point1:egret.Point,point2:egret.Point):number{
        var dis:number;
        if(point1.x==point2.x){
            if(point1.y != point2.y){
                dis = Math.abs(point1.y-point2.y);
            }else{
                dis = 0;
            }

        }else if(point1.y == point2.y){
            if(point1.x != point2.x){
                dis = Math.abs(point1.x-point2.x);
            }else{
                dis = 0;
            }
        }else{
            dis = Math.sqrt(Math.pow(point1.x-point2.x,2)+Math.pow(point1.y-point2.y,2));
        }
        return dis;
    }

    /**
     * 移除一个容器的全部显示对象
     * */
    export function removeChildren(parent:egret.DisplayObjectContainer):void {
        if (parent) {
            while(parent.numChildren > 0) {
                parent.removeChildAt(0);
            }
        }
    }
    /**
     * 根据名字和静态 Id 获取对应的静态数值
     *
     * @param name              数据表名，比如迷宫静态数值，存放于 Maze.json 内，则传入 'Maze' 即可
     * @param staticId          单条静态数值的静态 Id
     * @param release           是否在获取数据后从 RES 模块里清理对应的数据缓存
     * @returns {any}
     */
    export function getStaticDataByNameAndId(name:string, staticId:any, release:boolean = false):any {

        var config:any = RES.getRes(name + '_json');
        var sd:any = null;

        if (!!config) {
            sd = config[staticId];

            //if (release)
                //RES.destroyRes(name);
        }

        return sd;
    }

    /**
     * 根据指定名字、父静态 Id 属性名及 Id，查找所有拥有相同父 Id 的静态数值 Id 数组
     *
     * @param name
     * @param parentStaticIdName
     * @param parentStaticId
     * @param release
     * @returns {any[]}
     */
    export function getStaticIdsByNameAndParentId(name:string, parentStaticIdName:string, parentStaticId:number, release:boolean = false):number[] {
        var config:any = RES.getRes(name + '_json');
        var sd:any, results:number[];

        if (!!config) {

            results = [];

            if (config instanceof Array) {
                for (var i:number = 0, m:number = config.length; i<m; i++) {
                    sd = config[i];

                    if (sd[parentStaticIdName] === parentStaticId) {
                        results.push(sd['Id']);
                    }
                }
            } else {
                for (var k in config) {
                    sd = config[k];

                    if (sd[parentStaticIdName] === parentStaticId) {
                        results.push(sd['Id']);
                    }
                }
            }
        }

        return results;
    }

}
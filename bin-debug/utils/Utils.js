var utils;
(function (utils) {
    /**
     * 检查一个参数对象内是否存在所有的属性
     * @param param
     * @param propName
     * @returns {boolean}
     */
    function hasProperties(param) {
        var propName = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            propName[_i - 1] = arguments[_i];
        }
        var result = true;
        var name;
        for (var i = 0, m = propName.length; i < m; i++) {
            name = propName[i];
            if (param[name] === undefined) {
                result = false;
                break;
            }
        }
        return result;
    }
    utils.hasProperties = hasProperties;
    /**
     * 在两个对象之间按不同的属性名进行值复制
     * @param dest
     * @param source
     * @param destParams
     * @param sourceParams
     */
    function copyProperties(dest, source, destParams, sourceParams) {
        if (!sourceParams)
            sourceParams = destParams;
        var i, m = Math.min(destParams.length, sourceParams.length);
        var v;
        for (i = 0; i < m; i++) {
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
                    }
                    else {
                        // 现在是个 object 类型对象
                        var v2 = {};
                        var key;
                        for (key in v) {
                            v2[key] = v[key];
                        }
                        dest[destParams[i]] = v2;
                    }
            }
        }
    }
    utils.copyProperties = copyProperties;
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
    function copyPropertiesFromStaticData(dest, source, destParams) {
        var sourceParams;
        sourceParams = destParams.map(function (param) {
            return initialUpper(param);
        });
        return copyProperties(dest, source, destParams, sourceParams);
    }
    utils.copyPropertiesFromStaticData = copyPropertiesFromStaticData;
    /**
     * 首字母大写
     *
     * 由于代码使用的属性基于首字母小写，而静态数据表内基于首字母大写；
     * 所以在部分逻辑里需要把首字母从小写转为大写，从而获得在静态数据表内的相同术语。
     *
     * @param property
     */
    function initialUpper(property) {
        if (!property || property.length === 0)
            return '';
        var initialCode = property.charCodeAt(0);
        if (initialCode >= 97 && initialCode <= 122) {
            initialCode -= 32;
            return String.fromCharCode(initialCode) + property.substring(1);
        }
        return property;
    }
    utils.initialUpper = initialUpper;
    /*
     *计算两点之间的角度
     *结果在*180/Math.PI，得到角度值
     *
     */
    function pointToAngle(statPoint, endPoint) {
        if (endPoint.x == statPoint.x)
            if (endPoint.y > statPoint.y)
                return Math.PI * 0.5;
            else
                return Math.PI * 1.5;
        else if (endPoint.y == statPoint.y)
            if (endPoint.x > statPoint.x)
                return 0;
            else
                return Math.PI;
        else {
            var Result = Math.atan((statPoint.y - endPoint.y) / (statPoint.x - endPoint.x));
            if ((endPoint.x < statPoint.x) && (endPoint.x > statPoint.x))
                return Result + Math.PI;
            else if ((endPoint.x < statPoint.x) && (endPoint.x < statPoint.x))
                return Result + Math.PI;
            else if ((endPoint.x > statPoint.x) && (endPoint.x < statPoint.x))
                return Result + 2 * Math.PI;
            else
                return Result;
        }
    }
    utils.pointToAngle = pointToAngle;
    /*
     *两点之间的距离
     *
     *
     */
    function getPointDistance(point1, point2) {
        var dis;
        if (point1.x == point2.x) {
            if (point1.y != point2.y) {
                dis = Math.abs(point1.y - point2.y);
            }
            else {
                dis = 0;
            }
        }
        else if (point1.y == point2.y) {
            if (point1.x != point2.x) {
                dis = Math.abs(point1.x - point2.x);
            }
            else {
                dis = 0;
            }
        }
        else {
            dis = Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2));
        }
        return dis;
    }
    utils.getPointDistance = getPointDistance;
    /**
     * 移除一个容器的全部显示对象
     * */
    function removeChildren(parent) {
        if (parent) {
            while (parent.numChildren > 0) {
                parent.removeChildAt(0);
            }
        }
    }
    utils.removeChildren = removeChildren;
    /**
     * 根据名字和静态 Id 获取对应的静态数值
     *
     * @param name              数据表名，比如迷宫静态数值，存放于 Maze.json 内，则传入 'Maze' 即可
     * @param staticId          单条静态数值的静态 Id
     * @param release           是否在获取数据后从 RES 模块里清理对应的数据缓存
     * @returns {any}
     */
    function getStaticDataByNameAndId(name, staticId, release) {
        if (release === void 0) { release = false; }
        var config = RES.getRes(name + '_json');
        var sd = null;
        if (!!config) {
            sd = config[staticId];
            //if (release)
            //RES.destroyRes(name);
        }
        return sd;
    }
    utils.getStaticDataByNameAndId = getStaticDataByNameAndId;
    /**
     * 根据指定名字、父静态 Id 属性名及 Id，查找所有拥有相同父 Id 的静态数值 Id 数组
     *
     * @param name
     * @param parentStaticIdName
     * @param parentStaticId
     * @param release
     * @returns {any[]}
     */
    function getStaticIdsByNameAndParentId(name, parentStaticIdName, parentStaticId, release) {
        if (release === void 0) { release = false; }
        var config = RES.getRes(name + '_json');
        var sd, results;
        if (!!config) {
            results = [];
            if (config instanceof Array) {
                for (var i = 0, m = config.length; i < m; i++) {
                    sd = config[i];
                    if (sd[parentStaticIdName] === parentStaticId) {
                        results.push(sd['Id']);
                    }
                }
            }
            else {
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
    utils.getStaticIdsByNameAndParentId = getStaticIdsByNameAndParentId;
})(utils || (utils = {}));
//# sourceMappingURL=Utils.js.map

const Util = {};
/* 验证是否为空 */
Util.IsNull = function (obj) {
    var flag = false;
    if (obj === null || obj === undefined || typeof (obj) === 'undefined' || obj === '') {
        flag = true;
    } else if (typeof (obj) === 'string') {
        obj = obj.trim();
        if (obj === '') {//为空
            flag = true;
        } else {//不为空
            obj = obj.toUpperCase();
            if (obj === 'NULL' || obj === 'UNDEFINED' || obj === '{}') {
                flag = true;
            }
        }
    }
    else {
        flag = false;
    }
    return flag;
}

Util.Trim = function(str,is_global){
    var result;
    result = str.replace(/(^\s+)|(\s+$)/g,"");
    if(is_global.toLowerCase()==="g"){
        result = result.replace(/\s/g,"");
    }
    return result;
}

Util.loginOut = function(){
  
}

export default Util;


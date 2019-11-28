/**
 * Created by wangshuo on 2017/2/20.
 */
function get(obj,key) {
    key=key.split('.');
    var res;
    while (res=key.shift()){
        obj=obj[res];
        if(!obj)return undefined;
    }
    return obj;
}

var obj={
    a:{
        b:{
            c:"1"
        }
    }
}


var a=0;
var b=0;

function A(a) {
    A=function (b) {
        return a+b++;
    }
    return a++;
}
console.log(A(1))
console.log(A(2))
// console.log(get(obj,'a.b.c'))
function commafy(num) {
    num = num + '';
    var reg = /(-?d+)(d{3})/;

        num = num.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    return num;
}
console.log(commafy("23244123495Q"))

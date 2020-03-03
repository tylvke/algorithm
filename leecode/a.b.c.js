function get(obj,str) {
    var keys=str.split('.');
    var res;
    while (res=keys.shift()){
        obj=obj[res];
        if(!obj)return undefined;
    }
    return obj;
}
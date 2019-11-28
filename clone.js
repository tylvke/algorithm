/**
 * Created by wangshuo on 2017/2/19.
 */
function clone(parent,child) {
    var child=child || {};
    for(var i in parent){
        if(parent.hasOwnProperty(i)){
            child[i]=parent[i];
        }
    }
    return child;
}

var dad={name:"wang"};
console.log(clone(dad))

function extendDeep(parent,child) {
    var i,
        toStr=Object.prototype.toString,
        aStr="[object Array]";

    child=child || {};
    for(i in parent){
        if(parent.hasOwnProperty(i)){
            if(typeof parent[i]==="object"){
                child[i]=(toStr.call(parent[i])===aStr) ? [] : {};
                extendDeep(parent[i],child[i]);
            }else{
                child[i]=parent[i];
            }
        }
    }
    return child;
}

var dad={
    count:[1,{age:2}],
    name:"ww"
}

var dad1=[1,2]
console.log(extendDeep(dad1)['0'])

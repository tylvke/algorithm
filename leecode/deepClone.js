const obj={
    a:{
        b:1,
        d:[1,3],
        e:/a/,
        f:true,
        g:undefined,
        date:new Date(),
        [Symbol()]:Symbol(1),
    },
    c:function(){
        console.log(1)
    }
}
const isType = function(obj,type){
    return Object.prototype.toString.call(obj) === `[object ${type}]`;
}

function clone(parent,hash=new WeakMap()){
    let child;
    if(isType(parent,'Array')){
        child=[];
    } else if(isType(parent,'Object')){
        if(hash.has(parent)) return hash.get(parent)
        child={};
        hash.set(parent, child)
    } else if(isType(parent,'Date')){
        child = new Date();
        child.setTime(parent.getTime());
        return child;
    } else {
        return parent;
    }
    const keys = [...Object.getOwnPropertyNames(parent),...Object.getOwnPropertySymbols(parent)]
    for(let i=0;i<keys.length;i++){
        const key = keys[i];
        if(parent.hasOwnProperty(key)){
            child[key]=clone(parent[key])
        }
    }
    return child;
}

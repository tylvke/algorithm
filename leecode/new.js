function Dog(name){
    this.name=name
}
Dog.prototype.say=function(){
    console.log(this.name)
}
function _new(fn,...arg){
    const obj = Object.create(fn.prototype);
    const ret = fn.apply(obj, arg);
    return ret instanceof Object ? ret : obj;
}
const dog = _new(Dog,'haha')
dog.say()





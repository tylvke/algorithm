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

const arr1=['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const arr2=['A', 'B', 'C', 'D'];
function concat (arr1,arr2){
    var arr = [];
    for(let i =0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(new RegExp(arr2[i]).test(arr1[j])){
                arr.push(arr1[j]);
            }
        }
        arr.push(arr2[i])
    }
    return arr;
}
console.log(concat(arr1,arr2))

const deepArr=[1,2,[3,4,[5,6]]]
function flaten(arr){
    return arr.reduce((a,b)=>a.concat(Array.isArray(b) ? flaten(b,[]) : b),[])
}
console.log(flaten(deepArr,[]))


function buddleSort(arr){
    let len = arr.length - 1;
    while(len > 0){
        let pos = 0;
        for(let j=0;j<len;j++){
            if(arr[j] > arr[j+1]){
                pos=j;
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
        len=pos;
    }
    return arr;
}
console.log(buddleSort([3,4,2,1]))

const arr=[1,2,3,4,10,11,20,21,30];
function splitArr(arr){
    const ret=[]
    let split=10;
    let temp=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>=split){
            ret.push(temp)
            temp=[];
            split+=10;
        }
        if(arr[i]<split){
            temp.push(arr[i])
        }
    }
    ret.push(temp)
    console.log(ret);
}
splitArr(arr)

function add(){
    return Array.from(arguments).reduce((a,b)=>a+=b,0);
}
function currying(fn, length) {
    length = length || fn.length; 	// 注释 1
    return function (...args) {			// 注释 2
      return args.length >= length	// 注释 3
          ? fn.apply(this, args)			// 注释 4
        : currying(fn.bind(this, ...args), length - args.length) // 注释 5
    }
  }
  console.log(currying(add,4)(1,4)(2)(3))
  console.log(add.bind(this,1)(2))

Function.prototype.bind=function(context){
    const args=Array.from(arguments).slice(1);
    const noop =function(){}
    const that=this;
    const fn= function(){
        if(this instanceof noop){
            context=this;
        }
        that.apply(context,args.concat(Array.from(arguments)))
    }
    if(this.prototype){
        noop.prototype=this.prototype;
    }
    fn.prototype=new noop();
    return fn;
}
function say(){
    console.log(this)
}
say.bind({name:1})()


function reverse(num){
    num=num.toString().split('');
    for(let i=0;i<Math.floor(num.length/2);i++){
        [num[i],num[num.length-i-1]]=[num[num.length-i-1],num[i]]
    }
    return num.join('')
}
console.log(reverse(123454324))
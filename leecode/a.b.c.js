function get(obj,str) {
    var keys=str.split('.');
    var res;
    while (res=keys.shift()){
        obj=obj[res];
        if(!obj)return undefined;
    }
    return obj;
}
var a = 0; 
if(true){ 
  a = 10; 
  console.log(a,window.a); // ? 10, 0
  function a(){}; 
  console.log(a,window.a); // ?  10, 10
  a = 20; 
  console.log(a,window.a); // ? 20, 10
} 
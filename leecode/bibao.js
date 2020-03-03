function fun(n,o) {
    console.log(o)
    return {
        fun:function(m){
            return fun(m,n);
        }
    };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,0,0,0
var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,0,1,1
// function a(b) {
//     return function () {
//         console.log(b++);
//     }
// }
// var n=a(1);
// n()
// n()
// n()

function A(a) {
    A=function (b) {
        return a+b++;
    }
    return a++;
}
console.log(A(1))
console.log(A(2))
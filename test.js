/**
 * Created by wangshuo on 2017/2/16.
 */
function repeat(fn,num,timer) {
    var i=0;
    setInterval(function () {
        i< num && fn();
        i++;
    },timer);
}

repeat(function () {
    console.log("a");
},10,1000)

// function Promise() {
//     this.cbs=[];
// }
// Promise.prototype.next=function () {
//     this.cbs.length > 0 && this.cbs.shift().call(this,null);
// }
// Promise.prototype.then=function (fn) {
//     this.cbs.push(fn)
//     return this;
// }
// Promise.prototype.all=function (param,cb) {
//     var self=this;
//     self.res=[];
//     self.count=param.length;
//     for(var i=0;i<param.length;i++){
//         (function (i) {
//             param[i](function (data) {
//                 self.res[i]=data;
//                 self.count-=1;
//                 if(self.count===0){
//                     cb && cb.apply(self,self.res);
//                 }
//             })
//         })(i)
//     }
// }

// function getData(url) {
//     return function () {
//         var self=this;
//         setTimeout(function () {
//             console.log(url);
//             self.next()
//         },500);
//     }
// }
// var promise=new Promise().then(getData("1")).then(getData("2"));
// promise.next();

// function getData1(url) {
//     return function (cb) {
//         cb(url);
//     }
// }
// new Promise().all([getData1("a"),getData1("b")],function (param1,param2) {
//     console.log(param1+"-"+param2);
// })




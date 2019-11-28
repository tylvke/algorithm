// var a = [1,2,3,4,5,6];

// function groupSplit(arr ,size) {
//     var result = [];

//     +function(arr ,size, comArr) {
//         var templateArr = [];

//         for(var i = 0; i < arr.length; i++) {
//             templateArr = [];

//             if(comArr instanceof Array) {

//                 if(comArr[comArr.length - 1] < a[i]) {
//                     templateArr = comArr.concat(a[i]);
//                     if(size === 1) {
//                         result.push(templateArr);
//                     } else {
//                         arguments.callee( arr, size - 1, templateArr);
//                     }
//                 }

//             } else {

//                 templateArr.push(arr[i]);
//                 arguments.callee( arr, size - 1, templateArr);

//             }
//         } 

//     }(arr,size);

//     return result;
// }
// console.log(groupSplit(a,4));
var a=[1,2,3,4,5,6];
function sum(arr,size){
    for(var i=0;i<=a.length-size;i++){
        var arr0=arr.splice(i);
        var arr1=arr0.splice(0,size-1);
        var arr2=arr0.splice(size-1);
        
    }
}
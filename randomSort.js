/**
 * Created by wangshuo on 2017/3/13.
 */
function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}
var arr = [1,2,3,4];
var arr2 = arr.sort(randomsort);
console.log(arr2);
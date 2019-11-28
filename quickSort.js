/**
 * Created by wangshuo on 2017/2/13.
 */
var quickSort = function(arr) {
    if (arr.length <= 1) { return arr; }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++){
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot], quickSort(right));
};
var binarySearch=function (arr,key) {
    arr=quickSort(arr);
    var low=0,high=arr.length-1;
    while (low<high){
        var mid=Math.floor((low+high)/2);
        if(arr[mid]===key){
            return mid;
        }
        else if(key>arr[mid]){
            low+=1;
        }
        else if(key<arr[mid]){
            high-=1;
        }
        else{
            return -1;
        }
    }
}

function quick(arr) {
    if(arr.length<=1)return arr;
    var mid=Math.floor(arr.length/2);
    var left=[],
        right=[],
        pivot=arr.splice(mid,1)[0];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return quick(left).concat([pivot],quick(right))
}
function binary(arr,key) {
    arr=quick(arr);
    var low=0,high=arr.length-1;
    while (low<high){
        var mid=Math.floor((low+high)/2);
        if(arr[mid]===key){
            return mid;
        }else if(arr[mid]<key){
            low+=1;
        }else if(arr[mid]>key){
            high-=1;
        }else{
            return -1;
        }
    }
}
function pop(arr) {
    for(var i=0,len=arr.length;i<len;i++){
        for(var j=0;j<len-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    console.log(arr)
}
var arr=[2,4,5,8,5,6,9,7]
// console.log(binary(arr,5))
pop(arr)
// arr=quickSort(arr);
// var res=binarySearch(arr,4);

// console.log(res)

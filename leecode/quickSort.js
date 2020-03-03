function quickSort(arr) {
    if(arr.length<=1)return arr;
    var middle=Math.floor(arr.length/2);
    var p=arr.splice(middle,1)[0];
    var left=[],right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i] > p){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat([p],quickSort(right));
}

console.log(quickSort([3,4,6,3,2,1]))
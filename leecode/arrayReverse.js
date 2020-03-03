//数组转置
function arrayReverse(arr) {
    var arr1=[];
    for(var i=0,len=arr.length;i<len;i++){
        arr1[i]=[];
    }
    for(var i=0,len=arr.length;i<len;i++){
        for(var j=0;j<arr[i].length;j++){
            arr1[j][i]=arr[i][j];
        }
    }
    return arr1;
}
console.log(arrayReverse([[1,2],[3,4]]))
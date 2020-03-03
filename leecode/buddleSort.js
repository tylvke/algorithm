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
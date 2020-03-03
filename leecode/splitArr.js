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
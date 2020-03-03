const arr1=['A1', 'A2', 'B1', 'B2', 'C1', 'C2', 'D1', 'D2'];
const arr2=['A', 'B', 'C', 'D'];
function concat (arr1,arr2){
    var arr = [];
    for(let i =0;i<arr2.length;i++){
        for(let j=0;j<arr1.length;j++){
            if(new RegExp(arr2[i]).test(arr1[j])){
                arr.push(arr1[j]);
            }
        }
        arr.push(arr2[i])
    }
    return arr;
}
console.log(concat(arr1,arr2))
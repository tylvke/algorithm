var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
function flaten(arr){
    return arr.reduce((a,b)=>a.concat(Array.isArray(b) ? flaten(b,[]) : b),[])
}
console.log(flaten(arr));
console.log(Array.from(new Set(arr.flat(4))).sort((a,b)=>a-b))
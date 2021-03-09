
// /**
//  * 
//  * asyncAdd(3, 5, (err, result) => {
//  *  console.log(result) // 8
//  * })
//  */
// function asyncAdd(a,b) {
//     return new Promise((resolve) => {
//         setTimeout(function(){
//             resolve(a+b);
//         },100)
//     })
// }

// async function add(...reset){
//     let res = 0;
//     let p = 0;
//     while(p = reset.shift()){
//         res = await asyncAdd(res,p);
//     }
//     return res;
// }

// add(1,2,3,4).then((res)=>{
//     console.log(res)
// });

function find(str){
    let max = '';
    for(let i=0;i<str.length;i++){
        for(let j=i+1;i<str.length;j++){
            const temp = str.substr(i,j);
            console.log(temp)
            if(temp === temp.split('').reverse().join('')){
                if(temp.length > max.length){
                    max = temp;
                }
            }
        }  
    }
    return max;
}
console.log(find('Ekow,x’abcbaqkewos,d'))
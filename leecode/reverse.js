function reverse(num){
    num=num.toString().split('');
    for(let i=0;i<Math.floor(num.length/2);i++){
        [num[i],num[num.length-i-1]]=[num[num.length-i-1],num[i]]
    }
    return num.join('')
}
console.log(reverse(123454324))
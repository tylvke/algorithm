/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var num = parseInt(x.toString().split('').reverse().join(''))
    if(num > Math.pow(2, 31)) {
        return 0
    }
    if(x < 0){
        return num*(-1)
    } else {
        return num
    }
};
console.log(reverse(-123.12))
//斐波那契数列
function fb(n) {
    var a, b, res;
    a = b = 1;
    for (var i = 3; i <= n; i++) {
        res = a + b;
        b = a;
        a = res;
    }
    return res;
}
console.log(fb(5))
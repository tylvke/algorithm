(function(a){
    console.log(a);
    var a=10;
    // function a(){};
}(100))

function getQueryObject(url) {
    url = url == null ? window.location.href : url;
    var search = url.substring(url.lastIndexOf("?") + 1);
    var obj = {};
    var reg = /([^?&=]+)=([^?&=]*)/g;
    search.replace(reg, function (rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
    });
    return obj;
}

// for(var i=0;i<10;i++){
//     console.log(i)
// }


var a=[1,2,3];

var bb=a.slice();
function b(a) {
    a[0]=33
}
b(a)
bb.push(55)
console.log(a)
console.log()

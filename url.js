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
    });
    return obj;
}
// getQueryObject("http://product.auto.163.com/chedai/product_info.shtml?chekuan_id=000BbYaa&pid=2&deadline=12&down_payment_ratio=30&price=29.98")


function Foo() {
    this.value = 42;
}
Foo.prototype = {
    method: function() {}
};

function Bar() {}

// 设置Bar的prototype属性为Foo的实例对象
Bar.prototype = new Foo();
Bar.prototype.foo = 'Hello World';

// 修正Bar.prototype.constructor为Bar本身
// Bar.prototype.constructor = Bar;

var test = new Bar() // 创建Bar的一个新实例

console.log(Bar.prototype.constructor)


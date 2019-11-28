//ajax
function ajax(option) {
    var success = option.success;
    var url = option.url;
    var method = (option.type || 'get').toUpperCase();
    var data = formatParam(option.data);
    var dataType = option.dataType || "json"
    var chartset = option.charset || "utf-8";
    var xhr = null;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("microsoft.XMLHTTP");
    }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var json = JSON.parse(xhr.responseText);
                success.call(this, json);
            }
        }
    }

    if (dataType === 'script') {
        loadScript(url, success, chartset);
    } else if (dataType === 'jsonp') {
        jsonp(url, success, chartset);
    } else {
        sendAjax();
    }

    function sendAjax() {
        if (method === "GET") {
            xhr.open('GET', url + "?" + data, true);
            xhr.send(null);
        } else {
            xhr.open('POST', url, true);
            //设置表单类型
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlenoded');
            xhr.send(data);
        }
    }

    function formatParam(param) {
        var arr = [];
        for (var key in param) {
            arr.push(encodeURIComponent(key) + "=" + encodeURIComponent(param[key]));
        }
        return arr.join('&');
    }

    function jsonp(url, callback, chartset) {
        var script = document.createElement('script');
        var random = new Date().getTime();
        script.src = url + "?" + data + "&callback=" + random;
        script.charset = chartset || "utf-8";
        window[random] = callback;
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    function loadScript(url, callback, chartset) {
        var script = document.createElement("script");
        script.src = url;
        script.charset = chartset || "utf-8";
        if (script.readyState) {
            script.onreadystatechange = function () {
                if (script.readyState === 'loaded' || script.readyState === 'complete') {
                    callback && callback();
                }
            }
        } else {
            script.onload = function () {
                callback && callback()
            }
        }
        document.getElementsByTagName('head')[0].appendChild(script);
    }
}

function event() {
    function addEvent() {
        if (document.addEventListener) {
            return function (el, event, fn) {
                if (el.length > 1) {
                    for (var i = 0, len = el.length; i < len; i++) {
                        el[i].addEventListener(event, fn, false);
                    }
                } else {
                    el.addEventListener(event, fn, false);
                }
            }
        } else if (window.attachEvent) {
            return function (el, event, fn) {
                if (el.length > 1) {
                    for (var i = 0, len = el.length; i < len; i++) {
                        el.attachEvent('on' + event, function () {
                            fn.call(el, window.event);//ie下this指向window
                        })
                    }
                } else {
                    el.attachEvent('on' + event, function () {
                        fn.call(el, window.event);
                    })
                }
            }
        } else {
            //无法运用事件冒泡，同一事件无法监听多个方法
            return function (el, event, fn) {
                if (el.length > 1) {
                    for (var i = 0, len = el.length; i < len; i++) {
                        el['on' + event] = fn;
                    }
                } else {
                    el['on' + event] = fn;
                }
            }
        }
    }

    return {
        addEvent: addEvent()
    }
}
//url格式化
function url2object(url) {
    url = !url ? location.href : url;
    var search = url.split('?')[1];
    var obj = {};
    if (search) {
        search.replace(/([^?&=]+)=([^?&=]*)/g, function (res, $1, $2) {
            var key = decodeURIComponent($1);
            var val = decodeURIComponent($2);
            obj[key] = val;
        })
    }
    console.log(obj);
}
//深复制
function clone(parent, child) {
    if (!parent)return;
    child = child || {};
    for (var key in parent) {
        if (typeof parent[key] == 'object') {
            if (parent.hasOwnProperty(key)) {
                if (Object.prototype.toString.call(parent[key] === "object Array")) {
                    child[key] = [];
                } else {
                    child[key] = {};
                }
                clone(parent[key], child[key]);
            }
        } else {
            child[key] = parent[key]
        }
    }
    return child;
}
console.log(clone(
    {a: 1},
    {
        b: 2, c: {
        d: 3
    }
}))

//冒泡
function sort(arr) {
    for(var i=0;i<arr.length;i++){
        for (var j=0;j<arr.length-i-1;j++){
            if(arr[j] > arr[j+1]){
                var temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr
}
//快排
function quickSort(arr) {
    if(arr.length<=1)return arr;
    var middle=Math.floor(arr.length/2);
    var p=arr.splice(middle,1)[0];
    var left=[],right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i] > p){
            right.push(arr[i]);
        }else{
            left.push(arr[i]);
        }
    }
    return quickSort(left).concat([p],quickSort(right));
}

console.log(quickSort([3,4,6,3,2,1]))

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
console.log(fb(10))
//邮箱验证
function reg_email(email) {
    return /^[\w\-]+@[\w]+(\.[\w]{2,3}){1,2}$/.test(email);
}

//函数防抖
function throttle(method,duration,delay) {
    var timer=null,
        begin=new Date();
    return function () {
        var ctx=this,
            args=arguments,
            current=new Date();

        clearTimeout(timer);

        if(current-begin >= duration){
            method.apply(ctx,args);
            begin=current;
        }else{
            timer=setTimeout(function () {
                method.apply(ctx,args);
            },delay);
        }
    }
}

//获取字符串长度
function getBytes(str) {
    var len=str.length;
    var bytes=len;
    for(var i=0;i<len;i++){
        if(str.charCodeAt(i) > 255)bytes++;
    }
    return bytes;
}


//数组转置
function arrayReverse(arr) {
    var arr1=[];
    for(var i=0,len=arr.length;i<len;i++){
        arr1[i]=[];
    }
    for(var i=0,len=arr.length;i<len;i++){
        for(var j=0;j<arr[i].length;j++){
            arr1[j][i]=arr[i][j];
        }
    }
    return arr1;
}
console.log(arrayReverse([[1,2],[3,4]]))

//二叉树的遍历
var data={
    value:1,
    left:{
        value:2,
        left:{
            value:3
        },
        right:{
            value:4
        }
    },
    right:{
        value:5,
        left:{
            value:6
        },
        right:{
            value:7
        }
    }
}
function inOrder(node) {
    if(node){
        inOrder(node.left);
        console.log(node.value);
        inOrder(node.right)
    }
}
inOrder(data)
//闭包
function fun(n,o) {
    console.log(o)
    return {
        fun:function(m){
            return fun(m,n);
        }
    };
}
var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);//undefined,0,0,0
var b = fun(0).fun(1).fun(2).fun(3);//undefined,0,1,2
var c = fun(0).fun(1);  c.fun(2);  c.fun(3);//undefined,0,1,1
//根据a.b.c获取字段值
var obj={
    a:{
        b:{
            c:1
        }
    }
}

function get(obj,str) {
    var keys=str.split('.');
    var res;
    while (res=keys.shift()){
        obj=obj[res];
        if(!obj)return undefined;
    }
    return obj;
}

//a.b.c  1
//a.d.c undefine

//umd
// (function (root,factory) {
//     if(typeof define==="function" && define.amd){
//         define(['jQuery'],factory);
//     }else if(typeof exports==="object"){
//         module.exports=factory(require('jQuery'));
//     }else{
//         root.returnExports=factory(root.jQuery);
//     }
// }(this,function ($) {
//
// }))
//数组改变问题
var a=[1,2,3];

var bb=a.slice();
function b(a) {
    a[0]=33
}
b(a)
bb.push(55)
console.log(a)

//随机数组
function randomsort(a, b) {
    return Math.random()>.5 ? -1 : 1;
//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
}

var a=100;
(function () {
    b=20;
    var b;
    this.a=20;
})
var obj={
    a:11,
    change:(function(){
        this.a=19;
    }())
}
// obj.change()
console.log(obj.a)


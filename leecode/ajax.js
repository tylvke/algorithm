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



//获取字符串长度
function getBytes(str) {
    var len=str.length;
    var bytes=len;
    for(var i=0;i<len;i++){
        if(str.charCodeAt(i) > 255)bytes++;
    }
    return bytes;
}



var a=100;
(function () {
    b=20;
    var b;
    this.a=20;
})()
var obj={
    a:11,
    change:(function(){
        this.a=19;
    }())
}
obj.change()
console.log(obj.a)


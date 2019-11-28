/**
 * Created by wangshuo on 2017/3/12.
 */
function loadJS(url,cb) {
    var radom=Math.random().toString(10).substr(2);
    var script=document.createElement("script");
    script.src=url+"?callback="+radom;
    window[radom]=cb;
    document.getElementsByTagName('head')[0].appendChild(script);
}
var el=document.getElementsByName("a")[0]
function addEvent(el,event,fn) {
    if(el.addEventListener){
        el.addEventListener(event,fn,false)
    }else if(el.attachEvent){
        el.attachEvent("on"+event,fn);
    }else{
        el["on"+event]=fn;
    }
}
addEvent(el,"click",function (e) {
    var e=e || window.event;
    var target=e.target || e.srcElement;
    var tagName=target.tagName.toUpperCase();
    if(tagName==="A"){

    }
})
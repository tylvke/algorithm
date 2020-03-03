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
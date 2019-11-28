/**
 * Created by wangshuo on 2018/5/11.
 */
//setInnerval 误差解决
function accurateInterval(callback, interval) {
    var now = +new Date();

    setTimeout(function run() {
        now += interval;
        var fix = now - (+Date.now());

        setTimeout(run, interval + fix);

        callback();
    }, interval);
}
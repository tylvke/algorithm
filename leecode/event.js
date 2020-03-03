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
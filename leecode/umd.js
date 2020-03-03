(function (root,factory) {
    if(typeof define==="function" && define.amd){
        define(['jQuery'],factory);
    }else if(typeof exports==="object"){
        module.exports=factory(require('jQuery'));
    }else{
        root.returnExports=factory(root.jQuery);
    }
}(this,function ($) {

}))
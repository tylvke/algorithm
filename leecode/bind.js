Function.prototype.bind=function(context){
    const args=Array.from(arguments).slice(1);
    const noop =function(){}
    const that=this;
    const fn= function(){
        if(this instanceof noop){
            context=this;
        }
        that.apply(context,args.concat(Array.from(arguments)))
    }
    if(this.prototype){
        noop.prototype=this.prototype;
    }
    fn.prototype=new noop();
    return fn;
}
function say(){
    console.log(this)
}
say.bind({name:1})()
function LazyMan(name){
    this.fns=[];
    this.name=name;
    setTimeout(()=>{
        this.next();
    },0)
}
LazyMan.prototype.sleep=function(time){
    const fn=()=>{
        setTimeout(()=>{
            console.log(`等待了${time}s`);
            this.next();
        },time*1000)
    }
    this.fns.push(fn)
    return this;
}
LazyMan.prototype.eat=function(food){
    const fn=()=>{
        console.log(`I am eating ${food}`);
        this.next();

    }
    this.fns.push(fn);
    return this;
}
LazyMan.prototype.next=function(){
    const fn=this.fns.shift();
    fn && fn();
}

new LazyMan('huahua').eat('西瓜').sleep(5).eat('桃子')


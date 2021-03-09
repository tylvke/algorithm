/**
 * Created by wangshuo on 2017/2/19.
 */
function Promise(fn) {
    this.status = 'PENDING';
    this.doneList=[];
    var self=this;
    setTimeout(function () {
        fn(self.resolve.bind(self),self.reject.bind(self));
    },0)
}

Promise.prototype.then=function (resolve,reject) {
    this.doneList.push({
        resolve:resolve,
        reject:reject
    })
    return this;
}

Promise.prototype.resolve=function (data) {
    if(this.status!=='PENDING') return;
    this.status = 'FULFILLED';
    var fn;
    while(fn=this.doneList.shift()) {
        data = fn.resolve(data)
    }
}

Promise.prototype.reject=function (data) {
    if(this.status!=='PENDING') return;
    this.status = 'FULFILLED';
    console.log(data);
}

Promise.prototype.all=function (param,cb) {
    var self=this;
    self.res=[];
    self.count=param.length;
    for(let i=0;i<param.length;i++){
        param[i](function (data) {
            self.res[i]=data;
            self.count-=1;
            if(self.count===0){
                cb && cb.apply(self,self.res);
            }
        })
    }
}

function getAge(age) {
    return new Promise(function (resolve,reject) {
        resolve(age)
    })
}

getAge(1).then(function (data) {
    return data + 1;
}).then(function (data) {
    return data + 1;
}).then(function (data) {
    console.log(data)
});


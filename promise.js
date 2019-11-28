/**
 * Created by wangshuo on 2017/2/19.
 */
function Promise(fn) {
    this.fn=fn;
    this.doneList=[];
    var self=this;
    setTimeout(function () {
        self.fn(self.resolve.bind(self),self.reject.bind(self));
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
    var resolve=this.doneList.shift().resolve;
    var temp=resolve(data);
    if(temp instanceof Promise){
        temp.doneList=this.doneList;
    }
}

Promise.prototype.reject=function (data) {
    console.log(data);
}

function getSex(sex) {
    return new Promise(function (resolve,reject) {
        resolve(sex)
    })
}

getSex("男").then(function (data) {
    console.log(data)
    return getSex(data+"1");
},function (data) {
    console.log(data)
}).then(function (data) {
    console.log((data))
},function (data) {
    console.log(data)
});


function parent(name) {
    this.name=name;
}
parent.prototype={
    age:1
}

function child(high,name) {
    this.high=high;
    parent.call(this,name);
}

function extend(parent,child) {
    var proto=Object.create(parent.prototype);
    child.prototype=proto;
    child.prototype.constructor=child;
}
extend(parent,child);
var c=new child(11,"wang");
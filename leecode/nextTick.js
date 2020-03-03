// var updates=[];
// function nextTick(data){
//   updates.push(update(data));
// }
// function update(data){
//   return function(){
//     console.log(data)
//   }
// }
// nextTick(2);
// nextTick(3);
// nextTick(4);
// setTimeout(function(){
//   var update=updates.pop();
//   update();
// },0)
//
//
var pending=false;
var updates=[];

function flushCallbacks(){
  pending=false;
  var update=updates.pop();
  updates.length=0;
  update();
}
function microTimerFunc() {
  setTimeout(function(){
    flushCallbacks();
  },0)
}

function nextTick(cb){
  updates.push(cb);
  if(pending)return;
  pending=true;
  microTimerFunc();
}
function update(data){
  return function(){
    console.log(data)
  }
}
nextTick(update(1));
nextTick(update(2));
nextTick(update(3));

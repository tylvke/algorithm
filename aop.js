Function.prototype.after=function(func){
    const self = this;
    return function(){
        const ret = self.apply(this,arguments);
        if(ret){
            return ret;
        }
        return func.apply(this,arguments);
    }
}

function fun(){
    console.log('fn');
}

function fun1(){
    console.log(1);
}
function fun2(){
    console.log(2);
}
function fun3(){
    console.log(3);
}
fun.after(fun1).after(fun2)()

function createThunkMiddleware(extraArgument) {
    return ({ dispatch, getState }) => (next) => (action) => {
      if (typeof action === 'function') {
        return action(dispatch, getState, extraArgument);
      }
  
      return next(action);
    };
  }
  
  const thunk = createThunkMiddleware();
  console.log(thunk)
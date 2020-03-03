function add(){
    return Array.from(arguments).reduce((a,b)=>a+=b,0);
}
function currying(fn, length) {
    length = length || fn.length; 	// 注释 1
    return function (...args) {			// 注释 2
      return args.length >= length	// 注释 3
          ? fn.apply(this, args)			// 注释 4
        : currying(fn.bind(this, ...args), length - args.length) // 注释 5
    }
  }
  console.log(currying(add,4)(1,4)(2)(3))
  console.log(add.bind(this,1)(2))
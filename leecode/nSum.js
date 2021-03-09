function getAllCombin(array, n, sum, temp) {
    if (temp.length === n) {
      if (temp.reduce((t, c) => t + c,0) === sum) {
        console.log(temp)
      }
      return;
    }
    for (let i = 0; i < array.length; i++) {
      const current = array.shift();
      temp.push(current);
      const result = getAllCombin(array, n, sum, temp);
      // if (result) {
      //   return result;
      // }
      temp.pop();
      array.push(current);
    }
  }
  const arr = [1, 2, 3, 4, 5, 6];
  for(let i = 0;i<arr.length;i++){
    getAllCombin(arr, i, 5, []);
  }

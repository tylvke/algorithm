function getAllCombin(array, n, sum, temp) {
    if (temp.length === n) {
      if (temp.reduce((t, c) => t + c) === sum) {
        return temp;
      }
      return;
    }
    for (let i = 0; i < array.length; i++) {
      const current = array.shift();
      temp.push(current);
      const result = getAllCombin(array, n, sum, temp);
      if (result) {
        return result;
      }
      temp.pop();
      array.push(current);
    }
  }
  const arr = [1, 2, 3, 4, 5, 6];

  console.log(getAllCombin(arr, 3, 10, []));

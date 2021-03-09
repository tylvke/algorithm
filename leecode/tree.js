const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 3
    },
    right: {
      value: 4
    }
  },
  right: {
    value: 5,
    left: {
      value: 6
    }
  }
};

function FindPath(root, expectNumber) {
  const result = [];
  if (root) {
    FindPathCore(root, expectNumber, [], 0, result);
  }
  return result;
}

function FindPathCore(node, expectNumber, stack, sum, result) {
  stack.push(node.value);
  sum += node.value;
  if (sum === expectNumber) {
    result.push(stack.slice(0));
  }
  if (node.left) {
    FindPathCore(node.left, expectNumber, stack, sum, result);
  }
  if (node.right) {
    FindPathCore(node.right, expectNumber, stack, sum, result);
  }
  stack.pop();
}

console.log(FindPath(tree, 7));

function inOrder(node) {
  if (node) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}
inOrder(tree);

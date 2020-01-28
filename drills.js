const Bst = require('./bst');

function main() {
  // let tree = new Bst(9, 'blt');
  // tree.insert(11, 'blhta');
  // console.log(tree);
  // console.log(tree.find(11));
  let tree = new Bst();
  let values = [3, 1, 4, 6, 9, 2, 5, 7];
  for (let value of values) {
    tree.insert(value, null);
  }
  values = [
    'E',
    'A',
    'S',
    'Y',
    'Q',
    'U',
    'E',
    'S',
    'T',
    'I',
    'O',
    'N'
  ];

  let tree2 = new Bst();
  for (let value of values) {
    tree2.insert(value, null);
  }
  console.log(tree);
  console.log(tree2);
  console.log('break-line')
  console.log(findHeight(tree))
  console.log(thirdLargest(tree))
}

function findHeight(Bst, counter = 1) {
  if (Bst.left && Bst.right) {
    return Math.max(...[findHeight(Bst.left, counter + 1), findHeight(Bst.right, counter + 1)])
  } else if (Bst.left) {
    return findHeight(Bst.left, counter + 1)
  } else if (Bst.right) {
    return findHeight(Bst.right, counter + 1)
  } else {
    return counter;
  }
}

function isBst() {

}

// function thirdLargest(Bst, counter = 1) {
//   if(!Bst.parent) {
//     return [{height: counter, key: Bst.key},...thirdLargest(Bst.left, counter + 1), ...thirdLargest(Bst.right, counter + 1)].sort((nodeA, nodeB) => nodeA.height - nodeB.height)
//   } else if (Bst.left && Bst.right) {
//     return [{height: counter, key: Bst.key},...thirdLargest(Bst.left, counter + 1), ...thirdLargest(Bst.right, counter + 1)]
//   } else if (Bst.left) {
//     return [{height: counter, key: Bst.key},...thirdLargest(Bst.left, counter + 1)]
//   } else if (Bst.right) {
//     return [{height: counter, key: Bst.key},...thirdLargest(Bst.right, counter + 1)]
//   } else {
//     return [{height: counter, key: Bst.key}]
//   }
// }

function thirdLargest(Bst, counter = 1) {
  if(!Bst.parent) {
    return [{density: thirdLargest(Bst.left).reduce((a,b) => a.density + b.density) + counter + thirdLargest(Bst.right).reduce((a,b) => a.density + b.density), key: Bst.key},...thirdLargest(Bst.left, counter), ...thirdLargest(Bst.right, counter)].sort((nodeA, nodeB) => nodeA.height - nodeB.height)
  } else if (Bst.left && Bst.right) {
    return [{density: thirdLargest(Bst.left).reduce((a,b) => a.density + b.density) + counter + thirdLargest(Bst.right).reduce((a,b) => a.density + b.density), key: Bst.key},...thirdLargest(Bst.left, counter), ...thirdLargest(Bst.right, counter)]
  } else if (Bst.left) {
    return [{density: thirdLargest(Bst.left).reduce((a,b) => a.density + b.density) + counter, key: Bst.key},...thirdLargest(Bst.left, counter)]
  } else if (Bst.right) {
    return [{density: thirdLargest(Bst.right).reduce((a,b) => a.density + b.density) + counter, key: Bst.key},...thirdLargest(Bst.right, counter)]
  } else {
    return [{density: counter, key: Bst.key}]
  }
}


main();

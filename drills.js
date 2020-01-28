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
  let values = [
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
}

main();

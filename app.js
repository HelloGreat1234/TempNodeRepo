// npm is also installed with node, we also have npm global commands

// npm --version or --v

// local dependency - installing pacage for use in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>

// package.json - mainfesto file (stores important info about project/package)

// can create it manually (creating package.json in the root, create properties etc.)

// or we can create it manually

// npm init (step by step asks question, press enter to skip)

// npm init -y (everthing is setup by default)

const _ = require('lodash');

const items = [1,[2,[3,[4]]]]

const newItems = _.flattenDeep(items)

console.log(newItems)
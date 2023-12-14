// Modules
// CommonJs,every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-firstModule')
const sayHi = require('./5-secondModule')

require('./7-mind-grenade')

sayHi('susan');
sayHi(names.ramlal);
sayHi(names.shyam);
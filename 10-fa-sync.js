const {readFileSync,writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt','utf8') // utf8 is by default
const second = readFileSync('./content/second.txt','utf8') // utf8 is by default

console.log(first,second)

// same as 
// const fs = require('fs')
// fs.readFileSync

// if file is not present then writeFileSync will create a file otherwise it will override it 

// writeFileSync('./content/result-sync.txt',`Here is the result ${first} `)


// if we set the flag to a , then it will append the data

writeFileSync('./content/result-sync.txt',`Here is the result ${first} `,{flag: 'a'})
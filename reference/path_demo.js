const path = require('path')

//Base file name
console.log(path.basename(__dirname))

// Directory name
console.log(path.dirname(__dirname))

// File extension type
console.log(path.extname(__filename))

// Create path Object
console.log(path.parse(__filename))

// Concatenate path
console.log(path.join(__dirname,'test', 'hello.html'))

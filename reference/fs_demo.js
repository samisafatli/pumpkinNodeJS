const fs = require('fs')
const path = require('path')

// // Create Folder
// fs.mkdir(path.join(__dirname, 'test'),{}, err => {
//     if (err) throw err
//     console.log('Folder created...')
//     }
// )

// // Write File
// fs.writeFile(path.join(
//     __dirname, 'test', 'hello.txt')
//     ,'Hello World', err => {
//         if (err) throw err
//         console.log('File written to...')
    
//         //

//         fs.appendFile(path.join(
//             __dirname, 'test', 'hello.txt')
//             ,', I love NodeJS!', err => {
//                 if (err) throw err
//                 console.log('File written to...')
//             }
//         )
//     }
// )

// Read File
fs.appendFile(path.join(
    __dirname, 'test', 'hello.txt')
    ,', I love NodeJS!', err => {
        if (err) throw err
        console.log('File written to...')
    }
)
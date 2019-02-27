const fs = require('fs');
const path = require('path');

// Create Folder

// fs.mkdir(path.join(__dirname,'/test'), {}, (err) =>{
//     if (err) {
//         console.log(err);
        
//     } else {
//         console.log("Folder created!");
        
//     }
// });

// Create and write file

// fs.writeFile(path.join(__dirname,'/test','Hello.txt'), 'Hello Node.js', (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');

//     // File append 

//     fs.appendFile(path.join(__dirname,'/test','Hello.txt'), 'I love Node.js', (err) => {
//         if (err) throw err;
//         console.log('The file has been saved!');
//     });
// });

// Read file

// fs.readFile(path.join(__dirname,'/test','Hello.txt'),'utf-8',(err,data) =>{
//     if(err) console.log(err);
//     console.log(data);
// })

// Rename a File

fs.rename(path.join(__dirname,'/test','Hello.txt'),path.join(__dirname,'/test','HelloWorld.txt'),(err) =>{
    if(err) console.log(err);
    console.log("File renamed");
})
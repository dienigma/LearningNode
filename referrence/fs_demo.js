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

fs.writeFile(path.join(__dirname,'/test','Hello.txt'), 'Hello Node.js', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
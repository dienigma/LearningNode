const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // if(req.url === '/'){
    //     fs.readFile(path.join(__dirname,'public','index.html'), (err,content)=>{
    //         if (err) console.log(err);
    //         res.writeHead(200,{'Content-Type':'text/html'})
    //         res.end(content);
    //     })
        
    // }
    // if(req.url === '/api/users'){
    //     let users =  [
    //         {name: 'Bob Smith', age: 45},
    //         {name: 'Chinmay Joshi', age: 24}
    //     ];
    //     res.writeHead(200,{'Content-Type':'text/json'});
    //     res.end(JSON.stringify(users));
    // }

    // Build File path
    let filePath = path.join(__dirname,'public', req.url === '/' ? 'index.html' : req.url);
    

    // Get extension

    let extname = path.extname(filePath);

    // Initial content type.
    let contentType = 'text/html'

    // Check the HTML and change the content type.

    switch(extname){
        case '.js':
            contentType = 'text/javascript'
            break;
        case '.css':
            contentType = 'text/csss'
            break;
        case '.json':
            contentType = 'text/json'
            break;
        case '.png':
            contentType = 'text/png'
            break;
        case '.jpg':
            contentType = 'text/jpg'
            break;
    }   

    // Read File
    fs.readFile(filePath,(err,content) => {
        if (err){
            if(err.code === 'ENOENT'){
                // Page Not Found
                fs.readFile(path.join(__dirname,'public','404.html'),(err, conent) =>{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.end(content, 'utf-8');
                })
            } else {
                // Server Error
                res.writeHead(500);
                res.end(`Server Error ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200,{'Content-Type':'text/html'});
            res.end(content, 'utf-');
        }
    })
});

const PORT = process.env.port || 5000;

server.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
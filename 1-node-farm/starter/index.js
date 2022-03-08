// const fs = require('fs');

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');

// console.log(textIn);


// fs.readFile('./txt/start.txt', 'utf-8', (err, text) => {
//     fs.writeFile('./txt/test.txt', `${text}`, 'utf-8', err => console);
// });

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Welcome');
})

server.listen(8000, 'localhost', (err) => {console.log(err);});
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  let filePath;

  if (req.url === '/' || req.url === '/index.html') {
    filePath = path.join('project', 'index.html');
  } else if (req.url === '/about') {
    filePath = path.join('project', 'about.html');
  } else if (req.url === '/contact-me') {
    filePath = path.join('project', 'contact-me.html');
  } else {
    filePath = path.join('project', '404.html');
  }

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(filePath);
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    }
  });
}).listen(8080);

// Local development server for the WeatherGPT frontend.
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8' };

http.createServer((request, response) => {
  const requestedPath = decodeURIComponent(request.url.split('?')[0]);
  const relativePath = requestedPath === '/' ? 'index.html' : requestedPath.replace(/^\/+/, '');
  const filePath = path.resolve(root, relativePath);
  if (!filePath.startsWith(root)) {
    response.writeHead(403); response.end('Forbidden'); return;
  }
  fs.readFile(filePath, (error, content) => {
    if (error) { response.writeHead(404); response.end('Not found'); return; }
    response.writeHead(200, { 'Content-Type': types[path.extname(filePath)] || 'application/octet-stream' });
    response.end(content);
  });
}).listen(8080, () => console.log('WeatherGPT is running at http://localhost:8080'));

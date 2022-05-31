const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req)
  if(req.url === '/') {
    res.end('Welcome to our HomePage');
  }

  if (req.url === '/about') {
    res.end('About Page')
  }

  res.end(`
    <h1>OOOOPS</h1>
    <p>We can't find the page that you are looking for</p>
    <a href="/">Back Home<a/>
  `)
});

server.listen(5000)
var http = require("http");

http.createServer(function(req,res) {
  // Use the toLowerCase() method instead of toLowercase()
  var path = req.url.toLowerCase();

  switch(path) {
    // Add a colon after the case "/"
    case "/":
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("Home Page");
      break;

    // Remove the semicolon after the case "/about"
    case "/about":
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('About Page');
      break;

    // Remove the colon after the default keyword
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not Found');
  }
  
}).listen(process.env.PORT || 3000);


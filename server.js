// We require/import the HTTP module
var http = require("http");

// =====================================================================

// Then define the ports we want to listen to
var PORTONE = 8080;

// =====================================================================

// We need two different functions to handle requests, one for each server.
function handleRequestOne(request, response) {
  if(request.url === "/hello"){
    response.end("Hello!");
  }
  else if(request.url === "/goodbye"){
    response.end("Goodbye!");
   }
   response.end("Screw you too!");
}


// =====================================================================

// Create our servers
var serverOne = http.createServer(handleRequestOne);

// =====================================================================

// Starting our servers
serverOne.listen(PORTONE, function() {

  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:" + PORTONE);
});


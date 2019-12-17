var http = require("http");
var fs = require("fs");

var PORT = 8080;


function handleRequest(request, response) {

    //you can use request.url to naviagte to a html page fs.readilfe('.'+request.url+'html')
    // if (request.url === "/") {
    //     fs.readFile("./index.html", (err, data) => {
    //         if (err) {
    //             console.log("error");
    //         }
    //         response.end(data);
    //     })
    // } else {
    //     fs.readFile("." + request.url, (err, data) => {
    //         if (err) {
    //             console.log(err);
    //         }
    //         response.end(data);
    //     })
    // }

    switch (request.method) {
        case 'POST':
            var requestData = "";
            request.on('data', function(data){
            requestData += data;
            });
            request.on('end', function(){
                var data = JSON.parse(requestData.toString());
                console.log(data);
                response.end('Thanks for the data!');
            })
            break;
        default: 
       switch (request.url) {
        case '/':
            fs.readFile("./index.html", (err, data) => {
                // response.writeHead(200,{
                //     'Content-Type':"text/html"
                // });
                //mime library for conent types
                if (err) {
                    console.log("error");
                }
                response.end(data);
            })
            break;

        default:
            fs.readFile("." + request.url, (err, data) => {
                if (err) {
                    console.log(err);
                }
                response.end(data);
            })
    }
}
}
var server = http.createServer(handleRequest);

server.listen(PORT, function () {
    console.log("Server listening on port: " + PORT)
})
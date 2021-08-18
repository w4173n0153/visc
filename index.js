const http = require("http");

http.createServer(function(request, response){
    console.log(request.headers);
    encrypt.test()
    response.write("Hello world");
    response.end();
}).listen(3000);

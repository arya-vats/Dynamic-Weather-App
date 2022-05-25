const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) =>{ //here req is request and res is response.
    if(req.url=="/"){
    res.end("Hello from the other sidee");
    }
    else if(req.url=="/about"){
        res.end("about.html"); //-------->This is how we handle https requests and do routing when a person wants to access a particular webpage.
    }
    else if(req.url=="/userapi"){
        res.end("Hello from the api side");
        fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8", (err,data)=>{
            console.log(data);
        });
    }
        else{
        res.writeHead(404, {"Content-type" : "text/html"}); //used to set the status code to whatever code we want.
        res.end("404 error, page does not exist");
    }
});

server.listen(8000,"127.0.0.1" , () =>{

    console.log("server listening to port number 8000"); //basic server creation code
});
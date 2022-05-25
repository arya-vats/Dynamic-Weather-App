const fs = require("fs");

fs.writeFile("read.text", "Today is an awesome day :)");//This is asynchronous way of writing to a file but it  will not work since every asynhronous function requires a callback function to be executed just after the function is called.


// fs.writeFile("read.text" ,"Today is an awesome day",
// (err) =>{
//     console.log("files are created");

// })//actual declaration of asynchronous function.
//callback functon helps to show error messages for example if any specific operation is successfull and if there is any error after that or not .
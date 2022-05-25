const fs = require("fs");

// fs.writeFileSync('read.txt' , "welcome to my world");//Asynchronous file copy, basically copies any data to another file. In any case if the file is not present then it will create file of that name.

// fs.writeFileSync('read.txt' , " lol welcome to my world");//if we call the same method and add new data then the data overwrites itself.

// fs.appendFileSync("read.txt", "they are there for us");//appends new data without disturbing the previous data.


// const buf_data = fs.readFileSync("read.txt");

// console.log(buf_data);//buffer is used to store binary data while reading from a file and receiving from the packets.
// const buf_data = fs.readFileSync("read.txt");

// org_data = buf_data.toString();

// console.log(org_data); used to read data from a file and convert it into string .

fs.renameSync("radwrite.txt", "readwrite.txt");//used to change the name of the file here read.txt has been changed to readwrite.txt.

const data = fs.readFileSync("readwrite.txt", "utf-8");//this does not let the file print buffer data but the actul data itself.
const fs =require("fs");

// fs.writeFile("bio.txt", "Today is an awesome day",
// (err) =>{
//     console.log("file created successfully");

// });

// fs.appendFile("bio.txt"," yes indeed it is!" , (err) =>{
//     console.log("text copied successfully");
// });

const data =  fs.readFile("bio.txt", "utf-8"  ,(err,data)=>{
    console.log(data);
});

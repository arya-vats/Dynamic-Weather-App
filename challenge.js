const fs = require("fs");

fs.writeFileSync("bio.txt", "This is some confidential information");
fs.appendFileSync("bio.txt", " please do not share this with anyone")


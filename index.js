var express = require("express");
app = express();


app.use(express.static(__dirname + "/app"));
app.listen(3000);
console.log("Server running on port 3000");
const express = require("express");
const app = express();

require("env2")(".env");

app.listen(process.env.PORT || 3000);
console.log("PORT WWORK IN 3000");

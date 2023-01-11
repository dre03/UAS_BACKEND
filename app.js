// import espress
const express = require("express");
// import router
const router = require("./routes/api.js");
// membuat object express 
const app = express();
// menggunkan middleware 
app.use(express.json());
app.use(express.urlencoded());
// menggunkan routing (route) 
app.use(router);
// mendefinisikan post 
const PORT = 3000;
app.listen(PORT, () =>
    console.log(`Server running at: http:/localhost:${PORT}`)
);
const express = require("express");
const app = express();
const port = 9000;

app.get("/", (req, res, next) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log("listening on " + port);
});

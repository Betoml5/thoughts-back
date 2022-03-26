const express = require("express");
const app = express();


app.get("/", (req, res) => {
    res.send({ message: "Hola bris" })
})

app.listen(2424, () => {
    console.log("server listenting at port 2424")
})

module.exports = app;



const express = require("express");

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.post("/user",(req,res) => {
    console.log(req.body)
    res.send("usuario creado")
})

app.listen(3000);
console.log(`Server on port ${3000}`);

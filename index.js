const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/hello/:user",(req,res) => {
    res.send(`Hello ${req.params.user}`)
})

app.get("/add/:x/:y",(req,res) => {
  const {x , y} = req.params
  const result = parseInt(x) + parseInt(y)
  res.send(`Result: ${result}`)
})

app.get("/users/:username/photo",(req,res) => {
 if (req.params.username === "david") {
    return res.sendFile("./javascript.png",{
      root:__dirname
    })
 }
 res.send("El usuario no tiene acceso")
})

// middleware
app.use((req,res,next) => {
  console.log('paso por aqui')
  next()
})

// middleware
app.use((req,res,next) => {
  if (req.query.login === 'davidpadron@gmail.com'){
    next()
  }else{
    res.send('no autorizado')
  } 
})

app.get("/dashboard",(req,res) => {
  res.send("Dashboard page")
})

app.get("/profile",(req,res) => {
  res.send('profile page')
})

app.listen(3000);
console.log(`Server on port ${3000}`);

const users = require('./members')
const menu = require('./menu')
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;



app.get('/member_info', (req, res) => {
    res.json(users)
})

app.get('/member_info/:id', (req, res) => {
  res.json(users.find(user => user.id === Number(req.params.id)))
})


app.get('/menu',(req,res)=>{
  res.json(menu)
})

app.get('/menu/:id', (req, res) => {
    res.json(menu.find(menu => menu.id === Number(req.params.id)))
  })

  app.listen(port, () => {
  console.log("Starting node.js at port " + port);
  
});

const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')

app.use(cors())


app.get("/user", (req,res)=>{
  axios.get("https://api.github.com/users/colinlmacleod1").then((user)=>{
    res.send(JSON.stringify(user.data))
  }).catch((err)=>{
    console.log(err)
  })
})



// Server Port
app.listen(3000,function() {
console.log('App listening on port 3000')
})
module.exports = app;

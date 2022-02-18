const express = require('express')
const axios = require('axios')
const bodyParse = require('body-parser')
const {posts} = require('./endpoints')
const {authenticate} = require('./middlewares')
const app = express()
const port = 3000
const postsHandlers = posts({axios})

app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())


app.post('/',authenticate, postsHandlers.post)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
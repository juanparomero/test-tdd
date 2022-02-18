const express = require('express')
const axios = require('axios')
const bodyParse = require('body-parser')
const {users} = require('./endpoints')
const app = express()
const port = 3000
const userHandlers = users({axios})

app.use(bodyParse.urlencoded({extended:false}))
app.use(bodyParse.json())

app.get('/', userHandlers.get)
app.post('/', userHandlers.post)
app.put('/:id', userHandlers.put)
app.delete('/:id', userHandlers.delete)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
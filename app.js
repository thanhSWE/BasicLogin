const express = require('express')
const indexRouter = require('./indexRouter')
const app = express()
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(indexRouter)
//route - dinh tuyen url
app.listen(3000)
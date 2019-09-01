const fs = require('fs')
const express = require('express')
const https = require('https')
const path = require('path')
const expressTension = require('express-tension')
const app = express()
const {
  PORT
} = require('./env')

app.use((req, res, next) => {
  console.log(req.url)
  next()
})
app.use(expressTension(path.join(__dirname, 'static')))
app.use(express.static(path.join(__dirname, 'static')))

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listening on port: ${PORT}`)
  }
})
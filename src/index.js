const express = require('express')
const path = require('path')
const app = express()
const {
  PORT
} = require('./env')

app.use((req, res, next) => {
  console.log(req.url)
  next()
})
app.use(express.static(path.join(__dirname, 'static')))

app.listen(PORT, (err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`listening on port: ${PORT}`)
  }
})
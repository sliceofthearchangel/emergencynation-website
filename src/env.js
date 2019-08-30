const dotenv = require('dotenv')
dotenv.config()

const {
  PORT = '8081',
} = process.env

module.exports = {
  PORT,
}
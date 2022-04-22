const homeRouter = require('./home.route')
const express = require('express')
const router = express.Router()

let routes = (app) => {
  app.use('/', homeRouter)
}

module.exports = routes
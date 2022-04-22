const homeRouter = require('./home.route')
const adminRouter = require('./admin.route')
const express = require('express')
const router = express.Router()

let routes = (app) => {
  app.use('/admin', adminRouter)
  app.use('/', homeRouter)
}

module.exports = routes

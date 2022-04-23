const express = require('express')
const app = express()

const path = require('path')
const morgan = require('morgan')
const routes = require('./routes')
const { connectMongoDB } = require('./configs/connectMongoDB')

app.use(morgan('combined'));

// Configure request object in HTTP method
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// ------------------------------

// Set EJS as view engine for application
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// ------------------------------

app.use(express.static(path.join(__dirname, 'public')));

// Connect MongoDB
connectMongoDB()
// ------------------------------

// Init routes
routes(app)
// ------------------------------

const port = 3002

app.listen(port, () => {
    console.log(`Server is running on port ${port}. Open at http://127.0.0.1:${port}`)
})

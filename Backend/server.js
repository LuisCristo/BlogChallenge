const express = require('express')
const mongoose = require('mongoose')
var path = require('path');
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
require('dotenv').config()

// Importing routes //
const blogRoutes = require('./routes/blog')

// Using Mongoose //
mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected!'));

// Using Express //
const app = express()

// Middlewares //
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(cookieParser())
app.use(cors());

// Routes //
app.use("/blog", blogRoutes);


// Deployment and Serving Static Files of AngularJS //
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public/index.html'))
})


// Using PORT from .env file //
const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
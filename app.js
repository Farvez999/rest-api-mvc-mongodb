const express = require('express')
const cors = require('cors')
const app = express();
require('./config/db')

const userRouter = require('./routes/user.route')

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api/users', userRouter)



//Main Url
app.get('/', (req, res) => {
    res.send('Rest Api in MVC With Mongodb is Running')
})

//routes not found
app.use((req, res, next) => {
    res.status(404).json({ message: 'routes not found' })
})

//Server Error Handler
app.use((err, req, res, next) => {
    res.status(500).json({ message: 'something broken' })
})

module.exports = app
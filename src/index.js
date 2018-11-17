const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

const PORT = process.env.PORT || 3000


/* Middleware */
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))



/* 라우터 */
const User = require('./routes/User')
const Tournament = require('./routes/Tournament')

/* 데이터베이스 연결 */
const MONGO_URL = 'mongodb://127.0.0.1:27017/tournament'
mongoose.connect(MONGO_URL, { 
    useNewUrlParser: true,
    useCreateIndex: true,
})
.then(() => {
    console.log(`Mongo DB is running`)
})
.catch(err => {
    console.log(err)
})

/* 라우터 등록 */
app.use('/user', User)
app.use('/tournament', Tournament)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})
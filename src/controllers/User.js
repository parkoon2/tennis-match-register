const User = require('../models/User')

const handleRegistUser = (req, res) => {
    const { email, password, name } = req.body
    User.findOne({ 
        email 
    })
    .then(user => {

        if (!user) {
            User.create({
                email,
                password,
                name,
            })
            .then((user) => {
                res.json({
                    status: `200`,
                    message: `${user.email} is registed`,
                })
            })
            .catch(err => {
                res.send(`error: ${err}`)
            })
        } else {
            res.json({
                status: 'fail',
                message: 'User is already resgisted'
            })
        }

    })
    .catch(err => {
        res.send(`error: ${err}`)
    })
}

const handleLoginUser = (req, res) => {
    const { email, password } = req.body

    User.findOne({ 
        email 
    })
    .then(user => {
        if (password === user.password) {
            res.send({
                status: '200',
                message: `${email} user is authenticated`
            })
        } else {
            throw 'Password is not correct'
        }
    })
    .catch(err => {
        res.send(`error: ${err}`)
    })
}

module.exports = {
    handleRegistUser,
    handleLoginUser,
}
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const enrolledUserSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    }
})

const tournamentSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    poster: {
        type: String,
        required: true
    },
    users: [enrolledUserSchema]
})

tournamentSchema.methods.addUser = function (user) {
    console.log('this.users', this.users)
    const { email, name } = user
    this.users.push({
        email,
        name
    })
    return this.save()
}


const Tournament = mongoose.model('Tournament', tournamentSchema)

module.exports = Tournament
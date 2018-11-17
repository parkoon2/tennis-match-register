const Tournament = require('../models/Tournament')

const registTournament = (req, res) => {
    const { title, date } = req.body
    Tournament.findOne()
        .where('title').equals(title)
        .where('date').equals(date)
        .then(tournament => {
            if (!tournament) {
                Tournament.create({
                    title,
                    date
                })
                .then(result => {
                    res.json({
                        status: '200',
                        message: `${result.title} is registed`
                    })
                })
                .catch(err => {
                    res.send(`error: ${err}`)
                    
                })
            } else {
                res.json({
                    status: 'fail',
                    message: 'This tournament is already '
                })
            }
        })
        .catch(err => {
            res.send(`error: ${err}`)
        })
}

const getTournament = (req, res) => {
    Tournament.find({})
    .then(tournament => {
        // USERS 정보는 보여줄 필요 없는데...
        if (tournament) {
            res.json(tournament)
        } else {
            res.send(`There is no tournament`)
        }
    })
    .catch(err => {
        res.send(`error: ${err}`)
    })
}

const addUserToTournamernt = (req, res) => {
    const { tournament_id, email, name } = req.body
    console.log(tournament_id, email, name)

    Tournament.findById(tournament_id)
    .then(tournament => {
        
        // 이 부분을 좋게 리펙토링 할 수 없을까?
        let exists = false
        for (let user of tournament.users) {
            if (user.email == email) {
                exists = true
            }
        }

        if (!exists) {
            tournament.addUser({
                email,
                name
            })
            .then(result => {
                res.json({
                    state: '200',
                    message: `You enroll ${result.title} tournament`
                })
            })
            .catch(err => {
                res.send(`error: ${err}`)
            })
            
        } else {
            
            res.send(`${email} is already enrolled`)
        }

        // tournament.addUser.bind(this, {email})
    })
    .catch(err => {
        res.send(`error: ${err}`)
    })
}

module.exports = {
    registTournament,
    getTournament,
    addUserToTournamernt
}
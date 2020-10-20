const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/user', (req, res) => {
    res.send(db.get('user'))
})
module.exports = app
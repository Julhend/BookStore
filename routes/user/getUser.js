const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/user', (req, res) => {
    const result = db.get('user', req.query)
    res.send(result)
})
module.exports = app
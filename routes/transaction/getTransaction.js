const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/transaction', (req, res) => {
    res.send(db.get('transaction'))
})
module.exports = app
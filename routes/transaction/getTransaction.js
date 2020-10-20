const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/transaction', (req, res) => {
    const result = db.get('transaction', req.query)
    res.send(result)
})
module.exports = app
const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/supplier', (req, res) => {
    const result = db.get('supplier', req.query)
    res.send(result)
})
module.exports = app
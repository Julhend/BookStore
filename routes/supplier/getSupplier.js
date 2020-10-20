const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/supplier', (req, res) => {
    res.send(db.get('supplier'))
})
module.exports = app
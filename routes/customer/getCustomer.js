const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/customer', (req, res) => {
    res.send(db.get('customer'))
})
module.exports = app
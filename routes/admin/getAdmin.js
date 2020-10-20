const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/admin', (req, res) => {
    res.send(db.get('admin'))
})
module.exports = app
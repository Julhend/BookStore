const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/bookData', (req, res) => {
    res.send(db.get('bookData'))
})
module.exports = app
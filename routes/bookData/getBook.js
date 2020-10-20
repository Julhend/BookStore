const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.get('/bookData', (req, res) => {
    const result = db.get('bookData', req.query)
    res.send(result)
})
module.exports = app
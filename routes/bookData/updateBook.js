const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.patch('/bookData', (req, res) => {
    const body = req.body
    const id = req.query.id

    db.edit('bookData', id, body)
    res.send('datanya udah di update mas')
})

module.exports = app
const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/user', (req, res) => {
    const id = req.query.id

    db.remove('user', id)
    res.send('data nya sudah di hapus mas')
})

module.exports = app
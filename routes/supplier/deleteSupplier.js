const express = require('express')
const app = express.Router()
const db = require('../../controller/dbController')

app.delete('/supplier', (req, res) => {
    const id = req.query.id

    db.remove('supplier', id)
    res.send('data nya sudah di hapus mas')
})

module.exports = app
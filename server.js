const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
const addUser = require('./routes/user/addUser')
const getUser = require('./routes/user/getUser')
const updateUser = require('./routes/user/updateUser')
const deleteUser = require('./routes/user/deleteUser')
// const addStores = require('./routes/admin/addStores')
// const getStores = require('./routes/admin/getStores')
// const addGoods = require('./routes/user/addUser')
// const getGoods = require('./routes/user/getUser')


const app = express()
app.use(rootRoute)
app.use(bodyParser.json())
app.use(getUser)
app.use(addUser)
app.use(updateUser)
app.use(deleteUser)

const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})

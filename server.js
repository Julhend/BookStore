const express = require('express')
const bodyParser = require('body-parser')
const rootRoute = require('./routes/rootRoute')
//--------------------------------------------------------
const addUser = require('./routes/user/addUser')
const getUser = require('./routes/user/getUser')
const updateUser = require('./routes/user/updateUser')
const deleteUser = require('./routes/user/deleteUser')
//--------------------------------------------------------
const addAdmin = require('./routes/admin/addAdmin')
const getAdmin = require('./routes/admin/getAdmin')
const updateAdmin = require('./routes/admin/updateAdmin')
const deleteAdmin = require('./routes/admin/deleteAdmin')
//--------------------------------------------------------
const addCustomer = require('./routes/customer/addCustomer')
const getCustomer = require('./routes/customer/getCustomer')
const updateCustomer = require('./routes/customer/updateCustomer')
const deleteCustomer = require('./routes/customer/deleteCustomer')
//--------------------------------------------------------
const addBookData = require('./routes/bookData/addBook')
const getBookData = require('./routes/bookData/getBook')
const updateBookData = require('./routes/bookData/updateBook')
const deleteBookData = require('./routes/bookData/deleteBook')
//--------------------------------------------------------
const addSupplier = require('./routes/supplier/addSupplier')
const getSupplier = require('./routes/supplier/getSupplier')
const updateSupplier = require('./routes/supplier/updateSupplier')
const deleteSupplier = require('./routes/supplier/deleteSupplier')
//--------------------------------------------------------
const addTransaction = require('./routes/transaction/addTransaction')
const getTransaction = require('./routes/transaction/getTransaction')
const updateTransaction = require('./routes/transaction/updateTransaction')
const deleteTransaction = require('./routes/transaction/deleteTransaction')
//--------------------------------------------------------

const app = express()
app.use(rootRoute)
app.use(bodyParser.json())
//-------------------------
app.use(getUser)
app.use(addUser)
app.use(updateUser)
app.use(deleteUser)
//-------------------------
app.use(getAdmin)
app.use(addAdmin)
app.use(updateAdmin)
app.use(deleteAdmin)
//-------------------------
app.use(getCustomer)
app.use(addCustomer)
app.use(updateCustomer)
app.use(deleteCustomer)
//-------------------------
app.use(getBookData)
app.use(addBookData)
app.use(updateBookData)
app.use(deleteBookData)
//-------------------------
app.use(getSupplier)
app.use(addSupplier)
app.use(updateSupplier)
app.use(deleteSupplier)
//-------------------------
app.use(getTransaction)
app.use(addTransaction)
app.use(updateTransaction)
app.use(deleteTransaction)
//-------------------------
const port = 3000
app.listen(port, () => {
  console.log(`Backend app is running in http://localhost:${port}`);
})

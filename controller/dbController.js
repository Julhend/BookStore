const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const userModel = require('../model/userModel')
const adminModel = require('../model/adminModel')
const customerModel = require('../model/customerModel')
const bookDataModel = require('../model/bookDataModel copy')
const supplierModel = require('../model/supplierModel')
const transactionModel = require('../model/transactionModel')


// ⚠️ propietary code, don't change it ⚠️
// this code will create db.json automatically if your folder doesn't have one
// courious? 👀 search for "IIFE function"
let db;
(async () => {
  try {
    const fs = require('fs')
    const util = require('util')
    const readdir = util.promisify(fs.readdir)
    const path = require('path').resolve()
    const dir = await readdir(path)
    if (!dir.includes('db.json'))
      fs.writeFile(path + 'db.json', '', () => 1)

    const adapter = new FileSync('db.json')
    db = low(adapter)
    // we will call each key in lowdb object as "table"
    db.defaults({
      // 👇 table names
      user: [],
      admin: [],
      customer: [],
      bookData: [],
      supplier: [],
      transaction: []
    })
      .write()
  } catch (error) {
    console.log(error);
  }
})()

function validator(body, model) {
  let result = {}
  let modelCounter = model.length
  let counter = 0
  for (const key in body) {
    if (model.includes(key)) {
      result[key] = body[key]
      counter++
    }
  }
  if (counter < modelCounter) {
    return false
  }
  return result
}

/**
 * Get data
 * @param {String} tableName table name
 * @returns {Object} data
 */

function get(tableName, id) {
  const parsedId = parseInt(id)
  if (parsedId) {
    return db
      .get(tableName)
      .find({ id: parsedId })
      .value()
  } else {
    return db
      .get(tableName)
      .value()
  }
}

/**
 * Add data
 * @param {String} tableName table name
 * @param {Object} body inserted data
 */
function add(tableName, body) {
  let parsedBody
  if (tableName == 'user') {
    parsedBody = validator(body, userModel)
  }
  if (tableName == 'admin') {
    parsedBody = validator(body, adminModel)
  }
  if (tableName == 'customer') {
    parsedBody = validator(body, customerModel)
  }
  if (tableName == 'bookData') {
    parsedBody = validator(body, bookDataModel)
  }
  if (tableName == 'supplier') {
    parsedBody = validator(body, supplierModel)
  }
  if (tableName == 'transaction') {
    parsedBody = validator(body, transactionModel)
  }


  if (!parsedBody) {
    return false
  }
  return db.get(tableName)
    .push(body)
    .write()
}

/**
 * Add a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 * @param {Object} body updated data
 */
function edit(tableName, id, body) {
  const parsedId = parseInt(id)
  db.get(tableName)
    .find({ id: parsedId })
    .assign(body)
    .write()
}

/**
 * Remove a data
 * @param {String} tableName table name
 * @param {String|Number} id data id
 */
function remove(tableName, id) {
  const parsedId = parseInt(id)
  db.get(tableName)
    .remove({ id: parsedId })
    .write()
}

module.exports = {
  get,
  add,
  edit,
  remove,
  validator
}
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

function shapeObject(input, model) {
  const result = {}
  const modelCounter = model.length
  let counter = 0
  for (const namaKey in input) {
    if (model.includes(namaKey)) {
      result[namaKey] = input[namaKey]
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

function get(tableName, query) {
  if (query && Object.keys(query).length) {
    return db
      .get(tableName)
      .find(query)
      .value()
  }
  return db
    .get(tableName)
    .value()

}

/**
 * Add data
 * @param {String} tableName table name
 * @param {Object} body inserted data
 */
function add(tableName, body) {
  let shapedBody
  if (tableName == 'user') {
    shapedBody = shapeObject(body, userModel)
  }
  if (tableName == 'admin') {
    shapedBody = shapeObject(body, adminModel)
  }
  if (tableName == 'customer') {
    shapedBody = shapeObject(body, customerModel)
  }
  if (tableName == 'bookData') {
    shapedBody = shapeObject(body, bookDataModel)
  }
  if (tableName == 'supplier') {
    shapedBody = shapeObject(body, supplierModel)
  }
  if (tableName == 'transaction') {
    shapedBody = shapeObject(body, transactionModel)
  }


  if (!shapedBody) {
    return false
  }
  return db.get(tableName)
    .push(shapedBody)
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
function removeAll(tableName) {
  db.get(tableName)
    .remove({})
    .write()
}

module.exports = {
  get,
  add,
  edit,
  remove,
  removeAll

}
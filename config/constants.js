const DB_NAME= 'rooms with reviews'
const URI = 'mongodb://localhost:27017'
const DB_URI = `${URI}/${DB_NAME}`

module.exports.dbName = DB_NAME
module.exports.db=DB_URI
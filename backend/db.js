const mongoose = require('mongoose')

async function connect(uri) {
  try {
    await mongoose.connect(uri)
    console.log('DB connected')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connect

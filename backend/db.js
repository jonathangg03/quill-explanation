const mongoose = require('mongoose')

async function connect(uri) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('DB connected')
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = connect

const mongoose = require('mongoose')

async function connect(uri) {
  await mongoose.connect(uri, () => console.log('DB connected'))
}

module.exports = connect

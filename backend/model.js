const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NoteSchema = new Schema({
  title: String,
  content: String
})

module.exports = mongoose.model('notes', NoteSchema)

const express = require('express')
const cors = require('cors')
const db = require('./db')
const Model = require('./model')
const app = express()
db('mongodb://localhost:27017/quill')

app.use(cors())
app.use(express.json())

app.get('/', async (req, res) => {
  const note = await Model.find()
  res.send(note)
})

app.get('/:id', async (req, res) => {
  const note = await Model.findById(req.params.id)
  res.send(note)
})

app.post('/', async (req, res) => {
  const { body } = req
  const newNote = new Model(body)
  await newNote.save()
  res.send(newNote)
})

app.put('/:id', async (req, res) => {
  const { body, params } = req
  const note = await Model.findOneAndUpdate(
    { _id: params.id },
    { _id: params.id, ...body }
  )
  res.send(note)
})

app.listen(3001, () => console.log('http://localhost:3001'))

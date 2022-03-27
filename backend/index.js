const express = require('express')
const cors = require('cors')
const db = require('./db')
const app = express()
// db('')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', async (req, res) => {
  const documentEl = await Model.find()
  res.send(documentEl)
})

app.get('/:id', async (req, res) => {
  const documentEl = await Model.findById(req.params.id)
  res.send(documentEl)
})

app.post('/', async (req, res) => {
  const { body } = req
  const newDocument = new Model(body)
  await newDocument.save()
  res.send(newDocument)
})

app.put('/:id', async (req, res) => {
  const { body, params } = req
  const documentEl = await Model.findOneAndUpdate(
    { _id: params.id },
    { _id: params.id, ...body }
  )
  res.send(documentEl)
})

app.listen(3001, () => console.log('http://localhost:3001'))

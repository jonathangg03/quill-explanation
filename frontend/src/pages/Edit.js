import { useState, useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import toolbar from '../toolbar'
import 'quill/dist/quill.snow.css'

function Edit() {
  const [title, setTitle] = useState('')
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } })
  const navigate = useNavigate()
  const params = useParams()

  useEffect(() => {
    const fetching = async (id) => {
      const res = await fetch(`http://localhost:3001/${id}`)
      const note = await res.json()
      return note
    }

    if (params.id || quill) {
      const note = fetching(params.id)
      quill.setContents(JSON.parse(note.content))
      setTitle(note.title)
    }
  }, [params, quill])

  const handleChange = (event) => {
    setTitle(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const data = {
      title: title,
      content: JSON.stringify(quill.getContents())
    }
    try {
      await fetch(`http://localhost:3001/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      navigate('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <h1>Editar nota</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Título:</label>
        <input
          type='text'
          placeholder='titulo'
          id='value'
          value={title}
          onChange={handleChange}
        />
        <div className='editor' ref={quillRef}></div>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default Edit

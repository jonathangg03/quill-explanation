import { useState } from 'react'
import { useQuill } from 'react-quilljs'
import { useNavigate } from 'react-router-dom'
import toolbar from '../toolbar'
import 'quill/dist/quill.snow.css'

function New() {
  const [title, setTitle] = useState('')
  const { quill, quillRef } = useQuill({ modules: { toolbar: toolbar } })
  const navigate = useNavigate()

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
      await fetch('http://localhost:3001/', {
        method: 'POST',
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
      <h1>Nueva nota</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='title'>Título:</label>
        <input
          type='text'
          placeholder='titulo'
          id='value'
          value={title}
          onChange={handleChange}
        />
        <div className='editor'>
          <div ref={quillRef}></div>
        </div>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default New

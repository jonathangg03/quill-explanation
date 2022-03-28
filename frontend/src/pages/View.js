import { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import 'quill/dist/quill.snow.css'

function View() {
  const params = useParams()
  const { quill, quillRef } = useQuill({
    readOnly: true,
    modules: { toolbar: false }
  })

  useEffect(() => {
    const fetching = async (id) => {
      const res = await fetch(`http://localhost:3001/${id}`)
      const note = await res.json()
      quill.setContents(JSON.parse(note.content))
    }
    if (params.id && quill) {
      fetching(params.id)
    }
  }, [params, quill])

  return (
    <>
      <h1>Ver nota</h1>
      <article className='editor' ref={quillRef}></article>
      <Link to={`/${params.id}/edit`}>Editar</Link>
    </>
  )
}

export default View

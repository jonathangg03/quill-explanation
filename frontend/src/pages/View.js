import { useEffect } from 'react'
import { useQuill } from 'react-quilljs'
import { useParams } from 'react-router-dom'
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
      return note
    }

    if (params.id || quill) {
      const content = fetching(params.id)
      quill.setContents(JSON.parse(content))
    }
  }, [params, quill])

  return (
    <>
      <h1>Ver nota</h1>
      <article className='editor' ref={quillRef}></article>
    </>
  )
}

export default View

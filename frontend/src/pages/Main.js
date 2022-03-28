import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Main() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    const fetching = async (id) => {
      const res = await fetch(`http://localhost:3001`)
      const notes = await res.json()
      setNotes(notes)
    }

    fetching()
  }, [])

  return (
    <>
      <h1>Lista de notas</h1>
      {notes.map((note) => {
        return (
          <li key={note._id}>
            <Link to={`/view/${note._id}`}>{note.title}</Link>
          </li>
        )
      })}
    </>
  )
}

export default Main

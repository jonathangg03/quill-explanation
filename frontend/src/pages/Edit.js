function Edit() {
  return (
    <>
      <h1>Editar nota</h1>
      <form>
        <label htmlFor='title'>Título:</label>
        <input type='text' placeholder='titulo' id='value' />
        <div className='editor'></div>
        <button>Enviar</button>
      </form>
    </>
  )
}

export default Edit

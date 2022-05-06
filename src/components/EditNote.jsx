import { useContext, useState, useRef } from "react"

const EditNote = ({updateNote, note}) => {

  const formRef = useRef(null)

  const [noteTitle, setNoteTitle] = useState('');

  const editNote = (event) =>{
    const editedNote = event.target.value
    setNoteTitle(editedNote)
  }

  return (
    <form ref={formRef}>
      <input onChange={editNote} type="text" name="editNote" placeholder="Edit note"/>
      <button onClick={(event) => updateNote(event, note, noteTitle, formRef)}>Change title</button>
    </form>
  )

}

export default EditNote

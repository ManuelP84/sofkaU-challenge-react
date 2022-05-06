import React, { useContext, useState } from 'react'
import { Store } from '../state/StoreProvider';
import EditNote from './EditNote';

const Note = ({note, removeNote}) => {


  const {state, dispatch} = useContext(Store)

  const [showEdit, setShowEdit] = useState(true)
  
  const onChecked = (event, note) =>{
    const checked = event.currentTarget.checked
    const newNote = {...note, done:checked}
    console.log(newNote)
    dispatch({
      type: 'update-note',
      payload:{
        note: newNote
      }
 
    }) 
  }

  const updateNote = (note, noteTitle) => {
    const newNote = {...note, title: noteTitle}
    console.log(newNote)
   dispatch({
      type: 'update-note',
      payload:{
        note: newNote
      }
 
    })
  }

  const displayEdit = () =>{
    setShowEdit(!showEdit)
  }
  

  return (
    <div>
      <h5>{`${note.title}`}</h5>
      <button onClick={() => removeNote(note)}>Remove</button>
      <button onClick={displayEdit}>Edit</button>
      {showEdit && <EditNote updateNote={updateNote} note={note}/>}
      <label>Done</label>
      <input type="checkbox" onChange={(event) =>onChecked(event, note)} checked={note.done}/>
    </div>
  )
}

export default Note

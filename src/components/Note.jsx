import React, { useContext } from 'react'
import { Store } from '../state/StoreProvider';

const Note = ({note, removeNote, updateNote}) => {


  //const {state, dispatch} = useContext(Store)  

  return (
    <div>
      <h5>{`${note.title}`}</h5>
      <button onClick={() => removeNote(note.id)}>Remove</button>
      <button onClick={() => updateNote(note.id)}>Edit</button>
    </div>
  )
}

export default Note

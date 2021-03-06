import React, { useContext, useState } from 'react'
import { Store } from '../state/StoreProvider';
import EditNote from './EditNote';

const Note = ({note, removeNote}) => {


  const {state, dispatch} = useContext(Store)

  const [showEdit, setShowEdit] = useState(false)
  
  const onChecked = async(event, note) =>{
    //const checked = event.currentTarget.checked
    const newNote = {...note, done:!note.done}
    let response = await fetch(`http://localhost:8081/api/update/note`,
    {                                                     
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(newNote)
    })
     
    let noteUpdated = await response.json()

    dispatch({
      type: 'update-note',
      payload:noteUpdated      
    })   
  }

  const updateNote = async (event, note, noteTitle, formRef) => {
    event.preventDefault()
    const newNote = {...note, title: noteTitle}
    let response = await fetch(`http://localhost:8081/api/update/note`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(newNote)
      })

      let noteSaved = await response.json()

      if(response.status == 200){
        dispatch({
          type: 'update-note',
          payload:{
            note: noteSaved
          } 
        })
        window.location.replace('');
      }


    formRef.current.reset()
  }

  const displayEdit = () =>{
    setShowEdit(!showEdit)
  }
  

  return (
    <div className="border border-dark m-3 rounded border-2 d-flex justify-content-evenly bg-primary p-2 text-dark bg-opacity-25">
      <h5 style={note.done ? {textDecoration: 'line-through', textDecorationColor: 'red'}:{}} className="fw-bold m-2">{`${note.title}`}</h5>
      <button className="btn btn-danger me-2 m-1 " onClick={() => removeNote(note)}>Remove</button>
      {!note.done && <button className="btn btn-warning" onClick={displayEdit}>Edit</button>}
      {showEdit &&  <EditNote updateNote={updateNote} note={note}/>}
      <label>Done</label>
      <input className="form-check-input left" type="checkbox" onChange={(event) =>onChecked(event, note)} checked={note.done}/>
    </div>
  )
}

export default Note

import React, { useContext, useState } from 'react'
import { Store } from '../state/StoreProvider';
import Category from './Category';
import Note from './Note';

const CategoryNote = () => {

  const[category, setCategory] = useState({})
  const [name, setName] = useState('')
  const[id, setId] = useState('')
  const [notesList, setNotesList] = useState([])

  const removeNote = (note) => {
    dispatch({
      type: 'delete-note',
      payload: note
      
    })
  }

  const updateNote = (note) => {
    dispatch({
      type: 'update-note',
      payload: note,
      newTitle: "prueba"
      
    })
  }

  const removeCategory = (categoryId) => {
    dispatch({
      type: 'delete-category',
      payload: {
        id:categoryId     
      }
    })
  }

  const {state, dispatch} = useContext(Store)

  return (
    <div>      
      <h2>
        {state.map((category) => (
          <div key={category.id}>
            <hr/>
            <Category category={category} removeCategory={removeCategory} />
            <hr/>
            {category.notes.map(note => (
              <Note key={note.id} removeNote={removeNote} note={note} updateNote={updateNote}/>
            ) )}
          </div>
        ))}
      </h2>     
    </div>
  )
}

export default CategoryNote

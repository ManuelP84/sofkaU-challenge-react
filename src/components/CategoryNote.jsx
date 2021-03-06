import React, { useContext, useEffect, useState } from 'react'
import { Store } from '../state/StoreProvider';
import Category from './Category';
import FormNote from "../components/FormNote";
import Note from './Note';

const CategoryNote = () => {

  const {state, dispatch} = useContext(Store)
  const[category, setCategory] = useState({})
  const [name, setName] = useState('')
  const[id, setId] = useState('')
  const [notesList, setNotesList] = useState([])

  const removeNote = async(note) => {
    console.log(note.id)
    let response = await fetch(`http://localhost:8081/api/delete/note/${note.id}`,
      {
        method: 'DELETE'
      })
      if(response.status == 200){
        console.log("Borradoooo")
        
        dispatch({
          type: 'delete-note',
          payload: note          
        })
      }
  }  

  const removeCategory = async(categoryId) => {
    let response = await fetch(`http://localhost:8081/api/delete/category/${categoryId}`,
      {
        method: 'DELETE'
      })
      if(response.status == 200){
        dispatch({
          type: 'delete-category',
          payload: {
            id:categoryId     
          }
        })
      }

  }

  useEffect(()=>{
    let listOfCategories = fetchAllCategories().then(
      category =>{    
        let action = {
          type: 'get-categories',
          payload: category
        }
        console.log(category)
        dispatch(action)
      }
    )
  },[])

  const fetchAllCategories = async() =>{
    let response = await fetch(`http://localhost:8081/api/get/categories`)
    let data = await response.json()
    return data
  }



  return (
    <div>      
      <h2>
        {state.map((category) => (
          <div key={category.id}>
            <hr/>
            <div className="m-5 border border-5 border-dark">
            <Category category={category} removeCategory={removeCategory} />
            <div className="m-5">
              <FormNote categoryId={category.id}/>
            </div>
            {category.notes.map(note => (
              <Note key={note.id} removeNote={removeNote} note={note}/>
            ) )}
          </div>
        </div>
        ))}
      </h2>     
    </div>
  )
}

export default CategoryNote

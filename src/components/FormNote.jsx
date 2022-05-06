import { useContext, useState, useRef } from "react"
import { Store } from "../state/StoreProvider";

const FormNote = ({categoryId}) => {  

  const formRef = useRef(null) 

  const [note, setNote] = useState('');

  const onAdd = (event)=>{
    event.preventDefault()
    if(note){
      dispatch({
        type: 'add-note',
        title: note,
        categoryId: categoryId
      })
      formRef.current.reset()
    }
    setNote('')
  }

  const {state, dispatch} = useContext(Store)

  const addNote = (event) =>{
    const entryNote = event.target.value
    setNote(entryNote)
  }

  return (
    <form ref={formRef}>
     <input onChange={addNote} type="text" name="note" placeholder="Note"/>
     <button onClick={onAdd}>Add a new note!</button>
   </form>
  )
}

export default FormNote

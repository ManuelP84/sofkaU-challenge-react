import { useContext, useState } from "react"
import { Store } from "../state/StoreProvider";

const FormNote = () => {  

  const [note, setNote] = useState('');

  const onAdd = (event)=>{
    event.preventDefault()
    if(note){
      dispatch({
        type: 'add-note',
        payload: {
          note
        }
      })
    }
  }

  const {state, dispatch} = useContext(Store)

  const addNote = (event) =>{
    const entryNote = event.target.value
    setNote(entryNote)
  }

  return (
    <form>
     <input onChange={addNote} type="text" name="note" placeholder="Note"/>
     <button onClick={onAdd}>Add a new note!</button>
   </form>
  )
}

export default FormNote

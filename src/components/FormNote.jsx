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
    <form ref={formRef} className="form-control border border-5">
     <input className="form-control  form-control-lg  mt-3" onChange={addNote} type="text" name="note" placeholder="Note"/>
     <div className="d-grid gap-2 col-6 mx-auto m-3">
        <button className="btn btn-success"  onClick={onAdd}>Add a new note!</button>
     </div>
   </form>
  )
}

export default FormNote

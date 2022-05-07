import { useContext, useState, useRef } from "react"
import { Store } from "../state/StoreProvider";

const FormCategory = () => {

  const formRef = useRef(null) 

  const [category, setCategory] = useState('')

  const {state, dispatch} = useContext(Store)


  const onAdd = (event)=>{
    event.preventDefault()
    if(category){
      dispatch({
        type: 'add-category',
        name: category        
      })
      formRef.current.reset()
    }
    setCategory('')
  }

  const addCategory = (event) =>{
    const entryCategory = event.target.value
    setCategory(entryCategory) 
  }

  return (
   <form className="form-control  border border-5 mt-5 " ref={formRef}>
     <input className="form-control  form-control-lg mt-3 " onChange={addCategory} type="text" name="category" placeholder="Category"/>
     <div className="d-grid gap-2 col-6 mx-auto m-3">
        <button button className="btn btn-success" onClick={onAdd}>New Category</button>
     </div>
   </form>
  )
}

export default FormCategory

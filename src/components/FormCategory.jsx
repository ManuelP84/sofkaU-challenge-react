import { useContext, useState } from "react"
import { Store } from "../state/StoreProvider";

const FormCategory = () => {

  const [category, setCategory] = useState('')

  const {state, dispatch} = useContext(Store)


  const onAdd = (event)=>{
    event.preventDefault()
    if(category){
      dispatch({
        type: 'add-category',
        payload: {
          category
        }
      })
    }
  }

  const addCategory = (event) =>{
    const entryCategory = event.target.value
    setCategory(entryCategory)
  }

  return (
   <form>
     <input onChange={addCategory} type="text" name="category" placeholder="Category"/>
     <button onClick={onAdd}>New Category</button>
   </form>
  )
}

export default FormCategory

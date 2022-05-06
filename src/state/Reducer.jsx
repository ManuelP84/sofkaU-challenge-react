
function reducer(state, action){    
    switch(action.type){
        case 'add-note':
            //Logica
            console.log("Adding a note!!!")
            return state
        case 'delete-note':
            console.log("Deleting note!!!")
        case 'update-note':            
            return state
        case 'add-category':
            console.log("Adding a category!!!")
            return state
        case 'delete-category':            
            const newListOfCategories = state.listOfCategories.filter(Category => Category.id !== action.payload.id)
            console.log(newListOfCategories)
            const newStateCategoryDeleted = {...state, listOfCategories: newListOfCategories}
            return newStateCategoryDeleted
    }
}

export default reducer
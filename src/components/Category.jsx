import React from 'react'

const Category = ({category, removeCategory}) => {
  return (
    <div className="m-3  d-flex justify-content-between">
      <>{`${category.name}`}</>
      <button className="btn btn-danger ms-5" onClick={() => removeCategory(category.id)}>Remove</button>
    </div>
  )
}

export default Category

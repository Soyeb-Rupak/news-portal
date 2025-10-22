import React, { use } from 'react'

const categoryLoads= fetch('/categories.json') .then(res=> res.json())


const Categories = () => {
    const categories = use(categoryLoads);
  return (
    <div>
       <h2 className='font-bold'>All Categories ( {categories.length})</h2>

        
        
        
        
        
        </div>
  )
}

export default Categories
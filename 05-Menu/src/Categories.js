import React from 'react';

const Categories = ({filterItems , categories}) => {

  return <div className='btn-container'>
    
   {categories.map((category,index)=>{
    return <button type='button' className='filter-btn' onClick={()=>filterItems(category)}  key={index}>{category}</button>
   })}
  
  </div>

};

export default Categories;

import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories =['all',...new Set( items.map((item)=> item.category))] 

console.log(allCategories)

function App() {
  const[menuItem, setMenuItem]=useState(items)
  const[categories, setCategories]=useState(allCategories)
  
  const filterItems=(category)=>{
    if(category==="all"){
           setMenuItem(items)
           return ;
    }
    const filteritems=items.filter((item)=>item.category==category)
    setMenuItem(filteritems);
    return
  }
    return( 
    <main>
      <section className='menu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
       
        

      </section>
      <div className='btn-container'>
    {categories.map((category)=>{
      return(
        <button type='button' className='filter-btn' onClick={()=>filterItems(category)}>{category}</button>
      )
    })}
  
  </div>
      {/* <Categories categories={categories} filterItems={filterItems}/> */}
        <Menu item={menuItem}/>
    </main>
    );
}

export default App;

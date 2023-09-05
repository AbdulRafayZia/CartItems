

import React,{useState}  from 'react'
import data from './data'
// import List from './List'

// function App() {
//   const [people, setPeople]= useState(data);
//   return(
//   <main>
//     <section className='container'>
//       <h3 >{people.length} Bithday today</h3>
//       <List people={people}/>
//       <button onClick={()=>{setPeople([])}}> Clear All</button>

//     </section>
//   </main>
//   )
// }

function App(){
  const [people , setPeople]=useState(data)
  return(
  <main>
    <section  className='container'>
      <h3>{people.length} Birthday today</h3>
      {people.map((props)=>{
        const {id, name , age , image}=props;
        return(
          <article key={id} className='person'>
            <img src={image} alt={name} />
         <div>
         <h4>{name}</h4>
         <p>{age} Years</p>
         </div>


          </article>
        )
      })}
      <button onClick={()=>setPeople([])}>clear All</button>
    </section>

  </main>)
}
export default App;


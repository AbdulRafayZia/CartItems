import React, { useState } from 'react';
import data from './data';
function App() {

 
  const[count, setCount]=useState(0);
  const[text, setText]=useState([]);
const handleSubmit=(e)=>{
  e.preventDefault();
let amount =parseInt(count)
if(count<0){
  amount=1;
}
if(count>8){
  amount=8;
}
setText(data.slice(0,amount))
 
}

 return(
  <section className='section-center' onSubmit={handleSubmit}>
    <h3>tired of boring lorem ipsum?</h3>
    <form  className='lorem-form' >
    <label htmlFor='amount'>
      paragraphs:
    </label>
    <input type="number"
    name='amount' value={count} onChange={(e)=>setCount(e.target.value)} min={0} max={8}/>
    <button className="btn" type='submit' >generate</button>
    </form>
    <article className='lorem-text'> 
    {text.map((item,index)=>{
      const{id,Title, text}=item;
      return(
        <>
        <h2>{Title}</h2>
        <p id={id}>{text}</p>
        </>

      )
    })}</article>
  </section>
 )
}

export default App;

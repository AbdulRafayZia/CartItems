import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiOutlineRadiusUpleft } from 'react-icons/ai';
const Question = ({title, info})=>{
  const [showinfo, setShowinfo] = useState(false)
  return <article className='question'>
    <header>
      <h4>{title}</h4>
     <button className='btn' onClick={()=>setShowinfo(!showinfo)} > {showinfo ? <AiOutlineMinus/>:<AiOutlinePlus/>}</button>
    </header>
    {showinfo && <p>{info}</p>}

  </article>
    
};


export default Question;

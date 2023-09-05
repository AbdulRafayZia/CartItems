import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'
function App() {
  // Set States 
  const [loading, setLoading]=useState(true)
  const [jobs, setJobs]=useState([])
  const[value, setValue]=useState(0)

  //  aysc await to fetch data from url  
  const fetchJobs=async()=>{
    const reponse= await fetch(url);
    const data= await reponse.json();
    setJobs(data);
    setLoading(false)
  }
  // useEffect for call fetchJobs function for every interval 
  useEffect(()=>{
    fetchJobs()
  },[])
  // Loading section 
  if(loading)
  {
    return(
      <section className='section loading'>
        <h1>Loading...</h1>
      </section>
    )
  }
  console.log(jobs);
const {company, dates, duties, title}=jobs[value];
return(
  <section className='section'>
    <div className='title'>
      <h2>experience</h2>
      <div className='uderline'></div>
    </div>
    <div className='jobs-center'>
      {/* btn container  */}
      <div className='btn-container'>
      {
  jobs.map((item,index)=>{
    return(
      <button key={index} onClick={()=>{setValue(index)}} className={`job-btn ${index===value &&"active-btn"}`} >{item.company}</button>
    )
  })
}
    </div>
    <article className='job-info'>
      <h3>{title}</h3>
      <h4>{company}</h4>
      <p className='job-date'>{dates}</p>
      {duties.map((duty, index)=>{
        return(
          <div key={index} className='job-desc'>
            <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
            <p>{duty}</p>
          </div>
        )
      })}
    </article>
    </div>
  </section>
)
}

export default App

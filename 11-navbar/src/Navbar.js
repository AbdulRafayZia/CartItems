// Import the React library and other dependencies.
import React, { useState, useRef, useEffect } from 'react';
import { FaBars, FaTwitter } from 'react-icons/fa';
import { links, social } from './data';
import logo from './logo.svg';

// Create a component called Navbar.
const Navbar = () => {

  // declare two state variables, one for showing the links and one for the ref of the links container.
  const[showLinks, setShowLinks]=useState(false);
  const linksContainerRef=useRef();
  const linksRef= useRef();

  // useEffect hook to calculate the height of the links and set the height of the links container accordingly.
  useEffect(()=>{
    const linksHeight= linksRef.current.getBoundingClientRect().height;
    if(showLinks){
      linksContainerRef.current.style.height=`${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height='0px'
    }
  },[showLinks])

  // return the navbar component.
  return(
    <nav>
      <div className='nav-center'>
       {/* This is the nav header. */}
      <div className='nav-header'>
        <img src={logo} alt="logo"  className='logo'/>
        <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>

      {/* This is the links container. */}
      <div className='links-container' ref={linksContainerRef}>
        <ul className='links' ref={linksRef}>
         {/* This is a loop that iterates over the links array and renders a list item for each link. */}
         {links.map((item,index)=>{
          const{id, url,text}=item;
          return (
            <li key={id}>
              <a href={url}>{text}</a>
            </li>
          )
         })}
        </ul>
      </div>

       {/* This is the social icons. */}
      <ul className='social-icons'>
        {social.map((item)=>{
          const {id, url, icon}=item;
          return(<li key={id}>
            <a href={url}>{icon}</a>
          </li>)
        })}
      </ul>
      </div>
    </nav>
  )
}

// Export the Navbar component.
export default Navbar

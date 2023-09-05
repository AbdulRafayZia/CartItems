import React, { useState, useContext } from 'react';
import sublinks from './data';

const AppContext= React.createContext();
const AppProvider=({children})=>{
  const [isSidebarOpen, setIsSidebarOpen]=useState(false);
  const [isSubmenuOpen, setIsSubmenuOpen]=useState(false);
  const[page, setPage]=useState({
    page:'',links:[]
  })
  const[location, setLocation]=useState({})
  const openSidebar=()=>{
    setIsSidebarOpen(true);
  }
  const openSubmenu=(text, coordinates)=>{
    const page= sublinks.find((links)=>links.page==text);
    setPage(page);
    setLocation(coordinates);
    setIsSubmenuOpen(true);
  }
  const closeSidebar=()=>{
    setIsSidebarOpen(false)
  }
  const closeSubmenu=()=>{
    setIsSubmenuOpen(false)
  }
  return(
    <AppContext.Provider 
    value={{isSidebarOpen,
      isSubmenuOpen,
      openSidebar,
      openSubmenu,
      closeSidebar,
      closeSubmenu,
      page,
      location
    }}>
      {children}
    </AppContext.Provider>
  )
 

}
export const useGlobalContext=()=>{
  return useContext(AppContext);
}

export {AppContext, AppProvider}

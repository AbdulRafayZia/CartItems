import React, { useState, useContext } from 'react';

const AppContext= React.createContext();
const AppProvider=({children})=>{

    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const[isModalOpen,setIsModalOpen]=useState(false);

    const openModal=()=>{
        setIsModalOpen(true);
    }
    const closeModal=()=>{
        setIsModalOpen(false);
    }

     const openSidebar=()=>{
        setIsSidebarOpen(true)
     }
     const closeSidebar=()=>{
        setIsSidebarOpen(false)
     }
     return(
        <AppContext.Provider value={{
            openModal,
            closeModal,
            openSidebar,
            closeSidebar,
            isSidebarOpen,
            isModalOpen,
        }
        }>{children}</AppContext.Provider>
     )

}

export const  useGlobalContext=()=>{
    return useContext(AppContext);
}
export {AppContext, AppProvider}
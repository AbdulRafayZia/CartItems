import React, { useEffect } from 'react'

const Alert = ({type, msg, addAlert, list}) => {
useEffect(()=>{
const timeout= setTimeout(()=>{
  addAlert()
},1000)
return ()=> clearTimeout(timeout)
},[list])
  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert

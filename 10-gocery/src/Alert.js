import React, { useEffect } from 'react';

// This line imports the React library and the useEffect hook.

const Alert = ({type, msg, addAlert, list}) => {

// This line defines the Alert component. It takes the following props:
// - type: The type of alert, such as "success" or "error".
// - msg: The message to display in the alert.
// - addAlert: A function to add a new alert to the list.
// - list: The list of alerts.

useEffect(()=>{

// This line uses the useEffect hook to create a timer that will automatically close the alert after 1 second.

const timeout= setTimeout(()=>{
  addAlert()
},1000)
return ()=> clearTimeout(timeout)
},[list])

// This line specifies that the useEffect hook will run when the list prop changes.

  return <p className={`alert alert-${type}`}>{msg}</p>
}

export default Alert

// This line exports the Alert component.

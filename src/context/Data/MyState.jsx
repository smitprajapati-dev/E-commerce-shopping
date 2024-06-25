import React from 'react'
import MyContext from './MyContext';

function MyState(props) {
    const state = {
        name: "Smit Vedant",
        rollno: 15
    }
  return (
    <MyContext.Provider value={state}>
       {props.children}
    </MyContext.Provider>
  )
}

export default MyState
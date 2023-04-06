import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const HomeRoute = ({children}) => {
    const {user} = useSelector(state => state.auth)    
    
    if (user) {
        return <Navigate to={"/"} replace={true}/>
    }
  return children
}

export default HomeRoute
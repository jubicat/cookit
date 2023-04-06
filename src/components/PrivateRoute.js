import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
const PrivateRoute = ({children}) => {
  const {user} = useSelector(state => state.auth)
    const location = useLocation()

    if (!user){
        return <Navigate to={"/auth"} replace={true} state={{
            return_url: location.pathname
        }} />
    }
    return children
}

export default PrivateRoute
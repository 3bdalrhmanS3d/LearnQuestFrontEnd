import React from 'react'
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute2(props) {
if(props.userData === null){
    return <Navigate to='/login'/>
  }
  else if(props.userData === 1){
    
    return props.children;

  }
  
}

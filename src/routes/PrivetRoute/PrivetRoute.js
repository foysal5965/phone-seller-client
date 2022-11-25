import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import DislplayLoading from '../../Shared/DisplayLoading/DislplayLoading';


const PrivetRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext)
    const location= useLocation()
   if(loading){
    return <DislplayLoading></DislplayLoading>
   }
   if(user){
    return children
   }
   return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default PrivetRoute;
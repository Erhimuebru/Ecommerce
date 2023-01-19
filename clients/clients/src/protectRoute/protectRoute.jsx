import React from "react";

import { Navigate, Outlet } from "react-router-dom";



const ProtectRoutes = ({children, user}) => {
    if(!user){
        return <Navigate  to="/"/>
    }

    return children ? children : <Outlet />;
   
   


    
    
}
 
export default ProtectRoutes;
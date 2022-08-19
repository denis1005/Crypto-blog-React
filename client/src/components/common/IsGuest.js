import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export const IsGuest=({ children })=>{
    const {isAuthenticated} = useContext(AuthContext)
     
    if(!isAuthenticated){
        return <Navigate to='404' replace />
    }

    return children ? children : <Outlet />;
}
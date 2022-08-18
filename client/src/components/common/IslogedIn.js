import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Outlet, Navigate } from "react-router-dom";

export const IsLoggedIn=({ children })=>{
    const {isAuthenticated} = useContext(AuthContext)
     
    if(isAuthenticated){
        return <Navigate to='/' replace />
    }

    return children ? children : <Outlet />;
}
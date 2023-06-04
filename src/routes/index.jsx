import { useContext } from "react";
import { AuthGoogleContext } from "../context/authGoogle";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoutes () {
    
    const {signed} = useContext(AuthGoogleContext)
    return  signed ? <Outlet/>: <Navigate to="/"/>
}
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
export const PrivateRoute = ({children}) => {


    const {isAuth} =useSelector((store)=>store.auth)
   

    return isAuth? children:<Navigate to={"/signin"}  />
};
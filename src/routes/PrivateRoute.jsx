import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({ Children }) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    // console.log('this is location', location)

    if(loading){
        return <span className="loading loading-ball loading-lg"></span>
    }
    if(user){
        return Children;
    }
    return <Navigate state={location.pathname}  to="/login"></Navigate>
};

export default PrivateRoute;
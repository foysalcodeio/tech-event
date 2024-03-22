import { Children, useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const PrivateRoute = () => {
    const {user} = useContext(AuthContext)
    if(user){
        return Children
    }
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;
import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth"
import app from "../firebase/firebase.config";

export const authContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    //1. register
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    //2. login
    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        signIn,
        createUser,
        user
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
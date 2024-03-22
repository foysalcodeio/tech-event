import { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth"
import app from "../firebase/firebase.config";
import { useEffect } from "react";

export const AuthContext = createContext();
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
    //3. sign out
    const LogOut = () => {
        return signOut(auth)
    }

    // data store and action
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change', user)
            setUser(currentUser);
        })
        return () => {
            unSubscribe()
        }
    })

    const authInfo = {
        signIn,
        createUser,
        LogOut,
        user
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
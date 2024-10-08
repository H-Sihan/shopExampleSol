import { useContext, useEffect, createContext, useState } from "react";
import { signInWithPopup, 
    signOut, 
    onAuthStateChanged, 
    GoogleAuthProvider, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";


const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };


    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
      };

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [user]);

    return (<AuthContext.Provider value={{ user, googleSignIn, createUser, signIn, logOut }}>{children}</AuthContext.Provider>)
}

export const UserAuth = () => {
    return useContext(AuthContext)
}
import { verifyToken } from "../utils/api";

const {createContext, useState, useEffect} = require("react");


const AuthContext = createContext();

function AuthProviderWrapper({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    const storeToken = (token) => {
        localStorage.setItem("token", token)
    }

    const authenticateUser = async() => {
        // Get the stored token from the localStorag
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            const res = await verifyToken(storedToken); //res is the string-object with payload (user data) from "Bearer token"
            setIsLoggedIn(true)
            setUser(res.data)
            setIsLoading(false)
        } else {
            setIsLoggedIn(false);
            setUser(null)
            setIsLoading(false)
        }
    }

    const removeToken = () => {
        // Upon logout, remove the token from the localStorage
        localStorage.removeItem("token");
    }

    const logOutUser = () => {
        // To log out the user, remove the token
        removeToken();
        // and update the state variables
        authenticateUser()
    }

    //this keeps the user logged in even if the page is reloaded
    useEffect(() => {
        authenticateUser()
    },[])

    return (
        <AuthContext.Provider value={{
            isLoading, 
            isLoggedIn, 
            user, 
            storeToken, 
            authenticateUser, 
            logOutUser}}
        >
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProviderWrapper};
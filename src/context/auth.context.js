import { verifyToken } from "../utils/api";

const {createContext, useState, useEffect} = require("react");


const AuthContext = createContext();

function AuthProviderWrapper({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    const storeToken = (token) => {
        localStorage.setItem("project_token", token)
    }

    const authenticateUser = async() => {
        const token = localStorage.getItem("project_token");
        if (token) {
            const res = await verifyToken(token); //res is the string-object with payload (user data) from "Bearer token"
            setIsLoggedIn(true)
            setUser(JSON.parse(res.data))
            setIsLoading(false)
        } else {
            setIsLoggedIn(false);
            setUser(null)
        }
    }

    //this keeps the user logged in even if the page is reloaded
    useEffect(() => {
        authenticateUser()
    },[])

    return (
        <AuthContext.Provider value={{isLoading, isLoggedIn, user, storeToken, authenticateUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProviderWrapper};
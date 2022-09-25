const {createContext, useState} = require("react");


const AuthContext = createContext();

function AuthProviderWrapper({children}) {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider value={{isLoading, isLoggedIn, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export {AuthContext, AuthProviderWrapper};
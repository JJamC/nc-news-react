import { createContext, useState } from "react";

export const UserAccountContext = createContext()

export const UserAccountProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState("cooljmessy");

    return (<UserAccountContext.Provider value={{ loggedUser, setLoggedUser }}>
        {children}
    </UserAccountContext.Provider>
    );
};
import * as React from 'react';
// eslint-disable-next-line react-refresh/only-export-components
export const UserContext = React.createContext();
function fetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: "1", user: "rku" });
        }, 1000);
    });
}

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
    const [user, setUser] = React.useState({
        name: "loading...",
        id: "loading...",
    })

    React.useEffect(() => {
        fetchUser().then((data) => setUser(data));
    }, []);

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}
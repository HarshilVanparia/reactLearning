import * as React from "react";

function ApiCallSimulation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "RKU" });
        }, 4000);
    });
}

function ApiTesting() {
    const [user, setUser] = React.useState({ id: "loading...", name: "loading..." }); // Combine state into a single object

    React.useEffect(() => {
        ApiCallSimulation().then((fetchedUser) => {
            setUser(fetchedUser); // Update state with the fetched user object
        });
    }, []); // Add empty dependency array to avoid infinite re-renders

    return (
        <div>
            <h2>User ID: {user.id}</h2>
            <h2>User Name: {user.name}</h2>
        </div>
    );
}

export default ApiTesting;

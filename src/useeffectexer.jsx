import * as React from "react";
function ApiCallSimulation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "RKU" });
        }, 4000);
    });
}

function ApiTesting() {
    const [ id, setId ] = React.useState("loading...");
    const [ name, setName ] = React.useState("loading...");
    React.useEffect(() => {
        ApiCallSimulation().then((user) => {
            setId(user.id);
            setName(user.name);
        })
    });
    return (
        <div>
            <h2>User ID: {id}</h2>
            <h2>User Name: {name}</h2>
        </div>
    )
}

export default ApiTesting;
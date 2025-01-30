import { Promise } from "bluebird";
import { useEffect, useState } from "react";
Promise.config({ cancellation: true });

function Fetchuser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, user: "RKU" });
        }, 4000);
    });
}

function CancelRequest() {
    const [user, setUser] = useState("Loading...");
    const [id, setId] = useState("Loading...");
    useEffect(() => {
        const promise = Fetchuser().then((var1) => {
            setUser(var1.name);
            setId(var1.id);
        });
        return () => {
            promise.cancel();
        };
    });
    return (
        <div>
            User ID: {id}
            <br />
            User Name: {user}
      </div>  
    );
}

export default CancelRequest;
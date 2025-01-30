import { useState, useEffect } from "react";

function ApiCallSimulation() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Ki", "Kaioken", "Kayo", "L"]);
        }, 4000);
    });
}

function ApiTestingTask() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        ApiCallSimulation().then((data) => {
            setItems(data);
        });
    }, []);


    return (
        <div>
            <h1>Fetched Items</h1>
            <ul>
                {items.length === 0 ? (
                    <li>Loading...</li>
                ) : (
                    items.map((item, index) => <li key={index}>{item}</li>)
                )}
            </ul>
        </div>
    );
}

export default ApiTestingTask;

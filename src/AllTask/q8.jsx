import { useEffect, useState } from "react";

const CountdownTimer = () => {
    const [time, setTime] = useState(300); // 5 minutes in seconds

    useEffect(() => {
        if (time <= 0) return;
        const timerId = setInterval(() => {
            setTime(prevTime => prevTime - 1);
        }, 1000);
        return () => clearInterval(timerId);
    }, [time]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div>
            <h1>Countdown Timer</h1>
            <p>{formatTime(time)}</p>
        </div>
    );
};

export default CountdownTimer;

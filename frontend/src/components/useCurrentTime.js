import {useEffect, useState} from "react";

const useCurrentTime = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString("ru-Ru"));

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString("ru-Ru"));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return time;
};
export default useCurrentTime;

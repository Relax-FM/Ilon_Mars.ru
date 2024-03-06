import React, { useState, useEffect } from 'react';
import "./LoadingPage.css";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../../reduxStore/actions";

function LoadingPage() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const [rotation, setRotation] = useState(0);

    const getRandomSpeed = (min, max) =>{
        return Math.random() * (max - min) + min;
    }

    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setRotation((prevRotation) => {
                    if (prevRotation >= 360) {
                        return 360;
                    }
                   return  (prevRotation + getRandomSpeed(3,12));
                });
            }, 1);
            return () => clearInterval(interval);
        }
    }, [isLoading]);

    useEffect(() => {
        if (rotation >= 360) {
            dispatch(setLoading(false))
        }
    }, [rotation]);

    return (
        <div className="page loading">
            <img
                className={"loading__image"}
                src="./pics/loading_image.png"
                alt={"loading"}
                style={{
                    transform: `rotate(${rotation % 360}deg)`
                }}
            />
            <p className="loading__status text-effect">
                {Math.round((rotation)/360 * 100).toString().padStart(2, '0')}
            </p>
        </div>
    );

    // Rest of your component
}
export default LoadingPage;
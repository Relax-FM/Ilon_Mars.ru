import React, { useState, useEffect } from 'react';
import "./PageLoading.css";
import {useDispatch, useSelector} from "react-redux";
import {setLoading} from "../../reduxStore/actions";
import Row from "../Row";

function PageLoading() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.isLoading);
    const [rotation, setRotation] = useState(0);

    const getRandomSpeed = (min, max) =>{
        return Math.random() * (max - min) + min;
    }

    // TODO; fix the speed the same in safari&Firefox
    useEffect(() => {
        if (isLoading) {
            const interval = setInterval(() => {
                setRotation((prevRotation) => {
                    if (prevRotation >= 360) {
                        return 360;
                    }
                   return  (prevRotation + getRandomSpeed(3,12));
                });
            }, 20);
            return () => clearInterval(interval);
        }
    }, [isLoading]);

    useEffect(() => {
        if (rotation >= 360) {
            dispatch(setLoading(false))
        }
    }, [rotation]);

    return (
        <Row className={`loading`}>
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
        </Row>
    );

    // Rest of your component
}
export default PageLoading;
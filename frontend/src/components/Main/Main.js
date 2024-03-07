import "./Main.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Row from "../Row";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Notification from "../Notification";
import * as PropTypes from "prop-types";
import Schedule from "../Schedule";
// TODO: rename to MainPage
// TODO fix className logic in different files

Schedule.propTypes = {periods: PropTypes.shape({})};

// TODO add to reduxStore user info
function Main() {
    // const mode = useSelector(state => state.mode);
    const mode = "mars"
    const [periods, setPeriods] = useState([])

    useEffect(() => {
        // try {
        //     const periods  = fetch("http://localhost:3001/api/user", {
        //             method: "GET",
        //         }
        //     ).then(response => response.json())
        //         .then(data => {
        //             console.log(data)
        //             setPeriods(data)
        //         })
        // }
        // catch (e) {
        //     console.log(e)
        // }
        // analyse periods
        // code
        setPeriods([
                {
                    "start": "2021-12-12T12:00:00",
                    "end": "2021-12-12T13:00:00",
                    "name": "ЗАГЛУШКА"
                },
                {
                    "start": "2021-12-12T13:00:00",
                    "end": "2021-12-12T14:00:00",
                    "name": "ЗАГЛУШКА"
                },
                {
                    "start": "2021-12-12T14:00:00",
                    "end": "2021-12-12T15:00:00",
                    "name": "ЗАГЛУШКА"
                },
                {
                    "start": "2021-12-12T15:00:00",
                    "end": "2021-12-12T16:00:00",
                    "name": "ЗАГЛУШКА"
                },
            ])
    },[])

    return (
        <Row className={`main main-${mode}`}>
            <Navbar/>
            <div className="main__header">
                <h1 className={"main__title"}>Здравствуйте, ЗАГЛУШКА!</h1>
            </div>
            <Schedule className={"main__schedule"} periods={periods.slice(0,3)}/>
            <Footer/>
        </Row>
    )
}

export default Main;
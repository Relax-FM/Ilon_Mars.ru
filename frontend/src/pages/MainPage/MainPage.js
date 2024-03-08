import "./MainPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Column from "../../components/Column";
import {useEffect, useState} from "react";
import Schedule from "../../components/Schedule"
import {useSelector} from "react-redux";

// TODO fix className logic in different files
function MainPage() {
    // const mode = useSelector(state => state.mode);
    const mode = "mars"
    const [periods, setPeriods] = useState([])
    const userName = useSelector(state => state.userName);

    const filterPeriods = () => {
        const today = new Date();
        // delete old entries
        setPeriods(periods.filter(period => {
                const from = new Date(period.from);
                return from >= today;
            })
        )
    }
    const formattedPeriods = () => {
        setPeriods(periods => periods.map((period) => {
            const fromDate = new Date(period.from);
            const toDate = new Date(period.to);
            const fromDateString = fromDate.toISOString().split('T');
            const toDateString = toDate.toISOString().split('T');

            // Add the "toDate" only if it's different from the "fromTime"
            const isDateDifferent = (fromDateString[0] !== toDateString[0]);

            return {
                fromDate: fromDateString[0],
                fromTime: fromDateString[1].split(".")[0],
                toDate: isDateDifferent ? toDateString[0] : null,
                toTime: toDateString[1].split(".")[0]
            };
        }))
    };

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
                    "speed": 73.3,
                    "from": "2024-03-04 08:05:22",
                    "to": "2024-03-04 11:09:22"
                },
                {
                    "speed": 93.0,
                    "from": "2024-03-04 18:33:21",
                    "to": "2024-03-04 23:11:43"
                },
                {
                    "speed": 83.3,
                    "from": "2024-03-05 09:28:44",
                    "to": "2024-04-05 14:30:18"
                },
                {
                    "speed": 15.3,
                    "from": "2024-03-05 16:16:38",
                    "to": "2024-03-05 16:19:22"
                },
                {
                    "speed": 41.6,
                    "from": "2024-03-05 22:56:38",
                    "to": "2024-03-05 23:12:35"
                },
                {
                    "speed": 18.3,
                    "from": "2024-03-06 00:35:00",
                    "to": "2024-03-06 01:50:39"
                }
            ])
        // filterPeriods()
        formattedPeriods()
    }, [])

    return (
        <Column className={`main main-${mode}`}>
            <Navbar/>
            <div className="main__header">
                <h1 className={"main__title"}>Здравствуйте, {userName}!</h1>
            </div>
            <Schedule className={"main__schedule"} periods={periods.slice(0, 3)}/>
            <Footer userName={userName}/>
        </Column>
    )
}

export default MainPage;

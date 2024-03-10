import "./MainPage.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Column from "../../components/Column";
import {useEffect, useState} from "react";
import Schedule from "../../components/Schedule"
import {useSelector} from "react-redux";

// TODO fix className logic in different files
//Todo check if is log in
function MainPage() {
    const mode = useSelector(state => state.mode);
    const [periods, setPeriods] = useState([])
    const userName = useSelector(state => state.userName);

    const filterPeriods = () => {
        const today = new Date();
        // delete old entries
        setPeriods(periods => periods.filter(period => {
                // select by end_time to access those that are still available
                const toTime = new Date(period.end_time);
                return toTime >= today;
            })
        )
    }
    const formattedPeriods = () => {
        setPeriods(periods => periods.map((period) => {
            const fromDate = new Date(period.start_time);
            const toDate = new Date(period.end_time);
            const fromDateString = fromDate.toLocaleString("ru-Ru").split(", ");
            const toDateString = toDate.toLocaleString("ru-Ru").split(", ");

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
        try {
            fetch("http://localhost:90/schedule")
                .then(response => response.json())
                .then(data => {
                    setPeriods(data)
                    filterPeriods()
                    formattedPeriods()
                })
        }
        catch (e) {
            console.error(e)
        }
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

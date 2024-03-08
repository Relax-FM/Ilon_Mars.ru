import "./Schedule.css";
import Row from "../Row/Row";
import Column from "../Column";

function Schedule({periods, className}) {
    className = className || "";


    return (
        <Column className={`${className} schedule`}>
            <Row>
                <span className={"schedule__title"}>БЛИЖАЙШИЕ СОЕДИНЕНИЯ</span>
            </Row>
            {periods.map((period, index) => { return (
                <div key={index} className={"schedule__period period"}>
                    <span className={"period__date"}>{period.fromDate} </span>
                    <span className={"period__time"}>{period.fromTime} — </span>
                    {period.toDate && (
                        <span className={"period__date"}>{period.toDate} </span>
                    )}
                    <span className={"period__time"}>{period.toTime}</span>
                </div>
            )}
            )}
        </Column>
    )
}

export default Schedule;

import "./Schedule.css";
function Schedule({periods, className}) {
    className = className || "";

    return (
        <div className={`${className} schedule`}>
            <span className={"schedule__title"}>БЛИЖАЙШИЕ СОЕДИНЕНИЯ</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                <path d="M1.84148 7.23395L16 7.23395" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
                <path d="M8.92074 0.99997L16 7.23497L8.92074 13.47" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>ЗАГЛУШКА</p>
        </div>
    )
}
export default Schedule;
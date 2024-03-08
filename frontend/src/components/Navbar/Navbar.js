import "./Navbar.css";
import RightButton from "../RightButton";
import Row from "../Row/Row";
import useCurrentTime from "../useCurrentTime";

function Navbar() {
    const time = useCurrentTime();
    return (
        <Row className="navbar">
            <h1 className={"navbar__title"}>AtomStar</h1>
            <RightButton data={time} disabled={true}/>
        </Row>
    )

}
export default Navbar;

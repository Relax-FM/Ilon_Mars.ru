import "./Navbar.css";
import RightButton from "../RightButton";
import Column from "../Column/Column";
function Navbar() {
    return (
        <Column className="navbar">
            <h1>AtomStar</h1>
            <RightButton data={"ЗАГЛУШКА"} />
        </Column>
    )

}
export default Navbar;
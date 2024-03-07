import "./Navbar.css";
import RightButton from "../RightButton";
import Column from "../Column/Column";
import useCurrentTime from "../useCurrentTime";
function Navbar() {
    const time = useCurrentTime();
    return (
        <Column className="navbar">
            <h1 className={"navbar__title"}>AtomStar</h1>
            <RightButton data={time} disabled={true}/>
        </Column>
    )

}
export default Navbar;
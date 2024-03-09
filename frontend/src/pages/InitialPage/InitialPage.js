import {Link} from "react-router-dom";
import "./InitialPage.css";
import {useDispatch, useSelector} from 'react-redux';
import useCurrentTime from "../../components/useCurrentTime";
import {setMode} from "../../redux/actions";
import LoadingPage from "../LoadingPage";
import RightButton from "../../components/RightButton";
import LeftButton from "../../components/LeftButton";
import Row from "../../components/Row/Row";
import Column from "../../components/Column/Column";

function InitialPage() {
    const dispatch = useDispatch();
    const text = (isEarth) => isEarth ? 'Земля' : 'Марс' ;
    const currentPlanet = () => text(mode === 'earth')
    const nextPlanet = () => text(mode !== 'earth')
    const mode = useSelector(state => state.mode);
    const time = useCurrentTime();
    const isLoading = useSelector(state => state.isLoading);


    const toggleMode = () => {
        if (mode === 'earth') {
            dispatch(setMode('mars'));
        } else {
            dispatch(setMode('earth'));
        }
    };
    if (isLoading) {
        return (
            <LoadingPage/>
        );
    }

    return (
        <Column className={`page page-${mode}`}>
            <div className="page__header">
                <h1 className="page__title">
                    {currentPlanet() + ". "}
                    Наука. Будущее.
                </h1>
            </div>
            <Row className="page__body adaptive-width">
                <LeftButton onClick={toggleMode} data={nextPlanet()} />
                <Link to="/authorise">
                    <button className="no-button column-btn">
                        Авторизация
                    </button>
                </Link>
                <RightButton data={time} disabled={true} />
            </Row>
        </Column>
    );
}
// TODO: fix bugs:column-time can have 'PM' and wrapped

export default InitialPage;

import {Link} from "react-router-dom";
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux';
import useCurrentTime from "./useCurrentTime";
import {setMode} from "../../reduxStore/actions";
import PageLoading from "../PageLoading";
import RightButton from "../RightButton";
import LeftButton from "../LeftButton";


function Home() {
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
            <PageLoading/>
        );
    }

    return (
        <div className={`page page-${mode}`}>
            <div className="page__header">
                <h1 className="page__title">
                    {currentPlanet() + ". "}
                    Наука. Будущее.
                </h1>
            </div>
            <div className="page__body info">
                <LeftButton onClick={toggleMode} data={nextPlanet()} />
                <Link to="/auth">
                    <button className="no-button info-btn">
                        Авторизация
                    </button>
                </Link>
                <RightButton data={time} disabled={true} />
                {/*<button className="no-button info-time" data-time={time}></button>*/}
            </div>
        </div>
    );
}
// TODO: fix bugs:info-time can have 'PM' and wrapped

export default Home;
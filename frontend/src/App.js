import './App.css';
import {Route, Routes} from "react-router-dom";
import InitialPage from "./pages/InitialPage"
import ReportSend from "./pages/ReportSend";
import ReportView from "./pages/ReportView";
import MainPage from "./pages/MainPage";
import Notification from "./pages/Notification";
import Authorise from './pages/AuthorisePage';

function App() {
  return (
    <div className={"App"}>
        <Routes>
            <Route path={"/"} element={<InitialPage/>} />
            <Route path={"/authorise"} element={<Authorise/>} />
            <Route path={"/main"} element={<MainPage/>} />
            <Route path={"/notification"} element={<Notification/>} />
            <Route path={"/send-report"} element={<ReportSend/>} />
            <Route path={"/view-report"} element={<ReportView/>} />
        </Routes>
    </div>
  );
}


export default App;

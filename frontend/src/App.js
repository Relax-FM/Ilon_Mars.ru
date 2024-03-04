import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home"
import ReportSend from "./components/ReportSend";
import ReportView from "./components/ReportView";
function App() {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/send-report"} element={<ReportSend/>} />
        <Route path={"/view-report"} element={<ReportView/>} />
    </Routes>
  );
}


export default App;

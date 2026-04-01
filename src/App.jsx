import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Status from "./components/status/Status";
import DigitalTools from "./components/toolSection/DigitalTools";
import { useState } from "react";
import Steps from "./components/getStarted/Steps";

function App() {
  const [chart, setChart] = useState([]);
  return (
    <>
      <NavBar chart={chart}></NavBar>
      <Banner></Banner>
      <Status></Status>
      <DigitalTools chart={chart} setChart={setChart}></DigitalTools>

      <Steps></Steps>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

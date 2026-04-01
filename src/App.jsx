import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Status from "./components/status/Status";
import DigitalTools from "./components/toolSection/DigitalTools";
import { useState } from "react";

function App() {
  const [chart, setChart] = useState([]);
  return (
    <>
      <NavBar chart={chart}></NavBar>
      <Banner></Banner>
      <Status></Status>
      <DigitalTools chart={chart} setChart={setChart}></DigitalTools>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

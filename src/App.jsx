import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Status from "./components/status/Status";
import DigitalTools from "./components/toolSection/DigitalTools";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Status></Status>
      <DigitalTools></DigitalTools>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

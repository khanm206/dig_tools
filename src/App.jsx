import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Status from "./components/status/Status";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
      <Status></Status>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

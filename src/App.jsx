import { ToastContainer } from "react-toastify";
import "./App.css";
import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;

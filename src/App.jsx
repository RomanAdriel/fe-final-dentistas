
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import { routes } from "./Routes/utils/routes";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Contact from "./Routes/Contact";
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
          <Route path={routes.home} element={<Home/>}/>
          <Route path={routes.dentist} element={<Detail/>}/>
          <Route path={routes.favorites} element={<Favs/>}/>
          <Route path={routes.contact} element={<Contact/>}/>
      </Routes>
      <Footer/>
      <ToastContainer autoClose={2000}/>
    </>

  );
}

export default App;

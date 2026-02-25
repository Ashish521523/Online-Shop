import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../Component/Footer";
import Header from "../Component/Header";
import { Outlet } from "react-router-dom";



function App() {
  return (
    <>
      <Header></Header>
       <Outlet/>
      <Footer></Footer>
    </>
  );
}

export default App;

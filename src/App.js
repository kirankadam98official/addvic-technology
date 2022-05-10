import Apply from "./Application/Apply";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import {BrowserRouter,Routes,Route} from "react-router-dom";


const App =()=>{

  return(


<>

     <BrowserRouter>
<Navbar/>
    <Routes>
               
      <Route path="/apply" element={<Apply/> }/>
      <Route path="/" element={<Home/> }/>
      <Route path="/" element={<Navbar/> }/>
      <Route path="/aboutus" element={<AboutUs/> }/>
      <Route path="/contactus" element={<ContactUs/> }/>


    </Routes>
    
     </BrowserRouter>


  </>
  )
}

export default App ;
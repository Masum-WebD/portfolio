import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import SocialMedia from "./Component/SocialMedia";
import About from "./Component/About";
import Portfolio from "./Component/Portfolio";
import Experience from "./Component/Experience";
import Contact from "./Component/Contact";
import Follow from "./Component/Follow";


function App() {
  return (
   <div>
    <Navbar/>
    <Home/>
    <Follow/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>
    <SocialMedia/>
   </div>
  );
}

export default App;

import NavBar from "../pages/NavBar";
import Section from "../pages/Section";
import SectionThree from "../pages/SectionThree";
import SectionTwo from "../pages/SectionTwo";
import Footer from "../pages/Footer";
import MainSection from "../pages/SectionTwo";
import FinalPage from "../pages/FinalPage";



const Landing =() => {
  return (
    <>
    <div className="vh-[100%]" >
      
      <NavBar/>
      <Section/>
      {/* <MainSection/> */}
      <SectionTwo/>
      <SectionThree/>
      <Footer/>
      <FinalPage/>
      </div>
    </>
  );
}

export default Landing
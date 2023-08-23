import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import Works from "./Components/Works";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Skill></Skill>
      <Works></Works>
      <Resume></Resume>
      <Footer></Footer>
    </>
  );
}

export default App;

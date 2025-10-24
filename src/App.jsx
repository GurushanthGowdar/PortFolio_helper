import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Skill from "./Components/Skill";
import Works from "./Components/Works";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";
import SimpleBackground from "./Components/SimpleBackground";

function App() {
  return (
    <div className="min-h-screen">
      <SimpleBackground />
      <div className="relative z-10">
        <Navbar />
        <main id="home" className="bg-transparent">
          <Hero />
          <Skill />
          <Works />
          <Resume />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
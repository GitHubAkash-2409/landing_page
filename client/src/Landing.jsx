import About from "./pages/About";
import Client from "./pages/Client";
import Features from "./pages/Features";
import Hero from "./pages/Hero";
import Services from "./pages/Services";
import Team from "./pages/Team";

const Landing = () => {
  return (
    <div>
      <Hero />
      <About />
      <Features/>
      <Services/>
      <Client/>
      <Team/>
    </div>
  );
};

export default Landing;


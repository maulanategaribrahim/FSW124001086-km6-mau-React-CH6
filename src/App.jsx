import "./App.css";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Services from "./components/landing page/Services";
import WhyUs from "./components/landing page/WhyUs";
import Testimonial from "./components/landing page/Testimonial";
import GetStarted from "./components/landing page/GetStarted";
import Faq from "./components/landing page/Faq";
import Hero from "./components/landing page/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonial />
      <GetStarted />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

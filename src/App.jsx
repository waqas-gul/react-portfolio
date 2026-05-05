import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SmoothScroll from "./providers/SmoothScroll";
import LiquidBackground from "./components/LiquidBackground";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import TeamSlider from "./components/TeamSlider";
import ResumeCard from "./components/ResumeCard";
import CertificateDetails from "./components/CertificateDetails";
import "./App.css";
import Portfolio from "./components/Portfolio";

function App() {
  return (
    <Router>
      <SmoothScroll>
        <LiquidBackground />
        <Header />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="hero">
                    <Hero />
                  </section>

                  <section id="about">
                    <AboutMe />
                  </section>
                  <section id="education">
                    <Education />
                  </section>
                  <section id="experience">
                    <Experience />
                  </section>
                  <section id="ResumeCard">
                    <ResumeCard />
                  </section>
                  {/* <section id="Certificates">
                    <Certificates />
                  </section> */}
                  <section id="Skills">
                    <Skills />
                  </section>
                  <section id="projects">
                    <Projects />
                  </section>
                  <section id="TeamSlider">
                    <TeamSlider />
                  </section>

                  <section id="contact">
                    <ContactSection />
                  </section>
                </>
              }
            />
            <Route path="/certificate/:id" element={<CertificateDetails />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </SmoothScroll>
    </Router>
  );
}

export default App;

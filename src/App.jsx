import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/layout/Layout';
import Home from './components/sections/Home';
import About from './components/sections/About';
import TechStack from './components/sections/TechStack';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
          <section id="home" className="snap-start h-screen">
            <Home />
          </section>
          <section id="about" className="snap-start h-screen">
            <About />
          </section>
          <section id="tech-stack" className="snap-start h-screen">
            <TechStack />
          </section>
          <section id="projects" className="snap-start h-screen">
            <Projects />
          </section>
          <section id="contact" className="snap-start h-screen">
            <Contact />
          </section>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
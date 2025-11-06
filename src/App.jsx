import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { About, Projects, Services, Contact, Footer } from './components/Sections';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

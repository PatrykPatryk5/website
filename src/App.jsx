import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Team from './components/Team';
import DiscordWidget from './components/DiscordWidget';
import './styles/App.css';

function App() {
  const [currentLang, setCurrentLang] = useState('pl');

  return (
    <div className="app">
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />
      <Hero currentLang={currentLang} />
      <About currentLang={currentLang} />
      <Team currentLang={currentLang} />
      <Projects currentLang={currentLang} />
      <DiscordWidget currentLang={currentLang} />
      <FAQ currentLang={currentLang} />
      <Footer currentLang={currentLang} />
    </div>
  );
}

export default App; 
import Navbar from './components/Navbar/Navbar';
import Skillbox from './components/Skillbox/Skillbox';
import Welcomebox from './components/Welcomebox/Welcomebox';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcomebox />
      <Skillbox />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

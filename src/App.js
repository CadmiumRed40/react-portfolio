import Navbar from './components/Navbar/Navbar';
import Skillbox from './components/Skillbox/Skillbox';
import Welcomebox from './components/Welcomebox/Welcomebox';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcomebox />
      <Skillbox />
    </div>
  );
}

export default App;

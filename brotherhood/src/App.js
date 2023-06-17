import './App.css';
import Header from './Components/Header/Header.js';
import IntroSection from './Components/IntroSection/IntroSection';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <IntroSection></IntroSection>
      <div className='banner'></div>
    </div>
  );
}

export default App;

import './App.css';
import Header from './Components/Header/Header.js';
import IntroSection from './Components/IntroSection/IntroSection';
import Facts from './Components/Facts/Facts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <IntroSection></IntroSection>
      <div className='banner'></div>
      <Facts></Facts>
    </div>
  );
}

export default App;

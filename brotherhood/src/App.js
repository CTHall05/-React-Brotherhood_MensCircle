import './App.css';
import Header from './Components/Header/Header.js';
import IntroSection from './Components/IntroSection/IntroSection';
import Features from './Components/Features/Features';
import Facts from './Components/Facts/Facts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <IntroSection></IntroSection>
      <div className='banner'></div>
      <Features></Features>
      <div className="banner"></div>
      <Facts></Facts>
    </div>
  );
}

export default App;

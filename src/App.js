import './App.css';
import Header from './Components/Header';
import Menu from './Components/Menu';
import PersonalInfo from './Components/PersonalInfo';
import Education from './Components/Education';
import Experience from './Components/Experience';
import Skills from './Components/Skills';

function App() {
  return (
    <div className="container-fluid col-lg-9 col-md-11 col-sm-9">
      <Header/>
      <Menu/>
      <PersonalInfo/>
      <Education/>
      <Experience/>
      <Skills/>
    </div>
  );
}

export default App;

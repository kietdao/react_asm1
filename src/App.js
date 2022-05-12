import avatar from './hinhthe_Kiet.jpg';
import './App.css';
import PersonalDetails from './PersonalDetails';
import Objectives from './Objective';
import Education from './Education';
import Skills from './Skills';
import Hobbies from './Hobbies';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div className='myCV'>
        <h2 className='myCV-title'>CURRICULUM VITAE</h2>
        <div className='myCV-content'>
          <PersonalDetails 
            avatar = {avatar}
          />
          <Objectives />
          <Education />
          <Skills />
          <Hobbies />
        </div>
      </div>
    </div>
  );
}

export default App;

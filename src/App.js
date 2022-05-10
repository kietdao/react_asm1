import avatar from './hinhthe_Kiet.jpg';
import './App.css';

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
           <section className='item item-1'>
              <h3 className='item-title'>
                PERSONAL DETAILS
                <hr></hr>
              </h3>
              <div className='item-content'>
                 <ul className='item-list'>
                    <li className='item-info'>
                        <p><strong>Full Name: </strong>Đào Tuấn Kiệt</p>
                    </li>
                    <li className='item-info'>
                        <p><strong>Date of birth: </strong>March 31, 1993</p>
                    </li>
                    <li className='item-info'>
                        <p><strong>Address: </strong>Phu Nhuan District, Ho Chi Minh City, Vietnam</p>
                    </li>
                    <li className='item-info'>
                        <p><strong>Phone: </strong>0838001118 - 0373914863</p>
                    </li>
                    <li className='item-info'>
                        <p><strong>Email: </strong><a href='kiet.dao3103@gmail.com'>kiet.dao3103@gmail.com</a></p>
                    </li>
                 </ul>
                 <img src={avatar} alt='user img' className='item-img'/>
              </div>
           </section>
           <section className='item item-2'>
              <h3 className='item-title'>
                OBJECTIVE
                <hr></hr>
              </h3>
              <div className='item-content'>
                 <ul className='item-list'>
                    <li className='item-info'>
                        <p>Looking for work opportunities in IT field.</p>
                    </li>
                    <li className='item-info'>
                        <p>Become a FE Web Developer</p>
                    </li>
                 </ul>
              </div>
           </section>
           <section className='item item-3'>
              <h3 className='item-title'>
                EDUCATION
                <hr></hr>
              </h3>
              <div className='item-content'>
                 <ul className='item-list'>
                    <li className='item-info'>
                        <p><strong>October 2016 – August 2018:  </strong>University Of Economics Ho Chi Minh City. <strong>Major:</strong> Accounting</p>
                    </li>
                    <li className='item-info'>
                        <p><strong>September 2017 – January 2018: </strong>Get Nhat Nghe certificate. <strong>Major:</strong> PHP&MySQL.</p>
                    </li>
                    <li className='item-info'>
                        <p><strong>March 2015: </strong>Get TOEIC certificate.</p>
                    </li>
                    <li className='item-info'>
                        <p><strong>September 2011 – December 2014: </strong>Hoa Sen University. <strong>Major:</strong> Accounting.</p>
                    </li>
                 </ul>
              </div>
           </section>
           <section className='item item-4'>
              <h3 className='item-title'>
                SKILLS
                <hr></hr>
              </h3>
              <div className='item-content'>
                 <ul className='item-list'>
                   <span><strong>Main</strong></span>
                    <li className='item-info'>
                        <p>HTML, CSS, JavaScript (ReactJS)</p>
                    </li>
                    <li className='item-info'>
                        <p>PHP (Laravel, Codigniter)</p>
                    </li>
                    <li className='item-info'>
                        <p>MySQL</p>
                    </li>
                 </ul>
                 <ul className='item-list'>
                   <span><strong>Other</strong></span>
                    <li className='item-info'>
                        <p>Git</p>
                    </li>
                 </ul>
              </div>
           </section>
           <section className='item item-5'>
              <h3 className='item-title'>
                HOBBIES
                <hr></hr>
              </h3>
              <div className='item-content'>
                 <ul className='item-list'>
                    <li className='item-info'>
                        <p>Learn and update for myself new knowledge.</p>
                    </li>
                    <li className='item-info'>
                        <p>Listening to music, reading book, news.</p>
                    </li>
                    <li className='item-info'>
                        <p>Join in teambuilding.</p>
                    </li>
                    <li className='item-info'>
                        <p>Exercise, sport: jogging.</p>
                    </li>
                 </ul>
              </div>
           </section>
        </div>
      </div>
    </div>
  );
}

export default App;

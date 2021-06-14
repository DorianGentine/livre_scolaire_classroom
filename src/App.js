import logo from './logo.svg';
import './App.css';
import loadStudents from './studentFixture';

function App() {
  loadStudents()
  .then(students => {
    console.log(`students.length`, students.length)
    for (let i = 0; i < students.length; i++) {
      const student = students[i];
      console.log(student)
    }
  })
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;

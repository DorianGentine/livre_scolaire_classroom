import React, {useState} from 'react';
import './App.css';
import studentsList from './fixtures/students';
import Navbar from './components/navbar'

function App() {
  const [students, setStudents] = useState(studentsList)
  return (
    <>
      <Navbar/>
      <div className="App">
        Hello World !
      </div>
    </>
  );
}

export default App;

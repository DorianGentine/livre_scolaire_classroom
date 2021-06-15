import React, {useState} from 'react';
import './App.css';
import Navbar from './components/navbar'
import Modal from './components/modal'
import Classroom from './components/classroom'

import studentsList from './fixtures/students';

function App() {
  const [students, setStudents] = useState(studentsList)
  const editStudent = (student, index) => {
    const editedStudents = [...students]
    editedStudents.splice(index, 1, student)
    setStudents(editedStudents)
  }
  const deleteStudent = index => {
    const editedStudents = [...students]
    editedStudents.splice(index, 1)
    setStudents(editedStudents)
  }
  
  const [modal, setModal] = useState(false)
  const showModal = newStudent => {
    if(newStudent.firstName){
      const editedStudents = [...students]
      editedStudents.unshift(newStudent)
      setStudents(editedStudents)
    }
    setModal(!modal)
  }

  return (
    <>
      {modal ? <Modal showModal={showModal}/> : null}
      <Navbar showModal={showModal}/>
      <Classroom students={students} editStudent={editStudent} deleteStudent={deleteStudent}/>
    </>
  );
}

export default App;

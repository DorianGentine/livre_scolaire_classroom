import React from 'react';
import StudentCard from './studentCard'
import '../stylesheets/app_body.css'

function Classroom(props) {
  const renderStudents = () => props.students.map((student, index) => {
    return (<StudentCard student={student} editStudent={props.editStudent} deleteStudent={props.deleteStudent} index={index} key={index}/>)
  })

  return (
    <div className="container student-grid">
      {props.students.length > 0 ? renderStudents() : <p>Aucun étudiant dans cette classe</p>}
    </div>
  );
}

export default Classroom;

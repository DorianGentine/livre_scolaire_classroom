import React, {useState, useEffect} from 'react';
import '../stylesheets/student_card.css'
import '../stylesheets/btn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'

function StudentCard(props) {
  const [edit, setEdit] = useState(false)
  const [student, setStudent] = useState(props.student)
  useEffect(() => {
    setStudent(props.student)
  }, [props.student]);

  const handleChange = event => {
    const key = event.target.name
    const newStudent = {...student}
    newStudent[key] = event.target.value
    setStudent(newStudent)
  }

  const editStudent = () => {
    setEdit(!edit)
    props.editStudent(student, props.index)
  }
  const cancelEdit = () => {
    setStudent(props.student)
    setEdit(!edit)
  }
  
  return (
    <div className="student_card">
      {edit ? 
        <div className="card_header">
          <input type="url" name="avatar" value={student.avatar} onChange={handleChange}/>
          <input type="text" name="firstName" value={student.firstName} onChange={handleChange}/>
          <input type="text" name="lastName" value={student.lastName} onChange={handleChange}/>
          <input type="text" name="area" value={student.area} onChange={handleChange}/>
        </div>
      :
        <div className="card_header">
          <img src={student.avatar} alt="avatar"/>
          <p className="card_title">{`${student.firstName} ${student.lastName}`}</p>
          <p className="card_subtitle">{student.area}</p>
          <button onClick={() => setEdit(!edit)} className="cardbtn">Modifier</button>
          <button onClick={() => props.deleteStudent(props.index)} className="cardbtn deletebtn">Supprimer</button>
        </div>
      }
      {edit ? 
        <div className="card_body">
          <input type="text" name="phone" value={student.phone} onChange={handleChange}/>
          <input type="text" name="email" value={student.email} onChange={handleChange}/>
          <div>
            <button onClick={cancelEdit} className="editbtn cancel">Annuler</button>
            <button onClick={editStudent} className="editbtn">Valider</button>
          </div>
        </div>
      :
        <div className="card_body">
          <a href={`tel:${student.phone}`}><FontAwesomeIcon className="mr-10" icon={faPhoneAlt} />{student.phone}</a>
          <a href={`mailto:${student.email}`}><FontAwesomeIcon className="mr-10" icon={faEnvelope} />{student.email}</a>
        </div>
      }
    </div>
  );
}

export default StudentCard;

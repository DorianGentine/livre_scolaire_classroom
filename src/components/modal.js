import React, {useState} from 'react';
import '../stylesheets/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'

function Modal({ showModal }) {
  const [student, setStudent] = useState({
    firstName: "",
    lastName: "",
    area: "",
    phone: "",
    email: "",
    avatar: "",
  })
  const handleChange = event => {
    const key = event.target.name
    const newStudent = {...student}
    newStudent[key] = event.target.value
    setStudent(newStudent)
  }

  return (
    <div className="modal-container">
      <div className="modal show">
        <div className="modal-header">
          <h2>Ajouter un élève</h2>
          <FontAwesomeIcon onClick={showModal} icon={faTimesCircle} />
        </div>
        <div className="modal-body">
          <label for="avatar">Avatar</label>
          <input type="url" placeholder="Url de l'avatar" name="avatar" id="avatar" value={student.avatar} onChange={handleChange} />
          <label for="firstName">Prénom</label>
          <input type="text" placeholder="Prénom" name="firstName" id="firstName" value={student.firstName} onChange={handleChange} />
          <label for="lastName">Nom</label>
          <input type="text" placeholder="Nom" name="lastName" id="lastName" value={student.lastName} onChange={handleChange} />
          <label for="area">Matière</label>
          <input type="text" placeholder="Matière" name="area" id="area" value={student.area} onChange={handleChange} />
          <label for="phone">Téléphone</label>
          <input type="phone" placeholder="Téléphone" name="phone" id="phone" value={student.phone} onChange={handleChange} />
          <label for="email">Email</label>
          <input type="email" placeholder="Email" name="email" id="email" value={student.email} onChange={handleChange} />
          <button onClick={() => showModal(student)} className="modalbtn">Ajouter un élève</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;

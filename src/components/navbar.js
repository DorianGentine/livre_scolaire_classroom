import React from 'react';
import '../stylesheets/navbar.css';

function Navbar({showModal}) {
  return (
    <div className="navbar">
      <p>My Classroom Manager</p>
      <button onClick={showModal} className="addbtn">Ajouter un élève</button>
    </div>
  );
}

export default Navbar;

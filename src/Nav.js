// Navv.js
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import ConsumerForm from "./ConsumerForm.js";
import PetForm from "./PetForm.js";
function Navv() {
  return (
    <div className="navbar">
      <Link style={{ fontFamily: "Agbalumo" }} to="/" className="navbar-brand mx-3">
      <a><a className="h">PET </a>Lovers</a>
      </Link>
      <div className="nav">
        <Link to="/create-Pet" className="nav-link">
          Create Consumer{"  "}
        </Link>
        <Link to="/Pet-list" className="nav-link">
          Consumer List 
        </Link>
      </div>
    </div>
  );
}
export default Navv;

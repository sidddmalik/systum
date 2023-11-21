// PetForm.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Routes, Route ,Link} from "react-router-dom";
import "./styles.css";
import Navv from "./Nav.js";
function PetForm(props) {
  const [Name, setName] = useState(props.NameValue);
  const [Breed, setBreed] = useState(props.BreedValue);
  const [Vaccinated, setVaccinated] = useState(props.VaccinatedValue);
  const [Owner, setOwner] = useState(props.OwnerValue);
  const [Trained, setTrained] = useState(props.TrainedValue);

  useEffect(() => {
    setName(props.NameValue);
    setBreed(props.BreedValue);
    setVaccinated(props.VaccinatedValue);
    setOwner(props.OwnerValue);
    setTrained(props.TrainedValue);
  }, [props.NameValue, props.BreedValue, props.VaccinatedValue, props.OwnerValue, props.TrainedValue]);

  const arr = [Name, Breed, Vaccinated, Owner, Trained];

  const handleClick = () => {
    props.getState(arr);
  }

  return (
    <div className="full-page">
    <Navv/>
    <div className="form-container">
      <input
        defaultValue={props.NameValue}
        onChange={(event) => setName(event.target.value)}
        className="form-control"
        placeholder="Enter your Pet-Name"
      />
      <input
        defaultValue={props.BreedValue}
        onChange={(event) => setBreed(event.target.value)}
        className="form-control"
        placeholder="Enter your Pet-Breed"
      />
      <input
        defaultValue={props.VaccinatedValue}
        onChange={(event) => setVaccinated(event.target.value)}
        className="form-control"
        placeholder="Is your Pet-Vaccinated"
      />
      <input
        defaultValue={props.OwnerValue}
        onChange={(event) => setOwner(event.target.value)}
        className="form-control"
        placeholder="Enter Owner-Name"
      />
      <input
        defaultValue={props.TrainedValue}
        onChange={(event) => setTrained(event.target.value)}
        className="form-control"
        placeholder="Is your Pet-Trained"
      />
      <br/>
      <button onClick={handleClick} className="btn btn-success" type="submit">
        {props.children} Submit
      </button>
    </div>
  </div>
  );
}

export default PetForm;

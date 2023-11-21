import { useEffect, useState } from "react";
import { BrowserRouter as Routes, Route ,Link} from "react-router-dom";
import "./styles.css";
import Navv from "./Nav.js";
function ConsumerForm(props)
{
    const [Name,setName] = useState(props.NameValue);
    const [ID,setID] = useState(props.IDValue);
    const [PhoneNo ,setPhoneNo] = useState(props.PhoneNoValue);
    const [EmailID,setEmailID] = useState(props.EmailIDValue);
    const [PetName,setPetName] = useState(props.PetNameValue);
    const [Breed,setBreed] = useState(props.BreedValue);
    const [Services,setServices] = useState(props.ServicesValue);

    useEffect(()=>{
        setName(props.NameValue);
        setID(props.IDValue);
        setPhoneNo(props.PhoneNoValue);
        setEmailID(props.EmailIDValue);
        setPetName(props.PetNameValue);
        setBreed(props.BreedValue);
        setServices(props.ServicesValue);
    },[props.NameValue,props.IDValue,props.PhoneNoValue,props.EmailIDValue,props.PetNameValue,props.BreedValue,props.ServicesValue]);
   
    const arr = [Name,ID,PhoneNo,EmailID,PetName,Breed,Services];
   
    const handleClick = () =>{
        props.getState(arr);
    }
    return (
      <>
      
      <div className="full-page">
      <Navv/>
        <div className="form-container">
          <input
            defaultValue={props.NameValue}
            onChange={(event) => setName(event.target.value)}
            className="form-control"
            placeholder="Enter your Name"
          />
          <input
            defaultValue={props.IDValue}
            onChange={(event) => setID(event.target.value)}
            className="form-control"
            placeholder="Enter your ID"
          />
          <input
            defaultValue={props.PhoneNoValue}
            onChange={(event) => setPhoneNo(event.target.value)}
            className="form-control"
            placeholder="Enter your PhoneNo."
          />
          <input
            defaultValue={props.EmailIDValue}
            onChange={(event) => setEmailID(event.target.value)}
            className="form-control"
            placeholder="Enter your Email-ID"
          />
          <input
            defaultValue={props.PetNameValue}
            onChange={(event) => setPetName(event.target.value)}
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
            defaultValue={props.ServicesValue}
            onChange={(event) => setServices(event.target.value)}
            className="form-control"
            placeholder="Which Services you want?"
          />
          <button onClick={handleClick} className="btn btn-success" type="submit">
            {props.children} Submit 
          </button>
        </div>
      </div>
      </>
    );
}

export default ConsumerForm;

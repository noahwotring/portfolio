import React,{useState, useEffect, useContext} from 'react';
import './repchoose.css';
import {UserContext} from "../providers/UserProvider.jsx";
import {updateUserRep} from '../firebase.js';
import rep_grimace from "../img/rep_grimace.jpg";
import rep_slug from "../img/rep_slug.png";
import rep_tobs from "../img/rep_tobs.png";
import rep_joe from "../img/rep_joe.png";
const RepChoose = () => {
  const user = useContext(UserContext);
  const [rep,repChange] = useState(null);

  const handleRepChange = (e) => {

  }
  const handleSelect = (e) => {
    let nextRep = e.target.id;
    let currentRep = rep !== null ? "#" + rep : "#" + nextRep;

    document.querySelector(currentRep).classList.remove('shadow-lg');
    repChange(e.target.id);
    e.target.classList.add('shadow-lg')
  }
  const changeRep = () => {
    console.log(user.uid)
    updateUserRep(user.uid,rep)
  }


  return(

      <div className="mt-8 my-auto border text-center absolute container mx-32 z-50 block bg-white border shadow-lg  opacity-150 border-black  w-10/12 ">
      <h1> Pick Your Side </h1>
      <div className="page">
      <div className="grid_container flexbox justify-evenly">
        <div className="grid_image_container  inline-block px-8 " onClick={(event) => handleSelect(event)}><div  id="rep_grimace" className="image_holder  hover:shadow-lg" style={{background:`url('${rep_grimace}') no-repeat center center`, backgroundSize: "cover", height: "200px", width: "200px", overflow: "hidden"}}></div></div>
        <div className="grid_image_container  inline-block  px-8" onClick={(event) => handleSelect(event)}><div  id="rep_slug" className="image_holder  hover:shadow-lg "  style={{background:`url('${rep_slug}') no-repeat center center`, backgroundSize: "cover", height: "200px", width: "200px", overflow: "hidden"}}></div></div>
        <div  className="grid_image_container inline-block  px-8" onClick={(event) => handleSelect(event)}><div id="rep_tobs" className="image_holder bg-white hover:shadow-lg " style={{background:`url('${rep_tobs}') no-repeat center center`, backgroundSize: "cover", height: "200px", width: "200px",overflow: "hidden"}}></div></div>
        <div className="grid_image_container inline-block   px-8" onClick={(event) => handleSelect(event)}><div   id="rep_joe" className="image_holder bg-white hover:shadow-lg " style={{background:`url('${rep_joe}') no-repeat center center`, backgroundSize: "contain", height: "200px", width: "200px",overflow: "hidden"}}></div></div>
        <button onClick={() => changeRep()}> submit </button>
      </div>
      </div>


      </div>



  )

}
export default RepChoose;

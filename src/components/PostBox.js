import React,{useState,useContext,useEffect} from 'react';
import {generateNewsPosts,firestore} from  '../firebase.js';
import '../pages/home.css';
import {UserContext} from "../providers/UserProvider";
import grimace from "../img/rep_grimace.jpg"


const PostBox = () => {


return(

  <div className="grid_container">
    <div className="grid_image_container imgOne"> img </div>
    <div className="grid_image_container imgTwo"> 2</div>
    <div className="grid_image_container img">3 </div>
    <div className="grid_image_container img4"> 4</div>

  </div>
)



}

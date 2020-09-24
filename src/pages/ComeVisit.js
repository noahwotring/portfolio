import React, {useState,useEffect} from 'react';
import viewbali from "../img/viewbali.jpg";
import viewhawaii from "../img/viewhawaii.jpg";
import viewhotel from "../img/viewhotel.jpg";
import viewmountain from "../img/viewmountain.jpg";
import viewsunset from "../img/viewsunset.jpg";
import "./css/comevisit.css";

const ComeVisit = () => {
  const [openActive,toggleOpenActive] = useState(false);
  const panels = document.querySelectorAll(".panel");

  const openActiveHandler = (e) => {
    if(e.propertyName.includes("flex")){
      console.log(e.currentTarget + e.propertyName);
      e.target.classList.toggle('openActive')
    }
  }
  const onClickOpenHandler = (e) => {
    e.target.classList.toggle("open");
  }




  return (
    <div className="container main relative panels">
      <div className={`panel panel1`} style={{
        background: `url('${viewmountain}') no-repeat center center / cover`
      }}
      onClick={onClickOpenHandler}
      onTransitionEnd={openActiveHandler}
      >
      <p>Experience</p>
      </div>
      <div className={`panel panel2`} style={{
        background: `url('${viewhawaii}') no-repeat center center / cover`
      }}
      onClick={onClickOpenHandler}
      onTransitionEnd={openActiveHandler}

      >
      <p> Life </p>

      </div>

      <div className={`panel panel3`} style={{
        background: `url('${viewbali}') no-repeat center center / cover`
        }}
        onClick={onClickOpenHandler}
        onTransitionEnd={openActiveHandler}
      >
        <p>Beyond</p>
      </div>
      <div className={`panel panel4 `} style={{
        background: `url('${viewhotel}') no-repeat center center / cover`
        }}
        onClick={onClickOpenHandler}
        onTransitionEnd={openActiveHandler}
      >
        <p>Your</p>
      </div>
      <div className={`panel panel5 `}style={{
        background: `url('${viewsunset}') no-repeat center center / cover`
        }}
        onClick={onClickOpenHandler}
        onTransitionEnd={openActiveHandler}
        >
        <p>Front-Door</p>
      </div>


    </div>

  )

}
export default ComeVisit;

import React, {useState} from 'react';
import simonsings from "../img/simonsings.png";
import zombiemath from "../img/zombiemath.png";
import experience from "../img/experience.png";
import color from "../img/colorplay.png";
import gossip from "../img/gossip.png";
import resume from "../img/resume.png";
import {Link} from "react-router-dom";
import "./css/home.css";


const Home = () => {

  const examples = [
    {
      name:"Resume",
      pic: resume,
      link: "./Resume"
    },
    {
      name: "Come Visit",
      pic: experience,
      link: "./ComeVisit"
    },
    {
      name: "Gossip",
      pic: gossip,
      link: "./News"
    },
    {
      name: "ColorPlay",
      pic: color,
      link: "./ColorPlay"
    },
    {
      name: "Simon Sings",
      pic: simonsings,
      link: "./SimonSings"
    },
    {
      name: "ZombieMath",
      pic: zombiemath,
      link: "./ZombieMath"
    }

  ];
  const maxI = examples.length-1;

  const [showing,rotate] = useState({
    previous: maxI,
    current: 0,
    next: 1
  })



  //handles rotate of example array
  const rotateHandler = (e) =>{
    if(e.currentTarget.id === "counter"){
      console.log("counter")

      rotate({
        previous: rotateCounter(showing.previous),
        current: rotateCounter(showing.current),
        next: rotateCounter(showing.next)
      })
    } else if (e.currentTarget.id === "clockwise"){
      console.log("clock")

      rotate({
        previous: rotateClockwise(showing.previous),
        current: rotateClockwise(showing.current),
        next: rotateClockwise(showing.next)
      })
    }
  }
  const rotateClockwise = (num) => {   return num === maxI ? 0 : num+1 }
  const rotateCounter = (num) => { return num === 0 ? maxI : num-1 }







  return(
   <div className=" relative container text-center mx-auto  here " >
    <h1 className="text-center text-5xl mt-10 font-semibold  homeH1 "> Not Another Portfolio! </h1>
    <p className="ml-48 block"> A Portfolio By Noah Kumar Wotring </p>

      <div className="portfolio_bar  ">

        <div className="side left  link_container"    id="clockwise" onClick={rotateHandler} >
          <h3> {examples[showing.previous].name} </h3>

          <div
            style={{
              background:
              `url('${examples[showing.previous].pic}') no-repeat center center / cover`,
              height: "100%",
              width: "100%"
            }}
            id="clockwise"
            className="img hover:opacity-50 hover:cursor-pointer"
            onClick={rotateHandler}
          />
          <i className="far fa-arrow-alt-circle-left fa-6x "></i>
        </div>

        <div className='center  link_container'>
          <h1 className='hover:cursor-pointer hover:color-blue-200'> {examples[showing.current].name} </h1>
          <Link to={examples[showing.current].link} >
            <div
              style={{
                background:
                  `url('${examples[showing.current].pic}') no-repeat center center / cover`,
                height: "100%",
                width: "100%"
              }}
              className="img hover:opacity-50 hover:cursor-pointer "
            />
          </Link>
        </div>

        <div className="side right  link_container"   id="counter" onClick={rotateHandler}>
          <h3> {examples[showing.next].name} </h3>
          <div
            style={{
              background:
                `url('${examples[showing.next].pic}') no-repeat center center / cover`,
              height: "100%",
              width: "100%"
            }}
            className="img hover:opacity-50 hover:cursor-pointer "
          />
          <i className="far fa-arrow-alt-circle-right fa-6x hover:hidden "></i>
        </div>

      </div>

    </div>
)


}
export default Home;

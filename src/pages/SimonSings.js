import React, {useState,useEffect} from 'react';
import './simonsings.css';
import c4 from "../audio/c4.wav";
import d4 from "../audio/d4.wav";
import e4 from "../audio/e4.wav";
import f4 from "../audio/f4.wav";
import g4 from "../audio/g4.wav";
import a4 from "../audio/a4.wav";
import b4 from "../audio/b4.wav";
import c5 from "../audio/c5.wav";


const soundBox = () => {


  return <div> </div>
}

const SimonSings = () => {
  const [score,changeScore] = useState(0);

  const [gamePlaying,toggleGame] = useState(false);
  const [progression,addToProgression] = [];

  const soundObj = {
    1: c4,
    2: d4,
    3: e4,
    4: f4,
    5: g4,
    6: a4,
    7: b4,
    8: c5

  }
  const playSound = (key) => {
    console.log(key);
    let audio = new Audio(key);

    audio.play();
  }
  const soundBoxPressHandler = (e) => {
    playSound(e.target.id);
  }

  const hobbitTheme = [1,2,3,5,3,2,1];
  const getNext = async (i) => { return hobbitTheme[i]  }
  useEffect(() => {
    for(var i = 0; i < hobbitTheme.length; i++){
      getNext(i).then((value) => playSound(key));
    }

     return "next"



  },[] )

  const thisONe = <div className="grid grid-cols-3 gap-1">
           <div className="soundBox soundBox1"> 1</div>
           <div> 2</div>
           <div> 3</div>
           <div> 4</div>
           <div> 5</div>
           <div> 6</div>
           <div> 7</div>
           <div> 8</div>
           <div> 9</div>







         </div>

  return (
    <div className="container relative mx-auto">
      <div className="text-center startContainer">
        <h1 className="inline"> Simon Sings </h1>
        <button className="inline bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => toggleGame(!gamePlaying)}> {gamePlaying? "End Game" : "Start Game"} </button>
      </div>
      <div className="gridContainer">
        <div className="grid grid-cols-3 gap-0">
          <div id="1" className="soundBox1 soundBox" onClick={(e) => soundBoxPressHandler(e)}/>
          <div id="2" className="soundBox2 soundBox"  onClick={(e) => soundBoxPressHandler(e)}/>
          <div id="3" className="soundBox3 soundBox"  onClick={(e) => soundBoxPressHandler(e)}/>
          <div id="4" className="soundBox4 soundBox" onClick={(e) => soundBoxPressHandler(e)} />
          <div id="5" className="soundBox5 soundBox" onClick={(e) => soundBoxPressHandler(e)}/>
          <div id="6" className="soundBox6 soundBox" onClick={(e) => soundBoxPressHandler(e)}/>
          <div  id="7" className="soundBox7 soundBox"onClick={(e) => soundBoxPressHandler(e)} />
          <div id="8" className="soundBox8 soundBox"onClick={(e) => soundBoxPressHandler(e)} />
          <div id="9" className="soundBox9 soundBox" onClick={(e) => soundBoxPressHandler(e)}/>
        </div>
    </div>









      </div>)
}

export default SimonSings;

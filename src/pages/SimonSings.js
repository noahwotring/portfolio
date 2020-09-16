import React, {useState,useEffect,setState} from 'react';
import './simonsings.css';
import c4 from "../audio/c4.wav";
import d4 from "../audio/d4.wav";
import e4 from "../audio/e4.wav";
import f4 from "../audio/f4.wav";
import g4 from "../audio/g4.wav";
import a4 from "../audio/a4.wav";
import b4 from "../audio/b4.wav";
import c5 from "../audio/c5.wav";
import fart from "../audio/fart.wav";


const soundBox = () => {


  return <div> </div>
}

const SimonSings = () => {
  const [score,changeScore] = useState(0);
  const [playSongState,togglePlaySongState] = useState(false);
  useEffect(() => {
    if(gamePlaying){

        progressAddHandler();

        runProgression();
        toggleResponseState(true);
    }

  },[playSongState])
  const [sound,onSound] = useState(true);
  const [guesses,addGuess] = useState([]);

  const [round,nextRound] = useState(0);


  const [responseState,toggleResponseState] = useState(false);
useEffect(() => {
  if(responseState){
    console.log(progression)

    }

},[responseState])

  const [gamePlaying,toggleGame] = useState(false);
  useEffect(()=>{
    if(gamePlaying){

      togglePlaySongState(!playSongState)
    } else if(responseState){
      addGuess([]);
    }
  },[gamePlaying])

  const [answerState,toggleAnswerState] = useState(false);

  const [progression,addToProgression] = useState([]);
  const [playSong,togglePlaySong] = useState(false);

  const [currentNote,nextNote] = useState(0);

  const soundObj = {
    1: c4,
    2: d4,
    3: e4,
    4: f4,
    5: g4,
    6: a4,
    7: b4,
    8: c5,
    9: c5
  }
  const runProgression = () => {
    let i = 0;
    const id = setInterval(() => {
      panelFlash(progression[i]);
      playSound(progression[i]);
      i++
      if(i === progression.length) clearInterval(id)
    },1500)
    setTimeout(()=>toggleResponseState(!responseState),4000)
  }

  const soundBoop = (key) => {
    setTimeout(() => {
      playSound(key);
    },500);
  }


  const resetGame = () => {
    addToProgression([]);
    nextRound(0);
    toggleGame(!gamePlaying)
  }



  const generateProgression = () => {
    const generatedNum = Math.floor(Math.random() * 8) + 1;
    return generatedNum
  }
  const progressAddHandler = () => {
    var num = generateProgression();
    var cur = progression;
    cur.push(num);
    addToProgression(cur);
  }
  //effect of events on the soundboxes
  const panelFlash = (key) => {
    var panel = document.getElementById(key);

    panel.classList.add("soundBoxSelected");
    document.querySelector(`.soundBox${key}`).addEventListener('transitionend', removeTransition);
  }
  const removeTransition = (e) => {
    if(e.propertyName === 'transform'){
      e.target.classList.remove('soundBoxSelected')

    }
  }
  const soundBoxPressHandler = (e) => {

    if(responseState){

      var newguess = e.target.id;
      var oldguesses = guesses;
      oldguesses.push(newguess);
      addGuess(oldguesses)

        if(guesses[guesses.length-1] != progression[guesses.length-1]){
          var audio = new Audio(fart);
          alert("Failure");
          audio.play();
          toggleResponseState(!responseState);
          toggleGame(!gamePlaying);
          resetGame();
        }
        else {
        panelFlash(e.target.id)
        playSound(e.target.id);

        if(guesses.length === progression.length){
          var add = round + 1;
          addGuess([]);
          nextRound(add);
          togglePlaySongState(!playSongState)
          toggleResponseState(!responseState);
        }
        }
    }
  }
//playing the sound
  const playSound = (key) => {
    let audio = new Audio(soundObj[key]);
    var playPromise = audio.play();
    if(playPromise !== undefined){
      playPromise.then(function() {
      }).catch(function(error){
        console.log(error)
      });
    }
  }




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
      <div className="text-center block my-8 mx-auto contents-center border w-1/2 startContainer">
        <h1 className="  "> Simon Sings </h1>
        <button className={`click_button border float-right hover:bg-red-700 text-white font-bold h-32 w-32  rounded-full  shadow-2xl ${gamePlaying? "bg-red-800" : "  bg-green-800 "}`} onClick={() => toggleGame(!gamePlaying)}> {gamePlaying? "End Game" : "Start Game"} </button>
        <p className="mt-0 ml-1/2"> Round: {round}</p>

      </div>


      <div className="gridContainer block">
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

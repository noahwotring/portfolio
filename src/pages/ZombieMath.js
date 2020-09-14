import React, {useState,useContext,useEffect} from 'react';
import './zombie_math.css';
import {UserContext} from "../providers/UserProvider";
import {generateScore} from '../firebase.js';

const ZombieMath = (props) => {
  const [gameIsRunning, setRunGame] = useState(false);
  const [timeLeft,setTime] = useState(0);
  const [timerIsRunning,setTimer] = useState(false);
  const [score,changeScore] = useState(0);
  const [currentAnswer,changeAnswer] = useState("");
  const [hp,setHealth] = useState(5);
  const [numberSet, genNumbers] = useState({
    num1: null,
    num2: null,
    answer: null
  });
  const user = useContext(UserContext);
  const [highScore,updateHighScore] = useState(0);
  const [allScores,updateAllScores] = useState([]);
  const updateGenerateScores = () => {
    generateScore().then(result => updateAllScores(result));
    updateHighScore(user? allScores.filter(score => score.uid == user.uid).sort((a,b)=> a.score - b.score)[0] : allScores.sort((a,b) => a.score - b.score)[0]);
    console.log(allScores);
  }
  useEffect(updateGenerateScores,[score])


  //

  //effect that checks game state, starts timer toggle on
  // game is turned on
  const activateGame = () => {
    generateNumbers()
    setHealth(5);
    setTime(10);
    setTimer(true)
  }
    useEffect(() => {
      if(gameIsRunning){
      activateGame()
      }
    },[gameIsRunning])
  //countdown timer. after render/click/toggle game/toggle timer, this runs
  useEffect(() => {
    let interval = null;
    if(timerIsRunning){
      interval = setInterval(() => {
        setTime(timeLeft - 1)
      }, 1000)
    }
    if (timerIsRunning && timeLeft === 0 && hp >= 1){
      setHealth(hp-1);
      generateNumbers();
      setTime(10);
    }
    if(timeLeft < 1 && hp < 1){
      clearInterval(interval);
      setRunGame(false)
    }
    if(hp === 0){
        setRunGame(false);
      if(user){
        // send data + user

      } else {
        // send data
      }
      setRunGame(false);

    }
  },[timerIsRunning,timeLeft]);

//number set generator
  const generateNumbers = () => {
        let num1 = Math.floor(Math.random() * 100);
        let num2 = Math.floor(Math.random() * 100);
        let answer = num1 + num2;
        genNumbers({
          num1: num1,
          num2: num2,
          answer: answer
        })
  }

  const toggleGame = () => {
      if(gameIsRunning === false){
        setRunGame(!gameIsRunning)
      } else {
        setRunGame(!gameIsRunning)
      }
    }

  useEffect(() => {
    if(gameIsRunning){
      let theWidth = hp * 20;
      document.querySelector('.health').style.width = `${theWidth}%`;
    }

  },[hp])


  const onChangeHandler = (event) => {
    const {name,value} = event.currentTarget;
    if(name === "currentAnswer"){
      changeAnswer(value)
    }
  }

  const handleAnswerSubmit = () => {
    if(currentAnswer === numberSet.answer.toString()){
      changeScore(score + 1);
      setTime(10);
      generateNumbers();
      changeAnswer("");
    } else {
      setHealth(hp-1);
      setTime(10);
      document.querySelector('.problemBlock').classList.add('hit');
      document.querySelector('.problemBlock').addEventListener('transitionend', removeTransition);
      generateNumbers();
      changeAnswer("");
    }
  }

  const handleKeyDown = (e) => {
    console.log(e.key)
    if (e.key === "Enter"){
      handleAnswerSubmit();
    }
  }
  const removeTransition = (e) => {
     e.target.classList.remove('hit')
  }



  //the containers
  const numberContainer =
    <div className="number container mx-0 problemBlock">
    <span className="healthbar health">{hp * 20}% </span>
      <span className="block text-6xl"> <span className="num1 numblock inline-block text-6xl">{numberSet.num1} </span> + <span className="num2 numblock text-6xl">{numberSet.num2} =
      <input

        autoFocus
        onKeyDown={e=>{handleKeyDown(e)}}
        autocomplete="off"
        type="integer"
        className="w-1/12 text-black  "
        name="currentAnswer"
        value={currentAnswer}
        placeholder=""
        id="answerAttempt"
        onChange = {(event)=> onChangeHandler(event)}
        /> </span>
      </span>
      </div>
      //<div className="bg-gray-400 w-1/2 h-32 container block my-auto mx-auto border border-red-200 relative"> </div>

      const startButtonContainer =
      <button className=" absolute bottom-0 right-0 border border-blue-500" onClick={toggleGame}>Start Game </button>




  return (
      <div className="zombie_math_background text-center inline">
        <h1> {timeLeft} {hp} </h1>

       <h1> Hello {user? `${user.displayName}` : "Joe"}, your score is <span className="bg-red-200 border-blue-300 border">{score} </span> and your highest score is {highScore}</h1>
       <div className="problemBlock">
        {gameIsRunning? numberContainer : startButtonContainer}

        <button className="  border border-blue-500" onClick={gameIsRunning? () => handleAnswerSubmit() : toggleGame }>Click Here </button>
        </div>

       </div>



  )










}

export default ZombieMath;

import React, { useState, useEffect } from 'react';
import './css/sundial.css';

const SunDial = () => {

    const [time,setTime ] = useState({
      h: new Date().getHours(),
      m: new Date().getMinutes(),
      s: new Date().getSeconds()

    })
    const [degrees,changeDegrees] = useState({
      a: 90,
      b: 180,
      c: 270,
      d: 0
    });
  useEffect(() => {

    let d = new Date();
    let h = d.getHours();
    let m = d.getMinutes();
    let s= d.getSeconds();
    console.log(`${h}:${m}:${s}`);
    let ind = setTimeout(() => {
      setTime(returnTimeObjectHandler());

      if(time.s > 45 === false) {
        document.querySelector('.sundial_pane.a').style.transform = `rotate(${degrees.a + (time.s * 6)}deg)`

      }


      if(time.s >= 15  && time.s < 60){
        document.querySelector('.sundial_pane.b').style.transform = `rotate(${degrees.a + (time.s * 6)}deg)`
      } else {
        document.querySelector('.sundial_pane.b').style.transform = `rotate(${180}deg)`

      }

      if(time.s >= 30 && time.s < 60){
        document.querySelector('.sundial_pane.c').style.transform = `rotate(${degrees.a + (time.s*6)}deg)`
      } else {
        document.querySelector('.sundial_pane.c').style.transform = `rotate(${270}deg)`
      }


     if (time.s >=45  && time.s < 60){
        document.querySelector('.sundial_pane.d').style.transform = `rotate(${degrees.a + (time.s*6)}deg)`
      } else {
        document.querySelector('.sundial_pane.d').style.transform = `rotate(${0}deg)`

      }


    },1000)



  }, [time])


  const returnTimeObjectHandler = () => {
    let d = new Date();
    return {
      h: d.getHours(),
      m: d.getMinutes(),
      s: d.getSeconds()
    }
  }



return (

  <div className="sundial_body" >
  <div className={`sundial_pane a  `} />
    <div className={`sundial_pane   b `} />
    <div className={`sundial_pane  c `} />
    <div className={`sundial_pane   d `} />
    <div className={`sundial_pane blackout`} />

  </div>



)



}
export default SunDial;

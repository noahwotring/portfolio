import React, {useState,useEffect} from 'react';

import './css/colorplay.css'
const ColorPlay = () => {
  const inputs = document.querySelectorAll('.controls input');
  const [b,changeB] = useState(0);
  const [r,changeR] = useState(0);
  const [g,changeG] = useState(0);
  const [grade,changeGrade] = useState(0);
  const handleUpdate = (e) => {
    console.log(e.currentTarget.value);
    if(e.currentTarget.id === "colorplay-r"){
      changeR(e.currentTarget.value)
      document.documentElement.style.setProperty(`--${e.currentTarget.id}`,r)

    } else if(e.currentTarget.id === "colorplay-g"){
      changeG(e.currentTarget.value)
      document.documentElement.style.setProperty(`--${e.currentTarget.id}`,g)

    } else if(e.currentTarget.id === "colorplay-b"){
      changeB(e.currentTarget.value)
      document.documentElement.style.setProperty(`--${e.currentTarget.id}`,b)
    } else if(e.currentTarget.id === "colorplay-gradient"){
      changeGrade(e.currentTarget.value)
      document.documentElement.style.setProperty(`--${e.currentTarget.id}`,grade + "%");
      console.log(grade)
    }
    document.querySelector('.color-container').style.setProperty('background-color',`rgb(${r},${g},${b})`);
    document.querySelector('.colorplay').style.setProperty('color',`rgb(${r},${g},${b})`);



  }
  useEffect(() => {
    console.log(document.querySelectorAll('.control input'))
  },[])
return (
  <div className="colorplaybase relative border-box">
  <div className="gradientBox">
  <h1 className=" text-center text-5xl font-semibold block titleGradient colorplay"> ColorPlay </h1>
  </div>

  <div className="container   flexbox flex mt-8 ">
    <div className="flex-col ml-48  ">
      <p className="text-lg font-bold  ml-8 colorworld">Color the World (or at least your screen!)</p>
      <div className="color-container" />
    </div>

    <div className="  controls ">

      <div className="flex1 control">
        <label for="red" className='r'> R </label>
        <input type="range" id="colorplay-r" min="0" max="255"  defaultValue={r} onChange={handleUpdate}  />
      </div>

      <div className="flex2 control">
        <label for="green" className='g'> G </label>
        <input type="range" id="colorplay-g" min="0" max="255" defaultValue={g} onChange={handleUpdate}   />
      </div>

      <div className="flex3 control">
        <label for="blue" className='b'> B </label>
        <input type="range" id="colorplay-b"  min="0" max="255" defaultValue={b} onChange={handleUpdate}  />
      </div>

      <div className="flex4 control">
        <label for="background"> Background </label>
        <input type="range" id="colorplay-gradient"  min="0" max="100" defaultValue={0}  onChange={handleUpdate} />
      </div>

      </div>
    </div>

  </div>
)

}

export default ColorPlay;

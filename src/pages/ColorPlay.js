import React, {useState} from 'react';
import './colorplay.css'
const ColorPlay = () => {
  const inputs = document.querySelectorAll('.controls input');
  const [b,changeB] = useState(0);
  const [r,changeR] = useState(0);
  const [g,changeG] = useState(0);
  const handleUpdate = (e) => {
    console.log(e.currentTarget.value)
    document.documentElement.style.setProperty(`--${e.currentTarget.id}`,e.currentTarget.value);
  }
return (
  <div className="colorplaybase relative border-box">
  <div className="gradientBox">
  <h1 className=" text-center text-5xl font-semibold block titleGradient"> ColorPlay </h1>
  </div>

  <div className="container  flexbox flex ">
    <div className="flex-col ml-16 text-center ">
      <p className="text-xl font-bold ml-48"> Try It Out For Yourself!</p>
      <div className="color-container  " />
    </div>

    <div className="  controls ">

      <div className="flex1 control">
        <label for="red"> R </label>
        <input type="range" id="colorplay-r" min="0" max="255" onChange={handleUpdate} onMouseMove={handleUpdate}  />
      </div>

      <div className="flex2 control">
        <label for="green"> G </label>
        <input type="range" id="colorplay-g" min="0" max="255" onChange={handleUpdate}  />
      </div>

      <div className="flex3 control">
        <label for="blue"> B </label>
        <input type="range" id="colorplay-b"  min="0" max="255" onChange={handleUpdate} />
      </div>

      </div>
    </div>

  </div>
)

}

export default ColorPlay;

import React, {useState,useEffect} from 'react';
import './newspost.css';
const NewsPost = ({title,body,owner_id,owner,date_created,id,postNum}) => {



  const length = body.length;
  useEffect(() => {

  },[])

  const [expanded, expand] = useState(false);


  return (
    <div style={{
      textAlign: 'center',
      /*
      background: `${postNum%2===0 ? "linear-gradient(#e66465, #ffffff)" : "linear-gradient(#ffffff,#EFEFEF)"}`,
      boxShadow: 'inset 0 0 0 5px rgba(255,255,255,0.1)',

      transform: `${postNum%2===0 ? "perspective(400px) rotateX(-3deg) translateY(3px)" : " perspective(400px) rotateX(3deg) translateY(1px) scale(1.001)"}` */

    }} className={`newbox        ${ length > 327 && !expanded? "shrunk" : " "}`}>


    <div className={`newpost  my-2 mb-4 hover:border text-center mx-auto   relative rounded-md    ${expanded? "max-h-full " : "overflow-hidden "} `}  onClick={(event) => expand(!expanded)}>
      <div className="bg-black text-white">
      <div className="inline-block left-0  absolute">
        <div className="uid inline "><span className="float-left mt-2 text-xs"> Post By: {owner}</span> </div>
      </div>
      <div className="inline-block  absolute float-right top-0 right-0 mr-0">
        <span className=" text-xs"> {date_created} </span>
      </div>
      </div>


      <div className="inline-block ">
        <h2 className="text-center mt-4 mb-2 text-3xl"> {title}</h2>
        <p className="text-center mx-8 mb-2 tex  "> {body} </p>
      </div>



    </div>


    </div>



  )



}
export default NewsPost;

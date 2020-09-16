import React, {useState,useEffect} from 'react';
import './newspost.css';
const NewsPost = ({title,body,owner_id,owner,date_created,id}) => {




  useEffect(() => {
    console.log(date_created + " " + owner_id)
  },[])

  const [expanded, expand] = useState(false);


  return (
    <div>

    <div className={`inline absolute  ${id%2===0? "right-0" : "left-0"}`}>
    <h5> {owner} -</h5>
    </div>
    <div className={`newpost  mx-4 my-2 mb-4 hover:opacity-75 text-center  bg-gray-700  text-white  relative rounded-md     ${expanded? "max-h-full " : "overflow-hidden"} `}  onClick={(event) => expand(!expanded)}>

      <div className="inline-block left-0  absolute">
        <div className="uid inline "><span className="float-left mt-2 text-xs"> Post By: {owner}</span> </div>
      </div>


      <div className="inline-block ">
        <h2 className="text-center mt-4 mb-2"> {title} {id}</h2>
        <p className="text-center mx-8 mb-2  "> {body} </p>
      </div>

      <div className="inline-block  absolute float-right top-0 right-0 mr-0">
        <span className=" text-xs"> {date_created} </span>
      </div>

    </div>
    </div>



  )



}
export default NewsPost;

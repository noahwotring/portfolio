import React, {useState} from 'react';
import './newspost.css';
const NewsPost = ({title,body,owner_id,owner,date}) => {






  const [expanded, expand] = useState(false);


  return (
    <div className={`newpost  mx-4 my-2 py-2 text-center  hover:bg-white hover:opacity-100 relative     ${expanded? "max-h-full " : "overflow-hidden"} `}  onClick={(event) => expand(!expanded)}>
      <div className="inline-block border left-0  absolute">
        <div className="uid inline "><span className="float-left ml-8">{owner}:{owner_id}</span> </div>
      </div>
      <div className="inline-block border">
        <h3 className="text-center "> {title} </h3>
        <p className="text-center mx-auto  "> {body} </p>
      </div>
      <div className="inline-block border absolute right-0">
        <span className="float-right"> {date} </span>
      </div>
    </div>



  )



}
export default NewsPost;

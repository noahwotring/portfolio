import React, {useContext} from 'react';
import UserContext from '../providers/UserProvider.jsx';
import '../utils/navbar/navbar.css';
import {Link} from "react-router-dom";

const SideBar = () => {
  let user = useContext(UserContext);



  return (<div className="sidebar  w-2/12 absolute   container text-center  inline-block ">
      <div className="sidebar_photo_container items-start w-half text-center mt-10">
        {user?  <div
                  style={{
                      background:
                        `url('${user.photoURL}') no-repeat center center`,
                      backgroundSize: "cover",
                      height: "100px",
                      width: "100px"
                    }}
                  className="border border-blue-300 w-3/4 h-3/4 m-auto "
                />
                :
                <h1> Your Picture Here! </h1>
          }

        {user?
          <h5> Welcome, {user.displayName}  </h5>
          :
          <h5> Welcome, Please <Link to="./SignIn"> <span className="hover:text-blue-200">Sign In </span> </Link> </h5>
        }
      </div>
      <ul>
       <li onClick={()=>{console.log(user.photoURL)}}>Edit Username </li>
       <li>Edit Profile Picture </li>
       <li>Edit Username </li>
       <li>Edit Profile Picture </li>
     </ul>
   </div>)
}

export default SideBar

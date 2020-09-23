import React, {useContext,useState,useEffect} from "react";
import {useParams} from 'react-router-dom';
import {UserContext} from "../providers/UserProvider";
import logo from '../img/logo.png';
import './profilepage.css';
import NewsPost from '../components/NewsPost.js';
import {BrowserRouter, Route, Switch, Link,Redirect, useLocation,history} from 'react-router-dom';

//fuck

import {auth,generateNewsPosts,updateUserProfilePicture} from 'C:\\Users\\Noah Wotring\\Desktop\\Code\\portfolio\\src\\firebase.js';

const ChangePictureWindow = ({user}) => {
  const {uid} = user;
  const [photoURL,changeURL] = useState(user.photoURL);
  const onChangeHandler = (event) => {
    const {name,value} = event.currentTarget;

    changeURL(value)
    console.log(photoURL)
  }
  const updatePicHandler = () => {
    const final = photoURL;
    console.log(final);
    console.log(uid)
    updateUserProfilePicture(uid,final)
  }
  return(

    <div className="flex-box  border changePic text-center mx-0 changePicOn bg-gray-100">
      <h3>Select A New Profile Picture</h3>
      <div
        style={{
          background:
          `url('${photoURL }') no-repeat center center / cover`,
          height: "200px",
          width: "200px"
        }}
        className="border border-black mx-auto"
      />

      <form className="border ">
        <label htmlFor="profilepicturelink inline-block"> Link:{" "} </label>

        <input
          className="mt-1 mb-3 p-1 w-3/4 inline-block"
          type="photoURL"
          name="photoURL"
          value={photoURL}
          placeholder="thispic.jpg"
          id="photoURLinput"
          onChange={(event) => onChangeHandler(event)}
        />
        <button className="inline-block bg-green-400 hover:bg-green-500 py-1  px-1 text-white changeButton" onClick={updatePicHandler}> Submit </button>

      </form>

    </div>
  )


}
const ProfilePage = (props) => {
  let {name} = useParams();
  const user = useContext(UserContext) || {
                                           displayName: "Not Signed In",
                                           password: "n/a",
                                           email: "goodtry",
                                           photoURL: logo
                                              };

  const nonUser = {
  };
  let theuser;
  let {userDisplayName} = useParams();
  const [changeProfilePictureWindow,toggleProfilePicture] = useState(false);


  const {photoURL, displayName, email, password, interests, aboutMe} = user;
  const checkIfUser = () => {
    if(user){
      if(user.displayName === userDisplayName){
        return true
      } else {
        return false
      }
    } return true
  }

  const[posts,checkPosts] = useState([]);
   const checkMyPosts = () => {
     generateNewsPosts().then(result => checkPosts(result.filter(function(x){
      return x.owner_id === user.uid;
     })));
   }

   useEffect(checkMyPosts,[])
  return(
    <div className={`  relative container  profile `}>
    {changeProfilePictureWindow ? <ChangePictureWindow user={user} /> : " "}


    <div className={`container  w-full py-8 border  ${changeProfilePictureWindow? "blurred" : ""} `}>
      <div className="flex flex-row">
        <div className="flex-col  ml-8 bg-white ">
          <div
            style={{
              background:
              `url('${photoURL }') no-repeat center center / cover`,
              height: "250px",
              width: "250px"
            }}
            className="border border-black"
          />

          <p className="ml-4 text-blue-500 font-size-xs hover:text-blue-600 cursor-pointer" onClick={() => (toggleProfilePicture(!changeProfilePictureWindow))}>Change Profile Picture </p>
          <div className="flexbox block  bg-opacity-25 ml-4 mr-12">

            <br />
            <h3 className="block my-0 border-b-2 b-2-0 w-full h-8"> Interests: </h3>
            <ul className="block float-left ">
               {user.interests? user.interests.map((interest) => <li> {interest} </li>) : <h3>Add Your Interests!</h3>} <br />

              </ul>
           </div>
           <div className=" block  bg-opacity-25 ml-4 mr-12">

             <br /><br />             <br /><br />

             <h3 className="block my-0 border-b-2 b-2-0 w-full h-8"> Friends: </h3>
             <ul className="block float-left ">
                {user.interests? user.interests.map((interest) => <li> {interest} </li>) : <h3>Add Friends</h3>} <br />

               </ul>
            </div>


        </div>
        <div className="flex flex-col border w-full ml-32 float-left">
          <h1 className="head"> {user.displayName} </h1>
          <h3> {user.email} </h3>
          <br />
          <div className="about w-3/4">
            <p>
              {user.aboutMe}
            </p>
          </div>
          <br />
          <br />


{/*}
<div className="border border-blue-300 float-right  text-center items-right flex-container flex-col w-3/4">
  <h1> Posts by {user.displayName} </h1>
  {posts.map((post) => <NewsPost title={post.title} body={post.body} date={post.date_created} />  )}
</div> */}
        </div>
      </div>
      <div className="flex flex-row my-24" >
        <div className="flex flex-col ml-8" >
        </div>
        <div className="flex flex-col">
        testing here
        </div>
      </div>
     </div>
    </div>



  )
}

export default ProfilePage;

import React, {useContext,useState,useEffect} from "react";
import {UserContext} from "../providers/UserProvider";
import logo from '../img/logo.png';
import './css/profilepage.css';
import NewsPost from '../components/NewsPost.js';
//fuck

import {auth,generateNewsPosts,updateUserProfilePicture} from 'C:\\Users\\Noah Wotring\\Desktop\\Code\\ReactUserDataPractice\\my-app\\src\\firebase.js';

const ChangePictureWindow = ({user}) => {
  const uid = {user};
  const [photoURL,changeURL] = useState(user.photoURL);
  const onChangeHandler = (event) => {
    const {name,value} = event.currentTarget;

    changeURL(value)
  }
  return(

    <div className="flex-box inline-block">
      <h3>Select A New Profile Picture</h3>
      <form className="flex-box ">
        <label for="profilepicturelink"> Link:{" "} </label>

        <input
          className="mt-1 mb-3 p-1 w-full"
          type="photoURL"
          name="photoURL"
          value={photoURL}
          placeholder="thispic.jpg"
          id="photoURLinput"
          onChange={(event) => onChangeHandler(event)}
        />
        <button onClick={(event) => {updateUserProfilePicture(uid,photoURL)}}> Submit </button>
      </form>
    </div>
  )


}
const ProfilePage = (props) => {
  const user = useContext(UserContext) || {
                                           displayName: "Not Signed In",
                                           password: "n/a",
                                           email: "goodtry",
                                           photoURL: logo
                                              };

  const nonUser = {
  };
  let theuser;
  const [changeProfilePictureWindow,toggleProfilePicture] = useState(false);

  const {photoURL, displayName, email, password} = user;


  const[posts,checkPosts] = useState([]);
   const checkMyPosts = () => {
     generateNewsPosts().then(result => checkPosts(result.filter(function(x){
      return x.owner_id === user.uid;
     })));
   }

   useEffect(checkMyPosts,[])
  return(
    <div className=" inline-block ml-16 absolute text-center relative container border bg-opacity-25 profile">

    {changeProfilePictureWindow? <ChangePictureWindow user={user} /> : <h1  className="text-Gruppo" > User ID: {user.uid}   </h1>}



      <div className="flex border text-center inline-block md:flex-row md:items-start border-blue-400 px-3 py-4">

        <div className="flex-col items-left ">
          <div
            style={{
              background:
              `url('${photoURL}') no-repeat center center`,
              backgroundSize: "cover",
              height: "200px",
              width: "200px"
            }}
            className="border border-blue-300"
          />
          <p className="text-blue-500 hover:text-blue-600" onClick={() => (toggleProfilePicture(!changeProfilePictureWindow))}>Change Profile Picture </p>
        </div>
        <div className= "ml-6 md:pl-4 flex-col float-right items-right">
          <h2 className="text-2x1 font-semibold">{displayName}</h2>
          <h3 className= "italic">{email}</h3>
        </div>
        <div className="border border-blue-300 float-right w-full text-center items-right ml-4 flex-container flex-col">
          <h1> Posts by {user.displayName} </h1>
          {posts.map((post) => <NewsPost title={post.title} body={post.body} date={post.date_created} />  )}
        </div>
      </div>


      <button className="w-full py-3 bg-red-600 mt-4 text-white" onClick={() => {auth.signOut()}}> Sign Out </button>
    </div>
  )
}

export default ProfilePage;

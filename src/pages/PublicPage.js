import React, {useContext,useState,useEffect,useRouteMatch} from "react";
import {useParams} from 'react-router-dom';
import logo from '../img/logo.png';
import NewsPost from '../components/NewsPost.js';
import UserContext from '../providers/UserProvider';
import {BrowserRouter, Route, Switch, Link,Redirect, useLocation,history} from 'react-router-dom';
import {generateNewsPosts,generateNonUserPage} from '../firebase.js';
import './css/profilepage.css';

const PublicPage = (props) => {
  let {displayName} = useParams();
  console.log(displayName);
  const user = useContext(UserContext);

  const [pageOwner,setPageOwner] = useState({
    displayName: "No User Found With Given DisplayName",
    email: "n/a",
    photoURL: "n/a",
    interests: [],
    aboutMe: "n/a"
  });


  useEffect(() => {

    generateNonUserPage(`${displayName}`).then(res => setPageOwner(res));
    },[displayName]
  )
  const getpageOwner = () => {
    console.log(pageOwner);

  }
  const {email,photoURL,interests,aboutMe} = pageOwner;

  const checkIfUser = () => {
    if(user){
      if(user.displayName === displayName){
        return true
      } else {
        return false
      }
    } return true
  }



  const[posts,checkPosts] = useState([]);
   const checkMyPosts = () => {
     if(pageOwner){
     generateNewsPosts().then(result => checkPosts(result.filter(function(x){
      return x.ownerDisplayName === pageOwner.displayName;
     })))
   };
   }

   useEffect(checkMyPosts,[])
  return(
    <div className="  relative container  profile">


    <div className="container  w-full py-8">
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
          <div className="flexbox block  bg-opacity-25 ml-4 mr-12">

            <br />
            <h3 className="block my-0 border-b-2 b-2-0 w-full h-8"> Interests: </h3>
            <ul className="block float-left ">
               {pageOwner? pageOwner.interests.map((interest) => <li> {interest} </li>) : <h3>Add Your Interests!</h3>} <br />

              </ul>
           </div>
           <div className=" block  bg-opacity-25 ml-4 mr-12">

             <br /><br />             <br /><br />

             <h3 className="block my-0 border-b-2 b-2-0 w-full h-8"> Friends: </h3>
             <ul className="block float-left ">
                {pageOwner? pageOwner.interests.map((interest) => <li> {interest} </li>) : <h3>Add Friends</h3>} <br />

               </ul>
            </div>
        </div>
        <div className="flex flex-col w-full ml-32 float-left">
          <h1 className="head"> {pageOwner? pageOwner.displayName : "display here"} </h1>
          <h3> {pageOwner? pageOwner.email : "email here"} </h3>
          <br />
          <div className="about w-3/4">
            <p>
              {pageOwner? pageOwner.aboutMe : "nothing"}
            </p>
          </div>
          <br />
          <br />



<div className="border border-blue-300 float-right  text-center items-right flex-container flex-col w-3/4">
  <h1> Posts by {pageOwner? pageOwner.displayName : "posts here"} </h1>
  {pageOwner? posts.map((post) => <NewsPost title={post.title} body={post.body} date={post.date_created} />  ) : "nothing"}
</div>
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

export default PublicPage;

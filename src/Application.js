import React, {useContext, useEffect, useState,useRouteMatch} from 'react';
import {BrowserRouter, Route, Switch, Link,Redirect, useLocation,history} from 'react-router-dom';
import SignIn from "./components/SignIn";
import ProfilePage from "./pages/ProfilePage";
import ZombieMath from "./pages/ZombieMath"
import PasswordReset from "./components/PasswordReset";
import Home from "./pages/Home";
import About from "./pages/About";
import SignUp from "./components/SignUp";
import News from "./pages/News";
import {UserContext} from './providers/UserProvider.jsx';
import logo from './img/logo.png';
import white from './img/white.jpg';
import RepChoose from './components/RepChoose.js';
import {auth,getAllUsers} from './firebase.js';
import './utils/navbar/navbar.css';
import PublicPage from "./pages/PublicPage";
import SimonSings from "./pages/SimonSings";

/*
import ProfilePage from ".components/ProfilePage";
import PasswordReset from "./components/PasswordReset";
*/

const SideBar = () => {
  let user = useContext(UserContext);



  return (<div className="sidebar  w-2/12 absolute   border container text-center  inline-block ">
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
                <img src={logo} alt="logo" className="userPhoto  w-3/4 h-3/4 m-auto  hover:text-white-300 opacity-25" />
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
function Application(){
  const user = useContext(UserContext);





  const[showSidebar,toggleShowSidebar] = React.useState(true);


  let location = useLocation();
  useEffect(()=>
  {
    location.pathname === "./ProfilePage" ? toggleShowSidebar(false) : toggleShowSidebar(true);
    console.log(location.pathname);

  },[location])

  const [theLocation,changeLocation] = React.useState(location);
  /*
  function inUpOut(){
    console.log(location);
    if(user){
      return <button onClick={() => auth.signOut() }> Sign Out </button>
    } else if (location.pathname === '/SignIn'){
      return  <Link to="./SignUp"> Sign Up </Link>
    } else {
      return  <Link to="./SignIn"> Sign In </Link>
    }
  }
  */
  let inUpOut;
  useEffect(() =>{
      if(user !== null){
        inUpOut = <button onClick={() => auth.signOut() }> Sign Out </button>
        console.log('at inupout')
      } else if (location.pathname === '/SignIn'){
        inUpOut = <Link to="./SignUp"> Sign Up </Link>

      } else {
        inUpOut = <Link to="./SignIn"> Sign In </Link>
    }

  })
  let [allUsers,searchAllUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then(res => console.log(res));
    getAllUsers().then(res => searchAllUsers(res))
  },[])






    return(

      <div>

      <div className=" navbar mx-auto bg-black text-white w-full inline-block shadow-md  font-Actor text-Actor">
        <div className="signinBox mr-5 float-left overflow-hidden">
           {!user?
          <Link to="/SignIn">
          <img src={logo} alt="profilePicHere" className="userPhoto hover:text-white-300" />
          </Link>
          :
          <Link to="/ProfilePage">

          <div
              style={{
                background:
                `url('${user.photoURL}') no-repeat center center`,
                backgroundSize: "cover",
                height: "100%",
                width: "100%"
              }}
              className="border border-b-white w-3/4 h-3/4 m-auto "
            />
          </Link>
          }
        </div>
        <ul className="my-5 bg-opacity-.5">

        {/* allUsers.map((use) => <li className="mx-5 w-15 float-left hover:bg-gray-700 hover:text-blue-100"> <Link to={`/ProfilePage/${use}`} > {use} </Link> </li> ) */}

          <li className="mx-5 w-15 float-left hover:bg-gray-700  hover:text-blue-100">
            <Link to="/Home">Home</Link>
          </li>
          <li className="mx-5 w-15 float-left hover:bg-gray-700 hover:text-blue-100">
            <Link to="/About">About</Link>
          </li>
          <li className="mx-5 w-15 hover:bg-gray-700 float-left hover:text-blue-100">
            <Link to="/News">News</Link>
          </li>
          {/*}
          <li className="mx-5 w-15 hover:bg-gray-700  float-left hover:text-blue-100">
            <Link to="/ZombieMath">Zombie Math</Link>
          </li> */}


            {allUsers.map((dauser) => <li className="mx-5 w-15 hover:bg-gray-700 float-left hover:text-blue-100"> <Link to={`/PublicPage/${dauser}`}> {dauser} </Link> </li>)}

        </ul>
        <div className="inOut float-right mx-5  hover:bg-gray-500 hover:text-blue-100" >
        {user?  <button onClick={() => auth.signOut().then(window.location = "/SignIn") }> Sign Out </button>
              :
                <Link to="/SignIn" exact> Sign In </Link> }

        </div>

      </div>

      <div>


      <Switch>


        <Route path="/SimonSings" >
          <SimonSings />
        </Route>

        <Route path="/PublicPage/:displayName" >
          <PublicPage />
        </Route>





        <Route path="/ProfilePage/" exact>
          {user?

          <ProfilePage />
          :
          <Redirect to="/SignIn" />
          }
        </Route>

        <Route path="/Home" exact>
          {user? <SideBar /> : <div> </div>}
          <Home />
        </Route>
        <Route path="/News" exact>
        {user? <SideBar /> : <div> </div>}

          <News />
        </Route>
        <Route path="/About">
        {user? <SideBar /> : <div> </div>}

          <About />
        </Route>
        <Route path="/PasswordReset" >
          <PasswordReset />
        </Route>
        <Route path="/SignIn" >
          {user?
          <Redirect to="/ProfilePage" />
          :
          <SignIn />
          }
        </Route>
        <Route path="/SignUp" exact>
          <SignUp />
        </Route>
        <Route path="/Home" exact>
        {user? <SideBar /> : <div> </div>}

          <Home />
        </Route>
        <Route path="/ZombieMath" exact>
          <ZombieMath />
        </Route>




      </Switch>
      </div>

        </div>


    )
}


export default Application;

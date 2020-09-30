import React, {useContext, useEffect, useState,useRouteMatch} from 'react';
import {BrowserRouter, Route, Switch, Link,Redirect, useLocation,history} from 'react-router-dom';
import SignIn from "./components/SignIn";
import ProfilePage from "./pages/ProfilePage";
import SideBar from "./components/Sidebar.js";
import PasswordReset from "./components/PasswordReset";
import ColorPlay from "./pages/ColorPlay";
import Home from "./pages/Home";
import Resume,{Experience,Skills} from "./pages/Resume.js";
import SignUp from "./components/SignUp";
import ZombieMath from "./pages/ZombieMath";
import News from "./pages/News";
import {UserContext} from './providers/UserProvider.jsx';
import logo from './img/fancyN.jpg';
import {auth,getAllUsers} from './firebase.js';
import './utils/navbar/navbar.css';
import SimonSings from "./pages/SimonSings";
import ComeVisit from "./pages/ComeVisit";

/*
import ProfilePage from ".components/ProfilePage";
import PasswordReset from "./components/PasswordReset";
*/


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
      } else if (location.pathname === '/SignIn'){
        inUpOut = <Link to="./SignUp"> Sign Up </Link>

      } else {
        inUpOut = <Link to="./SignIn"> Sign In </Link>
    }

  })
  let [allUsers,searchAllUsers] = useState([]);
  useEffect(() => {
    getAllUsers().then(res => searchAllUsers(res))
  },[])






    return(

      <div>

      <div className=" navbar mt-0 mx-auto bg-black text-white w-full inline-block shadow-md first">
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

          <li className="mx-5 w-15 float-left hover:bg-gray-700  py-1 hover:text-blue-100">
            <Link to="/Home">Home</Link>
          </li>
          <li className="mx-5 w-15 float-left hover:bg-gray-700 py-1 hover:text-blue-100">
            <Link to="/Resume">Resume</Link>
          </li>
          {/*}
          <li className="mx-5 w-15 hover:bg-gray-700 float-left hover:text-blue-100">
            <Link to="/News">Gossip</Link>
          </li>

          <li className="mx-5 w-15 hover:bg-gray-700  float-left hover:text-blue-100">
            <Link to="/ZombieMath">Zombie Math</Link>
          </li> */}

          <li className="dropdown  mx-5 w-15 hover:bg-gray-700 float-left hover:text-blue-100">
          <button className="drop_down_button py-1 mx-5  hover:bg-gray-700 float-left hover:text-blue-100   border-none">Projects </button>
                <div className="dropdown_contents   w-full bg-black ">
                  <Link to="./ComeVisit" className="alink py-1 inline hover:bg-grey-700"> Come Visit </Link>
                  <Link to="./ColorPlay" className="alink py-1 inline hover:bg-grey-700"> Color Play </Link>
                  <Link to="./News" className="alink py-1 inline hover:bg-grey-700"> Gossip </Link>
                  <Link to="./SimonSings" className="w-full alink py-1 inline hover:text-blue-100 hover:bg-grey-700"> Simon Sings </Link>
                  <Link to="./ZombieMath" className="alink py-1 inline hover:bg-grey-700"> Zombie Math </Link>



                </div>
          </li>

        </ul>
        <div className="inOut float-right mx-5  hover:bg-gray-500 hover:text-blue-100" >
        {user?  <button onClick={() => auth.signOut().then(window.location = "/SignIn") }> Sign Out </button>
              :
                <Link to="/SignIn" exact> Sign In </Link> }
        </div>

      </div>

      <div className="mt-0">


      <Switch>

        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/ColorPlay">
          <ColorPlay />
        </Route>
        <Route path="/SimonSings" >
          <SimonSings />
        </Route>

        <Route path="/ComeVisit">
        <ComeVisit />
        </Route>
        <Route path="/ProfilePage/" exact>
          {user?

          <ProfilePage />
          :
          <Redirect to="/SignIn" />
          }
        </Route>

        <Route path="/Home" exact>
          <Home />
        </Route>
        <Route path="/News" exact>

          <News />
        </Route>
        <Route path="/Resume" exact>

          <Resume />
        </Route>
        <Route path="/ZombieMath">
          <ZombieMath />
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
          <SignUp allUsers={allUsers} />
        </Route>
        <Route path="/Home" exact>

          <Home />
        </Route>


      </Switch>
      </div>

        </div>


    )
}


export default Application;

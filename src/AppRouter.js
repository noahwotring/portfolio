import {BrowserRouter, Switch, Route} from 'react-router-dom';
import history from './utils/history.js';
import {useContext} from 'react';
import {UserContext} from './providers/UserProvider.js';
import React, {useContext, useEffect, useState} from 'react';
import {BrowserRouter, Route, Switch, Link,Redirect, useLocation} from 'react-router-dom';
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
import RepChoose from './components/RepChoose.js';
import {auth} from './firebase.js';
import './utils/navbar/navbar.css';


const user = useContext(UserContext);
const PrivateRoute = ({component: Component, ...rest}) {
  return(
    <BrowserRouter {...rest} render={(props) => (
      <Component {...props} />
    )}
    />
  );
}
export PrivateRouter;


const NavBar = (

)

export default function RouteWrapper()

const AppRouter = (props) => {
  const user = useContext(userContext);



  return(
    <BrowserRouter>
    <div>
      <div className="border navbar mx-auto bg-black text-white w-full inline-block shadow-md  font-Actor text-Actor">
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
              className="border border-blue-300 w-3/4 h-3/4 m-auto "
            />
          </Link>
          }
        </div>
        <ul className="my-5 bg-opacity-.5">
          <li className="mx-5 w-15 float-left hover:bg-gray-700  hover:text-blue-100">
            <Link to="/Home">Home</Link>
          </li>
          <li className="mx-5 w-15 float-left hover:bg-gray-700 hover:text-blue-100">
            <Link to="/About">About</Link>
          </li>
          <li className="mx-5 w-15 hover:bg-gray-700 float-left hover:text-blue-100">
            <Link to="/News">News</Link>
          </li>
          <li className="mx-5 w-15 hover:bg-gray-700  float-left hover:text-blue-100">
            <Link to="/ZombieMath">Zombie Math</Link>
          </li>
          </ul>
          <div className="inOut float-right mx-5  hover:bg-gray-500 hover:text-blue-100" >
            {user?  <button onClick={() => auth.signOut() }> Sign Out </button> : <Link to="./SignIn"> Sign In </Link> }
          </div>
        </div>
      <Switch>

        <Route path="/ProfilePage">
          {user?

          <ProfilePage />
          :
          <Redirect to="/SignIn" />
          }
        </Route>

        <Route path="/Home" exact>
          <SideBar />

          <Home />
        </Route>
        <Route path="/News" exact>
          <SideBar />

          <News />
        </Route>
        <Route path="/About">
          <SideBar />

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
        <SideBar />

          <Home />
        </Route>
        <Route path="/ZombieMath" exact>
          <ZombieMath />
        </Route>




      </Switch>

    </div>

    </BrowserRouter>



  )


}

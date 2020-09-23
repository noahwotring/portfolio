import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import {UserContext} from "../providers/UserProvider";
import {createBrowserHistory} from "../utils/history.js";
import {auth,local,session} from '../firebase.js';
import {signInWithGoogle} from '../firebase.js';


const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const user = useContext(UserContext);
  const persHandler = () => {
    auth.setPersistence(session)
      .then(() => {
          auth.signInWithEmailAndPassword(email, password).catch(error => {
            setError("Error signing in with password and email!");
            console.error("Error signing in with password and email", error);
          })
      })
  }
  const signInWithEmailAndPasswordHandler =
      (event,email,password) => {
        event.preventDefault();
        persHandler();



      };
  const onChangeHandler = (event) => {
    const {name,value} = event.currentTarget;

    if(name === 'userEmail'){
      setEmail(value)
    }
    else if (name === 'userPassword'){
      setPassword(value);
    }
  };
  return (
    <div className="mt-8 my-auto opacity-150 w-full absolute  text-center" >
      <h1 className="text-3x1 mb-4 text-center font-bold"> Sign In </h1>
      <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 py-8 px-4 md:px-8">
        {error !== null && <div className="py-4 bg-red-600 w-full text-white text-center mb-3">{error}</div>}
        <form className="">
          <label htmlFor="userEmail" className="block">
          </label>
          <input
            type="email"
            className="my-1 p-1 w-full"
            name="userEmail"
            value={email}
            placeholder="E.g: noah123@gmail.com"
            id="userEmail"
            onChange = {(event)=> onChangeHandler(event)}
            />
            <br />
            <br />

          <label htmlFor="userPassword" className="block">
            Password:
          </label>
          <input
            className="mt-1 mb-3 p-1 w-full"
            type="password"
            name="userPassword"
            value={password}
            placeholder="E.g: derpdede123"
            onChange={(event) => onChangeHandler(event)}
            id="userPassword"
          />
          <br />
          <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {signInWithEmailAndPasswordHandler(event, email, password)}} >
            Sign In
          </button>
        </form>

        <p className="text-center my-3">
          Don't have an account?{" "}
          <Link to="/SignUp" className="text-blue-500 hover:text-blue-600">
            Sign up here
          </Link> {" "}
          <br /> {" "}
          <Link to={{pathname: `/PasswordReset`}} className="text-blue-500 hover:text-blue-600">
            Forgot Password?
          </Link>
        </p>
      </div>
    </div>
  );
};
export default SignIn;

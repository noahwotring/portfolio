import React, {useState} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {auth, generateUserDocument} from '../firebase.js';
const SignUp = (props) => {

  const allUsers = props.allUsers.map((x) => x.toLowerCase());
  const [email, setEmail] = useState("");
  const [password,setPassword ] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [photoURL,setUserImage] = useState("");
  const [error,setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async(event, email, password) => {
    event.preventDefault();
    if(allUsers.includes(displayName.toLowerCase())){
      setError("Username already taken!")
    }
    else {
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email,password);


      generateUserDocument(user,{displayName,email,password,photoURL});
    }
    catch(error){
      setError('Error signing up with email and password');
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
    setUserImage("");
  }
  };
  const onChangeHandler = (event) => {
    const {name, value} = event.currentTarget;
    if(name === "userEmail"){
      setEmail(value);
    } else if(name === "userPassword") {
      setPassword(value);
    } else if(name === "displayName") {
      setDisplayName(value);
    }
    else if (name === "photoURL"){
      setUserImage(value)
    }
  };
  return(
    <div className="mt-8 my-auto opacity-150 w-full absolute  text-center signForm" >
      <h1 className="text-3x1 mb-4 text-center font-bold"> Sign Up [Under Construction]</h1>
    <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
    {error !== null && (
      <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
        {error}
      </div>
      )}
      <form className=" text-black">
        <label className="block text-white" htmlFor="displayName">
          Username: {" "}
        </label>
        <input
          type="displayName"
          name="displayName"
          value={displayName}
          className="my-1 p-1 w-full"
          id="displayName"
          placeholder="E.g: Your Username"
          onChange = {(event) => onChangeHandler(event)}
        />
        <br />
        <label htmlFor="userEmail" className="text-white">
          E-Mail:{" "}
        </label>
        <input
          name="userEmail"
          type="email"
          id="userEmail"
          className="my-1 p-1 w-full"
          value={email}
          placeholder="E.g: noah123@gmail.com"
          onChange = {(event) => onChangeHandler(event)}
        />
        <br />
        <label htmlFor="photoURL" className="text-white">
          Link to Profile Picture: {" "}
        </label>
        <input
          name="photoURL"
          type="photoURL"
          id="photoURL"
          className="my-1 p-1 w-full"
          value={photoURL}
          placeholder="Image URL"
          onChange = {(event) => onChangeHandler(event)}
        />
        <br />
        <label className="block text-white" htmlFor="userPassword">
          Password:{" "}
        </label>
        <input
          className="mt-1 mb-3 p-1 w-full"
          name="userPassword"
          type="password"
          id="userPassword"
          value={password}
          onChange={(event) => onChangeHandler(event)}
          placeholder="E.g: johndoe123"
        />
        <button className="bg-green-400 hover:bg-green-500 w-full py-2 text-white" onClick = {(event) => {createUserWithEmailAndPasswordHandler(event, email, password)}} >
          Sign Up
        </button>
      </form>

      <p className="text-center my-3">
        Already have an account?{" "}
        <Link to="/signin" className="text-blue-500 hover:text-blue-600">
          Sign in here
        </Link>
      </p>
    </div>
  </div>
  )







}
export default SignUp;

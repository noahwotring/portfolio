import React, {useState} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {auth, generateUserDocument} from '../firebase.js';
const SignUp = () => {

  const [email, setEmail] = useState("");
  const [password,setPassword ] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [userImage,setUserImage] = useState("");
  const [error,setError] = useState(null);

  const createUserWithEmailAndPasswordHandler = async(event, email, password) => {
    event.preventDefault();
    try{
      const {user} = await auth.createUserWithEmailAndPassword(email,password);
      console.log("attempted");
      generateUserDocument(user,{displayName,email,password});
    }
    catch(error){
      setError('Error signing up with email and password');
    }
    setEmail("");
    setPassword("");
    setDisplayName("");
    setUserImage("");
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
    else if (name === "userImage"){
      setUserImage(value)
    }
  };
  return(
    <div className="mt-8 my-auto opacity-150 w-full absolute  text-center" >
      <h1 className="text-3x1 mb-4 text-center font-bold"> Sign Up </h1>>
    <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
    {error !== null && (
      <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
        {error}
      </div>
      )}
      <form className="">
        <label className="block" htmlFor="displayName">
          Username: {" "}
        </label>
        <input
          type="displayName"
          name="displayName"
          value={displayName}
          className="my-1 p-1 w-full"
          id="displayName"
          placeholder="E.g: daCoolestDudeInDaWest"
          onChange = {(event) => onChangeHandler(event)}
        />
        <br />
        <label htmlFor="userEmail">
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
        <label htmlFor="userImage">
          Link to User Picture: {" "}
        </label>
        <input
          name="userImage"
          type=""
          id="userImage"
          className="my-1 p-1 w-full"
          value={userImage}
          placeholder="User Image"
          onChange = {(event) => onChangeHandler(event)}
        />
        <br />
        <label className="block" htmlFor="userPassword">
          Password:{" "}
        </label>
        <input
          className="mt-1 mb-3 p-1 w-full"
          name="userPassword"
          type="password"
          id="userPassword"
          value={password}
          onChange={(event) => onChangeHandler(event)}
          placeholder="E.g: derpdede123"
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

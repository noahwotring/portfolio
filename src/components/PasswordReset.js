import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {auth} from '../firebase.js'

const PasswordReset = () => {
  const [email, setEmail] = useState("");
  const [emailHasBeenSent,setEmailHasBeenSet] = useState(false);
  const [error, setError] = useState(null);
  const onChangeHandler = event => {
    const {name, value} = event.currentTarget;
    if(name === "userEmail"){
      setEmail(value)
    }
  };
  const sendResetEmail = event => {
    event.preventDefault();
    console.log(email);

    auth.sendPasswordResetEmail(email)
      .then(() => {
        PasswordReset.setEmailHasBeenSent(true);
        setTimeout(() => {PasswordReset.EmailHasBeenSent(false)}, 3000);
      })
      .catch(() => {
        setError("Error resetting password");
      });
  };
  return(

    <div className="mt-8">
      <h1 className="text-x1 text-center font-bold mb-3"> Reset Your Password </h1>
      <div className="border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
        <form action="">
          {emailHasBeenSent && (
              <div className="py-3 bg-green-400 w-full text-white text-center mb-3">
                An email has been sent to the given address!
              </div>
          )}
          {error != null && (
            <div className="errcode py-3 bg-red-600 w-full text-white text-center mb-3">
              {error}
            </div>
          )}
          <label htmlFor="userEmail" className="block text-center">
            Email:{" "}
          </label>
          <input
            className="mb-3 px-1 py-2 w-full"
            type="email"
            id="userEmail"
            name="userEmail"
            value={email}
            placeholder="Please input your email."
            onChange={onChangeHandler}
          />
          <button className="w-full bg-blue-400 text-white py-3 hover:bg-blue-500" onClick={(event) => sendResetEmail(event) }>
            Send Me A Reset Link!
          </button>
        </form>
        <Link to="/signin" className="my-2 text-blue-700 hover:text-blue-800 text-center block">
          &larr; back to the sign in page
        </Link>
      </div>
    </div>
  )
}
export default PasswordReset;

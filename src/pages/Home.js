import React, {useEffect,useState} from 'react';
import simonsings from "../img/simonsings.png";
import zombiemath from "../img/zombiemath.png";
import {Link} from "react-router-dom";
import "./home.css";

const Home = () => {

  return(
   <div className="ml-16 relative container text-center bg-gray-400 bg-opacity-25 " >
    <h1 className="text-center text-5xl mt-3 font-semibold block "> Not Another Portfolio! </h1>
    <p className="ml-48 block"> A Portfolio By Noah Kumar Wotring </p>

    <div className="porfolio_links mt-24 ml-8 contents inline-block w-1/4">
      <div className="container block float-left inline-block ">
        <h3 className=""> Simon Sings </h3>
        <Link to="./SimonSings">
        <div
          style={{
            background:
            `url('${simonsings}') no-repeat center center / cover`,
            height: "200px",
            width: "300px"
          }}
          className="hover:opacity-50 portolio_link"
          />
          </Link>
      </div>
      </div>
      <div className="porfolio_links mt-24 ml-8 inline-block contents w-1/4">
        <div className="container block float-left inline-block ">
          <h3 className="">Zombie Math </h3>
          <Link to="./SimonSings">
          <div
            style={{
              background:
              `url('${zombiemath}') no-repeat center center / cover`,
              height: "200px",
              width: "300px"
            }}
            className="hover:opacity-50 portolio_link"
            />
            </Link>
        </div>
        </div>
    </div>
)


}
export default Home;

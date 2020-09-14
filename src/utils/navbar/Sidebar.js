import React, {Component,useState,useContext} from 'react';
import ReactDOM from 'react-dom';
import {UserContext} from "../../providers/UserProvider";
import {Link} from 'react-router-dom';
import './sidebar.css';
class Sidebar extends Component{
  render(){
    return(
      <div className="Sidebar">
      <ul>
      <li><Link to="/"> Home </Link></li>
      <li> About </li>
      <li> Contact </li>
      </ul>
      </div>
    )
  }
}
export default Sidebar;

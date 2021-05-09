import React, { Component } from "react";
import {Link} from "react-router-dom";
///import Home from "./admin_home";


class Navigation extends Component{
    render(){
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light ">
            <a to="#" className="navbar-brand" >PizzaHub</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav  ml-auto">
                <li className="nav-item active">
                  <a to="#"className="nav-link" > ㅤHome ㅤ<span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a  to="#" className="nav-link"> ㅤCollection ㅤ</a>
                </li>
                <li className="nav-item ">
                  <a to="#" className="nav-link"  id="navbarDropdown"> ㅤAbout Us ㅤ</a>
                </li>
                <li className="nav-item ">
                  <a to="#" className="nav-link"  id="navbarDropdown"> ㅤContact Us ㅤ ㅤ</a>
                </li>
               </ul>
              <form className="form-inline my-2 my-lg-4">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
              <ul className="nav navbar-nav navbar-right">
                   <li><a to="#"><span className="glyphicon glyphicon-user" ></span>ㅤㅤSign Upㅤ</a></li>
                   <span className="border border-primary"></span>
                    <li><a to="#"><span className="glyphicon glyphicon-log-in"></span> ㅤLogin</a></li>
             </ul>
            </div>
          </nav>
          <br/>
          <br/>
          
          <div class="footer" style = {{position: 'fixed'}}  style = {{width: "40rem"}} 
           style ={{backgroundColor: 'gray'}} >
             <p>Footer</p>
          </div>
          </div>
          
        );
    }
}

export default Navigation
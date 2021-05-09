import React from 'react';
import ReactDOM from 'react-dom';// document- containe with the all element in the web
import {BrowserRouter, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from './components/navigation';
import ViewItem from './components/admin_viewItem'
import Home from './components/admin_home'


ReactDOM.render(<Navigation/>,document.getElementById("root"))
//ReactDOM.render(<ViewItem/>,document.getElementById("root"))
//ReactDOM.render(<Home/>,document.getElementById("root"))

//ReactDOM.render(<BrowserRouter>
//<Navigation/>
//<Route expect path = "/ViewItem" component ={ViewItem}/>
//</BrowserRouter>.document.getElementById("root"))
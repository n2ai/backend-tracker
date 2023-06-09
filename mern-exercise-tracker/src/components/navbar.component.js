import React, {Component} from "react";
import {Link} from "react-router-dom"

export default class Navbar extends Component{
    render(){
        return(
            <div className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand" >ExcerTracker</Link>
                <div className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                        <Link to="/" className="nav-Link" >Exercises</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/create" className="nav-Link" >Create Exercise Log</Link>
                    </li>
                    <li className="navbar-item">
                        <Link to="/user" className="nav-Link" >Create User</Link>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}
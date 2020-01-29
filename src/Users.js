import React, { Component} from 'react';
import './Users.css';
import pinkbackground from "./pinkbackground.jpg"
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';


const User = ({ match }) => {
    return (
    <h1> Welcome {match.params.username}!</h1>
    
    
    
      )
  }
  

export default class Users extends Component {
    state = {
      loggedIn: true
    }

    render() {
        return (
            <h1>hi</h1>
            
        )
    }
}
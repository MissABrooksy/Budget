import React, { Component } from 'react';
import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
      super(props);
      this.state = {
          email: '',
          password: '',
          loginErrors:'',
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
     const {email, password} = this.state;

     axios
     .post("http://localhost:3000/sessions",
     {
         user: {
             email: email,
             password: password
         }
     },
     { withCredentials: true }
     ).then(response => {
         console.log("res from login", response);
     }).catch(error => {
         console.log("loginn error", error);
     });
      event.preventDefault();
    }
  
    render() {
      return (
          <div>
        <form onSubmit={this.handleSubmit}>
         
          <input type="email"
          name="email"
          placeholder="email"
           value={this.state.email}
           onChange={this.handleChange}
           required
            />

<input type="password"
          name="password"
          placeholder="password"
           value={this.state.email}
           onChange={this.handleChange}
           required
            />

            <button type="submit">Submit</button>
        </form>
        </div>
      );
    }
  }


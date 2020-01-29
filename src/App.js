import React, { Component } from 'react';
import pinksign from './pinksign.png';
import './App.css';
import pinkbackground from "./pinkbackground.jpg"
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Users from './Users'

const User = ({ match }) => {
  return (
  <h1> Welcome {match.params.username}!</h1>
  
      )
}


class App extends Component {
  state = {
    loggedIn: false
  }

  loginHandle = () => {
    this.setState({ loggedIn: true })
  }

  handleSubmitEntry = () => {
    //show Entries 
    //make calculations
  }

  expenseHandle = () => {
    //show Expense form
      
  }

  incomeHandle = () => {
    //show Income form
  }

  render() {
    return (
      <Router>

        <Route path="/login" exact strict render={
          () => {
            return (
              <div className="loginPage">

<NavLink
                      to="/"
                      className="home"
                      activeClassName="activeRoute"
                      activeStyle={{ color: 'teal' }}
                    >Home
</NavLink>
                <h1>Login</h1>

                <img src={pinksign} className="App-logo" alt="logo" />

                <div>
                  <form onSubmit={this.handleSubmit}>

                    <input type="email"
                      name="email"
                      placeholder="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />
                    <br></br>
                    <input type="password"
                      name="password"
                      placeholder="password"
                      value={this.state.email}
                      onChange={this.handleChange}
                      required
                    />
<br></br>
<br></br>
                    <button type="submit" onClick={this.loginHandle}>Login</button>
                  </form>
                </div>


              </div>
            )
          }
        } />



        <Route path="/signup" exact strict render={
          () => {
            return (
              
              <div className="signUp">
                <NavLink
                      to="/"
                      className="home"
                      activeClassName="activeRoute"
                      activeStyle={{ color: 'teal' }}
                    >Home
</NavLink>
                <h1>Sign-Up</h1>

                <img src={pinksign} className="App-logo" alt="logo" />

                <form id="signUpPage" onSubmit={this.handleSubmit}>

                  <input type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={this.state.firstName}
                    onChange={this.handleChange}
                    required
                  />
                  <br></br>

                  <input type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                    required
                  />


                  <br></br>
                  <input type="email"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <br></br>
                  <input type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.email}
                    onChange={this.handleChange}
                    required
                  />
                  <br></br>
                  <br>
                  </br>
                  <button type="submit" onClick={this.loginHandle}>Login</button>
<br></br>
<br></br>
<br></br>


                </form>
              </div>
            );
          }
        } />


        
        <Route path="/user/:username" exact strict component={User} render={() => {
          return(
            <Users />
            
          
          );
        }
        } />

        <Route path="/" exact={true} render={
          () => {
            return (
              <div className="App" styles={{ backgroundImage: `url(${pinkbackground})` }}>

                <header className="App-header">

                  <span>
                    <NavLink
                      to="/login"
                      className="home"
                      activeClassName="activeRoute"
                      activeStyle={{ color: 'teal' }}
                    >Login
</NavLink>

                    <NavLink
                      to="/signup"
                      className="home"
                      activeClassName="activeRoute"
                      activeStyle={{ color: 'teal' }}
                    >Sign Up
</NavLink>

                  </span>

                  <p>
                    Budgetnista...
        </p>
                  <h2>..a lifestyle...
        </h2>
                  <img src={pinksign} className="App-logo" alt="logo" />


                  <span>
                    <NavLink
                      to="/login"
                      className="home"
                      activeClassName="activeRoute"
                      activeStyle={{ color: 'teal' }}
                    >Login
</NavLink>

                    <NavLink
                      to="/signup"
                      className="home"
                      activeClassName="activeRoute"
                      activeStyle={{ color: 'teal' }}
                    >Sign Up
</NavLink></span>
                </header>
              </div>
            )
          }
        } />

<Route path="/extra" exact strict render={
          () => {
            return (
              
              <div className="signUp">
                <NavLink
                      to="/"
                      className="home"
                      activeClassName="activeRoute"
                      activeStyle={{ color: 'teal' }}
                    >Home
</NavLink>
                <h1>Welcome { User } </h1>

                <img src={pinksign} className="App-logo" alt="logo" style={{height: "140px" }} />
                <br></br>
                {/* <button className="budget" type="submit" onClick={this.expenseHandle}>Expense</button>
                <button className="budget" type="submit" onClick={this.incomeHandle}>Income</button> */}
                
                <span>
                <form id="Tracking" onSubmit={this.handleSubmitEntry}>
                <button className="budget" type="submit" onClick={this.expenseHandle}>Expense</button>
                               <br></br>
                  
                                    <input type="text"
                    name="expense"
                    placeholder="Expense"
                    value={this.state.expense}
                    onChange={this.handleChange}
                    required
                  />
                  <br></br>

                  <input type="text"
                    name="amount"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    required
                  />


                  <br></br>
                  <input type="text"
                    name="notes"
                    placeholder="Notes"
                    value={this.state.notes}
                    onChange={this.handleChange}
                    required
                  />
                  <br></br>
                  <br>
                  </br>
                  <button type="submit" onClick={this.expenseHandle}>Submit</button>
<br></br>
<br></br>
<br></br>


                </form>
                <form id="Tracking" onSubmit={this.handleSubmitEntry}>
                <button className="budget" type="submit" onClick={this.incomeHandle}>Income</button>
                               <br></br>
                  <input type="text"
                    name="income"
                    placeholder="Income"
                    value={this.state.income}
                    onChange={this.handleChange}
                    required
                  />
                  <br></br>

                  <input type="text"
                    name="amount"
                    placeholder="Amount"
                    value={this.state.amount}
                    onChange={this.handleChange}
                    required
                  />


                  <br></br>
                  <input type="tex"
                    name="notes"
                    placeholder="Notes"
                    value={this.state.notes}
                    onChange={this.handleChange}
                    required
                  />
                  
                  <br></br>
                  <br>
                  </br>
                  <button type="submit" onClick={this.loginHandle}>Submit</button>
<br></br>
<br></br>
<br></br>


                </form>
                </span>
              </div>
            );
          }
        } />
      </Router>

    );
  }
}



export default App;

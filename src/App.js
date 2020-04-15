import React from 'react';
import logo from './logo.svg';

import Attendance from './Attendance';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      showLogin: false
    };
  }
  mySubmitHandler = (event) => {   
    event.preventDefault();
    let username = this.state.username;
    if (Number(username)) {
      alert("Username should not be number");
    }
    this.setState({showLogin:true});
  }
  changeLogout=()=>{
    this.setState({
      showLogin:false
    });
  }
  myChangeHandler = (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    this.setState({[nam]: val});
  }
  render() {
    return (
      <>
     {this.state.showLogin?
      <Attendance logout={this.changeLogout} /> :
      <form className="App-header App-background" onSubmit={this.mySubmitHandler}>
      <h1>LOGIN </h1>
      <p>Enter username : <input
        type='text'
        name='username'
        onChange={this.myChangeHandler}
      /></p>
      <p>Enter password : <input
        type='text'
        name='pwd'
        onChange={this.myChangeHandler}
      /></p>
      <br/>
      <input type='submit'/>
      </form>
           }
     </> 
    );
  }
}
export default App;

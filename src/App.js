import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Header />
        <UserList/>
        
      </div>
    );
  }
}

class UserList extends Component {
  
  constructor (props) {
    super(props);
    this.state = {
      users : [
        {
          name: 'Lucas',
          trashCounter: 0
        },
        {
          name: 'Marcelo',
          trashCounter: 0
        },
        {
          name: 'Pericles',
          trashCounter: 0
        },
        {
          name: 'Thiago',
          trashCounter: 0
        },
        {
          name: 'Vinicius',
          trashCounter: 0
        }
      ]}   
      
      this.addUser = this.addUser.bind(this);
  }

  addUser(newUser) {

    this.setState({
      users: this.state.users.concat([newUser])
    });
    
  }

  render() {
    return(
      <div>
        <div>
          {
            this.state.users.map((user, i) => <User user={user} key={i}/>)
          }
        </div>
        
        <UserAdder addUser={this.addUser}/>
      </div>
    );
  }
}

class User extends Component {

  constructor(props){
    super(props);

    this.state = {
      name: this.props.user.name,
      counter: this.props.user.trashCounter

    }

    this.incrementCounter = this.incrementCounter.bind(this);

  }

  incrementCounter() {
    this.setState({
      counter: this.state.counter+1
    });
  }

  render() {

    var userBlock = {marginRight : '20px'}

    return (
      <div> 
        <div> <span style={userBlock}>{this.state.name} {this.state.counter} </span> <button onClick={this.incrementCounter}>Add</button> </div>
      </div> 
    );
  }
}


class UserAdder extends Component {

  constructor(props) {
    super(props);

    this.state = {
      name : '',
      trashCounter : 0
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({
      name : e.target.value
    })
  }

  handleClick(e) {
    var newUser = {
      name: this.state.name,
      trashCounter: this.state.trashCounter
    }

    this.props.addUser(newUser);
  }

  render() {
    return (
      <div>
        <p><b>New user:</b> {this.state.name}</p>
        <input onChange={this.handleInput} value={this.state.name}/>
        <button onClick={this.handleClick} >Add new user</button>
      </div>
    );
  }
}


var Header = props => (
  <div>
    <h1>Trash Table</h1>
  </div>
);

export default App;

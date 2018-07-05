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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

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
          lastName: 'Natingale',
          trashCounter: 0
        },
        {
          name: 'Marcelo',
          lastName: 'Amarildo',
          trashCounter: 0
        },
        {
          name: 'Pericles',
          lastName: 'Montana',
          trashCounter: 0
        },
        {
          name: 'Thiago',
          lastName: 'Otake',
          trashCounter: 0
        },
        {
          name: 'Vinicius',
          lastName: 'Neymar',
          trashCounter: 0
        }
      ]}   
      
      this.addUser = this.addUser.bind(this);
  }

  addUser(e) {
    var newUser = {
      name: 'Menino',
      lastName: 'Ney',
      trashCounter: 0
    }

    this.setState({
      users: this.state.users.concat([newUser])
    });
    
  }

  render() {
    return(
      <div>
        <div>
          {
            this.state.users.map((user, i) => <User userData={user} key={i}/>)
          }
        </div>
        
        <UserAdder addUser={this.addUser}/>
      </div>
    );
  }
}

class User extends Component {
  render() {

    let user = this.props.userData;
    var userBlock = {marginRight : '20px'}

    return (
      <div> 
        <div> <span style={userBlock}>{user.name} {user.lastName}</span> </div>
      </div> 
    );
  }
}


class UserAdder extends Component {
  render() {
    return (
      <button onClick={this.props.addUser}>Add new user</button>
    );
  }
}

export default App;

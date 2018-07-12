import React, {Component} from 'react'

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

  export default UserAdder;
import React, {Component} from 'react'

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

  export default User;
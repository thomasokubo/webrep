import React, {Component} from 'react'
import UserAdder from './UserAdder'
import User from './User'

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

  export default UserList;
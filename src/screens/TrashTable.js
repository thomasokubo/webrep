import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Header from '../components/trash_table/Header'
import UserList from '../components/trash_table/UserList'

class TrashTable extends Component {
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

export default TrashTable;

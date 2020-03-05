import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';

class Main extends Component {
    
    componentDidMount(){
    }
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              我是首页
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      )
    }
}

export default connect(state=>({
    User: state.User
}))(Main);

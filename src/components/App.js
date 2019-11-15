import React, {Component} from 'react';
import Profile from './Profile';
import Main from './Main';
import './App.css';

export default class App extends Component {
  render () {
    return (
        <div className="ui grid">
          <Profile />
          <Main />
        </div>
    
    );
  }
}

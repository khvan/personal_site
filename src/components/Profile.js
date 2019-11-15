import React, {Component} from 'react';
import './App.css';

class Profile extends Component {
  render () {
    return (
      <div className="four wide column colsizing">
        <div className="ui vertical menu bar">
            <img className="profile" id="avatar" src ="photo.jpg"/>
          <div className="item">
            <h4>Projects</h4>
            <img className="heart" src="heart.svg" />
          </div>
          <div className="item">
            <h4>Education</h4>
            <img className="book" src="book.svg" />
          </div>
          <div className="item">
            <h4>Experience</h4>
            <img className="compass" src="compass.svg" />
          </div>
          <a className="item">
            <h4 className="ui header">Contact Info:</h4>
            <p>Visit our rebate forum for information on claiming rebates</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;

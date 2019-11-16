import React, {Component} from 'react';
import './App.css';

class Profile extends Component {
  render () {
    return (
      <div className="three wide column colsizing">
        <div className="ui vertical menu bar">
          <div className="profile-avatar">
            <img className="profile" id="avatar" src="photo.png" />
            <img className="profile" id="avatar" src="photo.png" />
          </div>
          <div id="projects" className="item">
            <h4>Projects</h4>
            <div className="icon-container">
              <img className="heart" src="heart.svg" />
            </div>
          </div>
          <div id="education" className="item">
            <h4>Education</h4>
            <div className="icon-container">
              <img className="book" src="book.svg" />
            </div>
          </div>
          <div id="experience" className="item">
            <h4>Experience</h4>
            <div className="icon-container">
              <img className="compass" src="compass.svg" />
            </div>
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

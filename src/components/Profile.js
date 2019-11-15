import React, {Component} from 'react';
import './App.css';

class Profile extends Component {
  render () {
    return (
      <div className="four wide column colsizing">
        <div className="ui vertical menu bar side">
            <img id="avatar" src ="photo.jpg"/>
          <a className="item">
            <h4>Boris Khvan</h4>
            <p></p>
          </a>
          <a className="item">
            <h4 className="ui header">Rebates</h4>
            <p>Visit our rebate forum for information on claiming rebates</p>
          </a>
        </div>
      </div>
    );
  }
}

export default Profile;

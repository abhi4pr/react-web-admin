import React, { Component } from 'react';
import history from '../history';

class Logout extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }   

  componentDidMount() {
    localStorage.removeItem("userData");
    localStorage.removeItem("AuthToken");
    this.props.history.push("/login");
  }

  render() {
      return (
        <div>

        </div>
      )    
  }
}

export default Logout;
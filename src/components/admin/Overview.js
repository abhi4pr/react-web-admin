import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../../api/ApiServices";
import * as SessionService from "../../api/SessionService";
import history from '../../history';
import axios from 'axios';
import './Aindex.css';

class Overview extends Component {

  constructor(props) {
    super(props);
      this.state = {

    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount(){
    
  }

  render() {
      return (
        <div>
         <Header />
          <section class="container-fluid" style={{marginTop:"-10px",backgroundColor:"#fafafa",height:"520px"}}>
            <div class="row">
              <div class="col-md-3">
              </div>
              <div class="col-md-9">

                <h3 style={{fontWeight:"bold"}}>Dashboard</h3>
                
              </div>
              <div class="ttt">
              </div>
            </div>
          </section>  
         <Footer /> 
        </div>
      )    
  }
}

export default Overview;
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../api/ApiServices";
import axios from 'axios';
import '../index.css';

class Unableconnect extends Component {

  constructor(props) {
    super(props);

    this.state = {
      
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    
  }

  render() {
      return (
          <section class="container-fluid">
            <div class="row">
              <div class="col-md-3">
              </div>
              <div class="col-md-6" style={{marginTop:"70px"}}>
                <h2>Connecting you to an Interpreter. Please wait.</h2>
                <h5 style={{fontSize:"20px",color:"orange"}}>Your estimated wait time is 00h 12m 48s</h5>
                <p>Language : English, Purpose : Performance Feedback</p>
              </div>             
              <div class="col-md-3" style={{border:"1px solid black"}}>
                 <span style={{display:"flex"}}><p style={{padding:"10px"}}>Call duration 00:00:00</p>
                 <img style={{border:"1px solid orange",height:"50px"}} src="assets/img/profile-img.png" />
                 <p style={{padding:"10px"}}>4:10 PM</p></span>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
              </div>
              <div class="col-md-4" style={{marginTop:"30px"}}>
                <img class="connimg" src="assets/img/profile-img.png" />
                <img class="connMimg" src="assets/img/video-call-icon.png" />
                <img class="connimg" src="assets/img/person-icon.jpg" />
              </div>
            </div>
            
            <div class="row">
              <div style={{backgroundColor:"#ffce48",marginTop:"20px",padding:"5px 0px 20px 15px"}} class="col-md-offset-3 col-md-6">
               <h4>Unable to Connect</h4>
                Looks like all interpreters are busy at the moment attending other calls.
                You can try another interpreter by changing your Call language or continue to Wait.
                Alternatively, you can try again later.
                <p style={{marginTop:"20px"}}>Your estimated wait time is 00:12:48 (12 minutes, 48 seconds)</p>
              <div class="unableanchor">
                <Link to={`#`}>NOTIFY ME</Link>
                <Link to={`/changelang`}>CHANGE LANGUAGE</Link>
                <Link to={`#`}>WAIT</Link>
              </div>
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
              </div>
              <div class="col-md-6 grpicon" style={{marginTop:"30px"}}>
                <img class="btmicn" src="assets/img/icon-mircophone.png" />
                <img class="btmicn" src="assets/img/icon-endcall.png" />
                <img class="btmicn" src="assets/img/icon-video.png" />
                <img class="btmicn" src="assets/img/icon-chat.png" />
              </div>
            </div>  
          </section>  
      )    
  }
}

export default Unableconnect;
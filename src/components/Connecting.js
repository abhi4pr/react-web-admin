import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../api/ApiServices";
import * as SessionService from "../api/SessionService";
import axios from 'axios';
import '../index.css';

class Connecting extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isInterPreter:true,
      purposeid:'',
      languageid:''
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    
  }

  async onCallCLick(type) {
    var userData = {
      //purpose_id: this.state.purposeid,
      //language_id: this.state.languageid,
      purpose_id: 1,
      language_id: 1,
      is_recall: 0,
      action: type
    };
    var Request = await ApiService.PostAPI('call/request', userData);

    if (Request.status) {
      if (type == 1) {
        var CallData = {
          call_request_id: Request.data.id
        };
        var CallRequest = await ApiService.PostAPI('call/search_interpreter', CallData);

        if (CallRequest.status) {
          if (CallRequest.count > 0) {
            var User = SessionService.GetUserSession();
            window.location.href = "https://signableqb.phpstaging.ga/index.html?userid=" + User.qb_id + '$$' + User.qb_password + '&room=' + CallRequest.data._id + '&callrequest=' + Request.data.id + '&systemuserid=' + User.id

          } else {
            this.setState({ isInterPreter: false });
          } if (CallRequest.count > 0) {
            var User = SessionService.GetUserSession();
            window.location.href = "https://signableqb.phpstaging.ga/index.html?userid=" + User.qb_id + '$$' + User.qb_password + '&room=' + CallRequest.data._id + '&callrequest=' + Request.data.id + '&systemuserid=' + User.id

          } else {
            this.setState({ isInterPreter: false });
          }
        }
      }
      else {
        this.props.history.push('/purpose');
      }
    }

  };

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
              <div class="col-md-4">
              </div>
              <div class="col-md-6 grpicon" style={{marginTop:"215px"}}>
                <img class="btmicn" src="assets/img/icon-mircophone.png" />
                <Link to={`/unableconnect`}><img class="btmicn" src="assets/img/icon-endcall.png" /></Link>
                <button onClick={() => this.onCallCLick(1)} type="button" style={{backgroundColor:"white",border:"none"}}><img class="btmicn" src="assets/img/icon-video.png" /></button>
                <img class="btmicn" src="assets/img/icon-chat.png" />
              </div>
            </div>  
          </section>  
      )    
  }
}

export default Connecting;
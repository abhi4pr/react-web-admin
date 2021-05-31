import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../api/ApiServices";
import axios from 'axios';
import '../index.css';

class Profile extends Component {

  constructor(props) {
    super(props);

    this.state = {
      getUserData:[],
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    let getUserData = localStorage.getItem("userData"); 
    this.setState({ 
      getUserData: JSON.parse(getUserData), 
    });   
  }

  render() {
      return (
        <div>
         <Header />
          <section class="container-fluid">
            <div class="row">
              <div class="col-md-5">
              </div>
              <div class="col-md-4">
                <img src="assets/img/user-upload-512.png" 
                style={{marginTop:"15px",height:"150px",borderRadius:"50%",border:"1px solid yellow"}}/>
                <h3>Melvin Joseph</h3>
              </div>
            </div>
            <div class="row">
              <div class="col-md-1">
              </div>
              <div class="col-md-10">
                <div class="well well-sm" 
                  style={{backgroundColor:"#003774",marginTop:"10px",height:"45px"}}>
                  <h4 style={{textAlign:"center",color:"white",marginTop:"2px"}}>Basic Info</h4>
                </div>
                <div class="row" style={{margin:"-20px 0px 0px 0px",border:"1px solid gray"}}>
                   <div class="col-md-4">
                      <div class="row">
                        <div class="col-md-4">
                          <h6>Name</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>Malvin Joseph</h5>
                        </div>
                        <div class="col-md-4">
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                       <div class="row">
                        <div class="col-md-4">
                          <h6>Company</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>{this.state.getUserData?.user_profile?.company?.company_name}</h5>
                        </div>
                        <div class="col-md-4">
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                       <div class="row">
                        <div class="col-md-4">
                          <h6>Employee ID</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>789453</h5>
                        </div>
                        <div class="col-md-4">
                        </div>
                      </div>
                   </div>     
                </div>
                <div class="row" style={{margin:"0px",border:"1px solid gray"}}>
                   <div class="col-md-4">
                      <div class="row">
                        <div class="col-md-4">
                          <h6>Email ID</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>{this.state.getUserData.email}</h5>
                        </div>
                        <div class="col-md-4">
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                       <div class="row">
                        <div class="col-md-4">
                          <h6>Department</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>User</h5>
                        </div>
                        <div class="col-md-4">
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                       <div class="row">
                        <div class="col-md-4">
                          
                        </div>
                        <div class="col-md-4">
                          
                        </div>
                        <div class="col-md-4">
                        </div>
                      </div>
                   </div>     
                </div>
                <div class="row" style={{margin:"0px",border:"1px solid gray"}}>
                   <div class="col-md-4">
                      <div class="row">
                        <div class="col-md-4">
                          <h6>Display Language</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>English</h5>
                        </div>
                        <div class="col-md-4">
                          <h5 style={{color:"blue",fontWeight:"bold"}}>EDIT</h5>
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                       <div class="row">
                        <div class="col-md-4">
                          <h6>Call Language</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>Kannada</h5>
                        </div>
                        <div class="col-md-4">
                          <h5 style={{color:"blue",fontWeight:"bold"}}>EDIT</h5>
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                       <div class="row">
                        <div class="col-md-4">
                          
                        </div>
                        <div class="col-md-4">
                          
                        </div>
                        <div class="col-md-4">
                        </div>
                      </div>
                   </div>     
                </div>
                <div class="row" style={{margin:"0px",border:"1px solid gray"}}>
                   <div class="col-md-4">
                      <div class="row">
                        <div class="col-md-4">
                          <h6>Mile</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>Middle Mile</h5>
                        </div>
                        <div class="col-md-4">
                          <h5 style={{color:"blue",fontWeight:"bold"}}>EDIT</h5>
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                       <div class="row">
                        <div class="col-md-4">
                          <h6>Region</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>North</h5>
                        </div>
                        <div class="col-md-4">
                          <h5 style={{color:"blue",fontWeight:"bold"}}>EDIT</h5>
                        </div>
                      </div>
                   </div>
                   <div class="col-md-4">
                       <div class="row">
                        <div class="col-md-4">
                          <h6>Site</h6>
                        </div>
                        <div class="col-md-4">
                          <h5>{this.state.getUserData?.user_profile?.locations?.site}</h5>
                        </div>
                        <div class="col-md-4">
                          <h5 style={{color:"blue",fontWeight:"bold"}}>EDIT</h5>
                        </div>
                      </div>
                   </div>     
                </div>
              </div>
              <div class="col-md-1">
              </div>
            </div>
          </section>  
         <Footer /> 
        </div>
      )    
  }
}

export default Profile;
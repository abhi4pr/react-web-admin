import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../../api/ApiServices";
import * as SessionService from "../../api/SessionService";
import history from '../../history';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
      this.state = {
       email:'',
       password:'',
       Uerror:''
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount(){
    
  }

  onAdminLogin (event) {
    event.preventDefault();
  };

  render() {
      return (
        <div>
         <Header />
          <section class="container-fluid">
            <div class="row">
              <div class="col-md-1">
              </div>
              <div class="col-md-7">
                <div class="">
                    <img src="assets/img/login-banner.jpg" alt="Lights" style={{ width:"100%", height:"500px", padding: "40px 20px 40px 0px" }}/>
                    <div class="top-left" style={{ position: "absolute", top: "48px", left: "40px" }}>
                      <h3> Welcome Message </h3>
                      <p>This area is used to put up <br/> message to Sansitize users <br/> about People with Disabilities. <br/> The client organisation could use <br/> this area to communicate their <br/> stance on Diversity & Inclusion <br/> at the workplace.</p>
                    </div>
                </div>
              </div>
              <div class="col-md-3">
               <div id="login-row" class="row" style={{ boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", paddingTop:"40px", marginTop:"45px", marginBottom:"30px"}}>
                <div id="login-column" class="col-md-12">
                    <div id="login-box" class="col-md-12">
                        <form onSubmit={this.onAdminLogin.bind(this)}>
                          
                          <div class="row" style={{marginTop:"10px"}}>
                            <div class="col-md-4">
                            </div>
                            <div class="col-xs-6 col-md-4">
                              <img src="assets/img/Amazon_logo.svg" id="amaimg" style={{ width:"100%" }} />
                            </div>
                            <div class="col-md-4">
                              <img src="assets/img/hand-icon.png" id="handimg" style={{ width:"20px", float:"right" }} />
                            </div>
                          </div>

                            <h3 style={{color:"black",float:"left",marginTop:"15px"}}>Login</h3>
                            <div class="form-group">
                                <input type="email" value={this.state.email} onChange={this.handleChange} placeholder="User Id" name="email" id="email" class="form-control" />
                                
                            </div>
                            <div class="form-group">
                                <input type="password" value={this.state.password} onChange={this.handleChange} placeholder="User password" name="password" id="pass" class="form-control" />
                            </div>
                            
                            <button type="submit" class="btn btn-warning btn-block" style={{backgroundColor:"#ff9d00", color:"black", fontWeight:"bold"}}>LOGIN</button>
                            <span style={{color: "red"}}>{this.state.Uerror}</span>
                            <p style={{marginTop:"115px", fontSize:"11px"}}>Access is restricted to authorised representatives only. <br/>If you need access, please contact your system admin</p>                            
                        </form>
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

export default Login;
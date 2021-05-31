import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../api/ApiServices";
import * as SessionService from "../api/SessionService";
import history from '../history';
import axios from 'axios';

class Login extends Component {

  constructor(props) {
    super(props);
      this.state = {
       disabled:'', 
       email:'',
       password:'',
       miles:'',
       region:'',
       site:'',
       ErrorMessage:'',
       city_list:[],
       errors:{},
       Uerror:''
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount(){
    axios.get('https://phpdev.ga/signable_dev/public/api/city_list')
    .then((response) => {
      this.setState({
        city_list: response.data.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

    handleValidation(){
      let errors = {};
      let formIsValid = true;

      if(typeof this.state.email !== "undefined"){
         let lastAtPos = this.state.email.lastIndexOf('@amazon');
         let lastDotPos = this.state.email.lastIndexOf('.in');
         let lastDotPos2 = this.state.email.lastIndexOf('.com');

         if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2) && !(lastAtPos < lastDotPos2 && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos2 > 2 && (this.state.email.length - lastDotPos2) > 2)) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
          }
      }  
     this.setState({errors: errors});
     return formIsValid;
    }

  async onFocus(){

    var payload = {
        email: this.state.email,
      };

      var UserDetails = await ApiService.PostAPI('user/info', payload);
      if (UserDetails.status == true) {
        this.setState({ 
          disabled: 'disabled',
          miles: UserDetails.data.user_profile.locations.miles,
          region: UserDetails.data.user_profile.locations.region,
          site: UserDetails.data.user_profile.locations.site 
        });
      }else {
        //var validationResult = this.getErrorMessage();
      }
  }  

  async onSupervLogin (event) {
    event.preventDefault();
    
    if(!this.handleValidation()){
               
      }else{         

    const payload = {
      email: this.state.email
    }

     var UserDetails = await ApiService.PostAPI('user/info', payload);
     
     if(UserDetails.status == true){
      var prePayload = {
        email: UserDetails.data.email,
        miles: UserDetails.data.user_profile.locations.miles,
        site: UserDetails.data.user_profile.locations.site,
        source: 2,
        region: UserDetails.data.user_profile.locations.region
      }
      this.setState({
        site:UserDetails.data.user_profile.locations.site,
        region:UserDetails.data.user_profile.locations.region,
        miles:UserDetails.data.user_profile.locations.miles
      });

      var sechack = await ApiService.PostAPI('authenticate', prePayload);
        localStorage.setItem("userData",JSON.stringify(sechack.data));
        localStorage.setItem("AuthToken",JSON.stringify(sechack.data.token));
        this.props.history.push("/purpose");
     }else{
        const payload1 = {
          miles:this.state.miles,
          region:this.state.region,
          site:this.state.site,
          source:2,
          email: this.state.email
        }
        var getDetails = await ApiService.PostAPI('authenticate', payload1);

         if(getDetails == undefined){
            this.setState({
               Uerror:"Required !!!"
            });
         }else {
           localStorage.setItem("userData",JSON.stringify(getDetails.data));
           localStorage.setItem("AuthToken",JSON.stringify(getDetails.data.token));
           this.props.history.push("/purpose");
        }
     }
    }
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
                    <img class="loginbiggirl" src="assets/img/login-banner.jpg" alt="Lights" />
                    <div class="textongirl">
                      <h3> Welcome Message </h3>
                      <p>This area is used to put up <br/> message to Sansitize users <br/> about People with Disabilities. <br/> The client organisation could use <br/> this area to communicate their <br/> stance on Diversity & Inclusion <br/> at the workplace.</p>
                    </div>
                </div>
              </div>
              <div class="col-md-3">
               <div id="login-row" class="row" style={{ }}>
                <div id="login-column" class="col-md-12">
                    <div id="login-box" class="col-md-12">
                        <form onSubmit={this.onSupervLogin.bind(this)}>
                          
                          <div class="row fromstarted">
                            <div class="col-md-4">
                            </div>
                            <div class="col-xs-6 col-md-4">
                              <img src="assets/img/Amazon_logo.svg" id="amaimg" style={{ width:"100%" }} />
                            </div>
                            <div class="col-md-4">
                              <img src="assets/img/hand-icon.png" id="handimg" style={{ width:"20px", float:"right" }} />
                            </div>
                          </div>

                            <h3 class="logintxt">Login</h3>
                            <div class="form-group">
                                <input type="email" autoFocus value={this.state.email} onChange={this.handleChange} placeholder="User Id" name="email" id="email" class="form-control loginHeight" />
                                <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                            </div>
                            <div class="form-group">
                                <input type="password" onFocus={this.onFocus.bind(this)} value={this.state.password} onChange={this.handleChange} placeholder="User password" name="password" id="pass" class="form-control loginHeight" />
                            </div>
                            <div class="form-group">
                                <select disabled={this.state.disabled} class="form-control loginHeight" name="miles" id="miles" value={this.state.miles} onChange={this.handleChange}>
                                  <option disable="disable">Select Mile</option>
                                  {this.state.city_list.map(rolls1 =>
                                    <option key={rolls1.id} value={rolls1.id}>{rolls1.name}</option>
                                  )};
                                </select>
                                <span style={{color: "red"}}>{this.state.Uerror}</span>
                            </div>
                            <div class="form-group">
                                <select disabled={this.state.disabled} required onChange={this.handleChange} value={this.state.region} class="form-control loginHeight" name="region" id="region">
                                  <option disable="disable">Select Region</option>
                                  {this.state.city_list.map(rolls1 =>
                                    <option key={rolls1.id} value={rolls1.id}>{rolls1.name}</option>
                                  )};
                                </select>
                                <span style={{color: "red"}}>{this.state.Uerror}</span>
                            </div>
                            <div class="form-group">
                                <input type="text" value={this.state.site}  onChange={this.handleChange} placeholder="Site" name="site" id="site" class="form-control loginHeight" />
                                <span style={{color: "red"}}>{this.state.Uerror}</span>
                            </div>
                            <button type="submit" class="btn btn-warning btn-block loginsubmit" style={{}}>LOGIN</button>
                            <p class="lastpara">Access is restricted to authorised representatives only. <br/>If you need access, please contact your system admin</p>                            
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
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../api/ApiServices";
import axios from 'axios';
import '../index.css';

class Startcall extends Component {

  constructor(props) {
    super(props);

    this.state = {
      languageInterpreter: [],
      purposeId: '',
      languageId: '',
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.LanguageInterpreterList();
  }

  LanguageInterpreterList() {
    const token = localStorage.getItem("AuthToken");
    const filterToken = token.replace(/['"]+/g, '');
    const payload = {
      language_id:3
    }

    axios({
      method: 'post',
      url: 'https://phpdev.ga/signable_dev/public/api/language_wise_interpretes_list',
      data: payload,
      headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer' + filterToken,
      }, 
    }).then((response) => {
        // response.data.data.forEach((product) => {
        //   if (product.active_interpreters_count == 0) {
        //     product.disabled = true
        //   } else {
        //     product.disabled = false
        //   }
        // })
        this.setState({ languageInterpreter: response.data.data });
      })
      .catch((error) => {
        console.log(error)
      });
  };

  languageInterpreterCLick(id) {
    this.setState({ languageId: id });
    console.log("id====",id);
    this.props.history.push("/connecting");
    // this.props.history.push({
    //   pathname: '/connecting',
    //   search: '?purpose_id=' + this.state.purposeId + '&language_id=' + id
    // });
  }

  render() {
      return (
        <div>
         <Header />
          <section class="container-fluid">
            <div class="row">
              <div class="col-md-2">
              </div>
              <div class="col-md-6">
                <div class="purposetxt">
                    <div class="top-left">
                      <h3 class="purposeh"> Please ensure that the interpreter is able to see you. <br/> Wear headphones if it's noisy around you.</h3>
                      <p class="purposep">You are logged in from BLR - H. You can change your site information in your profile.</p>
                      <img src="assets/img/dashboard_profile.png" alt="Lights" class="intprclass"/>
                      <button type="button" class="btn btn-default hdbtn"><img src="assets/img/headphone.png" style={{height:"15px"}} /> Check Audio and Video</button>
                    </div>
                </div>
              </div>
              <div class="col-md-3">
               <div id="purposebox" class="row" style={{ }}>
                <div id="login-column" class="col-md-12">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                          
                          <h3 style={{color:"black", textAlign:"center", marginTop:"-2px" }}>Start a call</h3>
                          <p class="purposep2">Select a language to speak to your interpreter.</p>                            
                            
                            <div class="form-group">
                              {this.state.languageInterpreter?.other_language?.map(comp => (
                                <button type="button" disabled={comp.disabled} class="btn btn-default btn-xs selbtn" style={{border:"none"}} onClick={() => this.languageInterpreterCLick(comp.id)}>
                                  <img src={comp.image} style={{height:"70px"}} />
                                  <p>{comp.name}</p>
                                  <p class="sndp" style={{lineHeight:"4px"}}>{comp.active_interpreters_count} Interpreters</p>
                                </button>
                              ))}
                            </div>                            
                            <hr class="startcallhr"/>
                            <Link to={`/changelang`}><h6 class="lasth">SEE ALL LANGUAGES</h6></Link>
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

export default Startcall;
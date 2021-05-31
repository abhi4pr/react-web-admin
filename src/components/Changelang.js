import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../api/ApiServices";
import axios from 'axios';
import '../index.css';

class Changelang extends Component {

  constructor(props) {
    super(props);

    this.state = {
      languageInterpreter: [],
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

  render() {
      return (
        <div>
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-1">                    
              </div>
              <div class="col-md-7"> 
               <img src="assets/img/logo.svg" alt="logo" style={{ padding:"20px 0px 20px 0px", width:"50px", height:"85px" }}/>                
              </div>
              <div class="col-md-1">
              </div>
              <div class="col-md-1">
                <img src="assets/img/profile-img.png" class="img-rounded" class="primg" /> 
              </div>
              <div class="col-md-1">
                <p class="prname">Melvin Joseph</p> 
              </div>
            </div> 
          </div>            
          <section class="container-fluid" style={{backgroundColor:"#F7F7F9"}}>
            
            <div class="row" style={{marginTop:"100px"}}>
              <div class="col-md-2">
              </div>
              <div style={{backgroundColor:"#ffce48",padding:"15px 15px 15px 15px"}} class="col-md-8">
               <h4>Unable to connect to an interpreter for your preferred language?</h4>
                <p style={{marginBottom:"40px"}}>
                 Not to worry! SignAble’s Interpreters speak multiple languages, just like you.
                 Try changing your call language and we will surely find you another interpreter.
                Choose from any of the languages listed below and we will connect you with the
                 next available interpreter
                </p>
                {this.state.languageInterpreter?.other_language?.map(comp => (
                  <button type="button" disabled={comp.disabled} class="btn btn-default btn-xs selbtn" style={{border:"none"}}>
                    <img src={comp.image} style={{height:"70px"}} />
                    <p>{comp.name}</p>
                    <p class="sndp" style={{lineHeight:"4px"}}>{comp.active_interpreters_count} Interpreters</p>
                  </button>
                ))}
              </div>
            </div>

            <div class="row">
              <div class="col-md-4">
              </div>
              <div class="col-md-6 grpicon" style={{marginTop:"85px"}}>
                <img class="btmicn" src="assets/img/icon-mircophone.png" />
                <img class="btmicn" src="assets/img/icon-endcall.png" />
                <img class="btmicn" src="assets/img/icon-video.png" />
                <img class="btmicn" src="assets/img/icon-chat.png" />
              </div>
            </div>  
          </section>  
        </div>
      )    
  }
}

export default Changelang;
import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../api/ApiServices";
import axios from 'axios';
import '../index.css';

class Purpose extends Component {

  constructor(props) {
    super(props);

    this.state = {
      purposeList: [],
      languageInterpreter: [],
      purposeId: '',
      languageId: '',
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    this.bindPurposeList();
    //this.deviceList();
  }

  deviceList(){
    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        for(var i = 0; i < devices.length; i ++){
            var device = devices[i];
            if (device.kind === 'videoinput') {
                var option = document.createElement('option');
                option.value = device.deviceId;
                option.text = device.label || 'camera ' + (i + 1);
                document.querySelector('select#videoSource').appendChild(option);
            }
        };
    });

    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        for(var i = 0; i < devices.length; i ++){
            var device = devices[i];
            if (device.kind === 'audioinput') {
                var option = document.createElement('option');
                option.value = device.deviceId;
                option.text = device.label || 'camera ' + (i + 1);
                document.querySelector('select#audioiSource').appendChild(option);
            }
        };
    });

    navigator.mediaDevices.enumerateDevices().then(function (devices) {
        for(var i = 0; i < devices.length; i ++){
            var device = devices[i];
            if (device.kind === 'audiooutput') {
                var option = document.createElement('option');
                option.value = device.deviceId;
                option.text = device.label || 'camera ' + (i + 1);
                document.querySelector('select#audiooSource').appendChild(option);
            }
        };
    });
  }

  bindPurposeList() {
    axios.get('https://phpdev.ga/signable_dev/public/api/purposes')
    .then((response) => {
        response.data.data.forEach((product) => {
          product.color = '#fff';
          product.fontcolor = '#070000';
          product.bordercolor = '#608dd5';
        })
      this.setState({ purposeList: response.data.data });
    });
  };

  purposeCLick(id) {
    //console.log("data===",id);
    this.state.purposeList.forEach((product) => {
      if (product.id == id) {
        product.color = '#608dd5'
        product.fontcolor = '#fff';
        product.bordercolor = '#608dd5';
        this.setState({ purposeId: product.id });
      } else {
        product.color = '#fff'
        product.fontcolor = '#070000';
        product.bordercolor = '#608dd5';
      }
    })
    this.setState({ purposeList: this.state.purposeList });
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
                      <br/>
                      <button type="button" data-toggle="modal" data-target="#myModal" class="btn btn-default hdbtn"><img src="assets/img/headphone.png" style={{height:"15px"}} /> Check Audio and Video</button>
                    </div>
                </div>
              </div>

              <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">Check Audio and Video</h4>
                    </div>
                    <div class="modal-body">
                      <div class="row">
                        <div class="col-md-4">
                          <select id="videoSource" style={{width:"100%"}}></select>
                        </div>
                        <div class="col-md-4">
                          <select id="audioiSource" style={{width:"100%"}}></select>
                        </div>
                        <div class="col-md-4">
                          <select id="audiooSource" style={{width:"100%"}}></select>
                        </div>
                      </div>
                    </div>                    
                  </div>                  
                </div>
              </div>

              <div class="col-md-3">
               <div id="purposebox" class="row" style={{}}>
                <div id="login-column" class="col-md-12">
                    <div id="login-box" class="col-md-12">
                        <form id="login-form" class="form" action="" method="post">
                          
                          <h3 style={{color:"black", textAlign:"center", marginTop:"-2px" }}>Purpose of call</h3>
                          <p class="purposep2">Choose from the list of Purpose Statements below. This information will help the interpreter understand the reason better and provide value.</p>                            
                            
                            <div class="form-group">
                                {this.state.purposeList.map(comp => (
                                  <button type="button" class="btn btn-primary border border-primary" onClick={() => this.purposeCLick(comp.id)}
                                    style={{ marginTop:"15px", borderRadius:"20px", fontSize: "10px", marginLeft: "5px", backgroundColor: comp.color, color: comp.fontcolor, border: "1px solid " + comp.bordercolor }}
                                  >
                                  {comp.description}
                                  </button>
                                ))}
                            </div>
                            
                            <hr class="purposehr"/>
                            <Link to={`/startcall`}><button type="button" class="btn btn-warning purposebtn" style={{}}>NEXT</button></Link>
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

export default Purpose;
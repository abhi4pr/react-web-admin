import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../../api/ApiServices";
import * as SessionService from "../../api/SessionService";
import history from '../../history';
import axios from 'axios';
import './Aindex.css';
import $ from 'jquery';
import DataTable from 'datatables.net';

class Acallhistory extends Component {

  constructor(props) {
    super(props);
      this.state = {
        callHistory:[],
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount(){
    this.getCallHistoryList();
  }

  getCallHistoryList() {
    const token = localStorage.getItem("AuthToken");
    const filterToken = token.replace(/['"]+/g, '');
    const payload = {
      from_date:'2021-05-17',
      to_date:'2021-05-07'
    }

    axios({
      method: 'post',
      url: 'https://phpdev.ga/signable_dev/public/api/report/call_report_history',
      //data: payload,
      headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer' + filterToken,
      }, 
    }).then((response) => {
        this.setState({ callHistory: response.data.data });
        $(document).ready(function(){
           $('#hislisting').DataTable({
             "lengthMenu": [5,10],
             "dom": '<"top"i>rt<"bottom"flp><"clear">'
           });
        });
      })
      .catch((error) => {
        console.log(error)
      });
  };

  render() {
      return (
        <div>
         <Header />
          <section class="container-fluid" style={{marginTop:"-10px",backgroundColor:"#fafafa"}}>
            <div class="row">
              <div class="col-md-3">
              </div>
              <div class="col-md-8" style={{marginBottom:"35px"}}>

                <h3 style={{fontWeight:"bold"}}>Call History</h3>
                <div class="row">
                  <div class="col-md-3">
                   <div class="innclas">
                    <p class="quespara">Total Calls</p>
                    <p class="anspara">{this.state.callHistory?.average_detail?.total_calls}</p>
                   </div>
                  </div>
                  <div class="col-md-3">
                   <div class="innclas">
                    <p class="quespara">Failed Calls</p>
                    <p class="anspara">2</p>
                   </div>
                  </div>
                  <div class="col-md-3">
                   <div class="innclas">
                    <p class="quespara">Avg. Call wait time</p>
                    <p class="anspara">00:01:05</p>
                   </div>
                  </div>
                </div>
                
                <h5 style={{fontWeight:"bold",marginTop:"35px"}}>Calls</h5>

                <div class="row" style={{backgroundColor:"white",margin:"0px"}}>
                <div class="col-md-6"></div>
                <div class="col-md-6 tbluper">
                  <select id="filtrr">
                    <option disable="disable">Select Mile</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select> 
                  <select id="filtrr">
                    <option disable="disable">Select Region</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select> 
                  <select id="filtrr">
                    <option disable="disable">Select BLR</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                  </select> 
                </div>
                </div>
                  
                 <table id="hislisting" class="table table-responsive" style={{backgroundColor:"white"}}>
                    <thead>
                      <tr>
                        <th>{ }</th>
                        <th>Interpreter</th>
                        <th>Caller</th>
                        <th>Language</th>
                        <th>Purpose</th>
                        <th>Location</th>
                        <th>Call Duration</th>
                      </tr>
                    </thead>
                   
                   
                    <tbody>
                    {this.state.callHistory?.call_datas?.length && this.state.callHistory?.call_datas?.map(share => {
                     return ( 
                      <tr>
                        <td><img src="assets/img/tim_80x80.png" style={{height:"40px",marginLeft:"10px"}}/></td>
                        <td>{share.from_user_profile.first_name}</td>
                        <td>Manjunath</td>
                        <td>{share.language.name}</td>
                        <td>{share.purpose.description}</td>
                        <td>{share.from_user_profile.locations.site}</td>
                        <td>01:39:45</td>
                      </tr>
                     );
                    })}  
                    </tbody>

                 </table>

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

export default Acallhistory;
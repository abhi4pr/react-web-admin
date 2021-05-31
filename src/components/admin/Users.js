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

class Users extends Component {

  constructor(props) {
    super(props);
      this.state = {
        usersList:[],
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
      url: 'https://phpdev.ga/signable_dev/public/api/report/frequent_user_report',
      //data: payload,
      headers: {
       'Content-Type': 'application/json',
       'Authorization': 'Bearer' + filterToken,
      }, 
    }).then((response) => {
        this.setState({ usersList: response.data.data });
        $(document).ready(function(){
           $('#userlisting').DataTable({
             "lengthMenu": [5]
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
          <section class="container-fluid" style={{marginTop:"-10px",backgroundColor:"#fafafa",height:"520px"}}>
            <div class="row">
              <div class="col-md-3">
              </div>
              <div class="col-md-8" style={{marginBottom:"35px"}}>

                <h3 style={{fontWeight:"bold"}}>Frequent Users</h3>
                <div class="row">
                  <div class="col-md-3">
                   <div class="innclas">
                    <p>All Users</p>
                    <p class="anspara">75</p>
                   </div>
                  </div>
                  <div class="col-md-3">
                   <div class="innclas">
                    <p>Users on call</p>
                    <p class="anspara">2</p>
                   </div>
                  </div>
                  <div class="col-md-3">
                   <div class="innclas">
                    <p>Avg. Call per User</p>
                    <p class="anspara">00:01:05</p>
                   </div>
                  </div>
                </div>
                
                <h5 style={{fontWeight:"bold",marginTop:"35px"}}>Calls</h5>

                <div class="row" style={{backgroundColor:"white",margin:"0px",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                <div class="col-md-6"></div>
                <div class="col-md-6 tbluper">
                  
                </div>
                </div>
                  
                 <table id="userlisting" class="table table-responsive" style={{backgroundColor:"white",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                    <thead>
                      <tr>
                        <th>Img</th>
                        <th>Users</th>
                        <th>Employee ID</th>
                        <th>Role/function</th>
                        <th>Site</th>
                        <th>Total Calls</th>
                        <th>Profile</th>
                      </tr>
                    </thead>
                   
                   
                    <tbody>
                    {this.state.usersList?.data?.length && this.state.usersList?.data?.map(share => {
                     return ( 
                      <tr>
                        <td><img src="assets/img/tim_80x80.png" style={{height:"40px",marginLeft:"10px"}}/></td>
                        <td>{share.user_profile.first_name}</td>
                        <td>{share.id}</td>
                        <td>{share.user_profile.user_roles.role_display_name}</td>
                        <td>{share.user_profile.locations.site}</td>
                        <td>{share.total_call}</td>
                        <td><Link to={`/`} style={{color:"black"}}> <h5>View</h5> </Link></td>
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

export default Users;
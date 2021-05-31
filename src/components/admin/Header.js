import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Aindex.css';
import $ from 'jquery';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
        
    };
  }

  componentDidMount() {
    this.toggleMenuJquery();
  }

  toggleMenuJquery(){
    $('.sidebarme').click(function() {
      $('.toggled1').toggle(100)
    });
  }

  render() {
      return (
        <header>
          <section class="container-fluid">
            <div class="row">
                <div class="col-md-1">                    
                </div>
                <div class="col-md-7"> 
                 <img src="assets/img/logo.svg" alt="logo" style={{ padding:"20px 0px 20px 0px", width:"50px", height:"85px" }}/>                
                </div>
                <div class="col-md-1">
                </div>
                {localStorage.getItem('adminData') ?
                 <div>
                  <div class="col-md-1">
                    <img src="assets/img/profile-img.png" class="img-rounded" class="primg" /> 
                  </div>
                  <div class="col-md-1">
                    <p class="prname">Melvin Joseph</p> 
                  </div>
                 </div> :
                 <div class="col-md-2">
                 </div>
                }    
            </div>
          </section>

          <section class="container-fluid">
            <div class="row" style={{ backgroundColor:"#2760a3", height:"35px"}}>
                <div class="col-md-1">                    
                </div>
                <div class="col-md-7">  
                  <i class="fa fa-bars sidebarme" style={{ color:"white", size:"30px", marginTop:"6px" }}></i>                
                </div>
                <div class="col-md-3">
                    <p class="lngchange1">Change Display Language: </p> 
                    <select name="lang" id="lang">
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </select>                        
                </div> 
            </div>
          </section>

          <div id="wrapper1" class="toggled1" style={{marginTop:"-9px"}}>
            <div class="container-fluid">
                <div id="sidebar-wrapper1" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                  <ul class="sidebar-nav1">
                    <li class="sidebar-brand" style={{margin:"-12px 40px -12px 40px"}}>
                      <img src="assets/img/Amazon_logo.svg" style={{marginTop:"35px", height:"25px"}}/>
                    </li>
                    <hr/>
                    <li class="sidebar-brand"> 
                      <Link to={`/admin/overview`} class="navbar-brand1" style={{color:"black"}}>Overview </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/admin/overview`} class="navbar-brand1" style={{color:"black"}}> Calls </Link>
                        <ul>
                          <li style={{margin:"0px 30px 0px 0px"}}><Link to={`/admin/activecalls`} style={{color:"black"}}> Active Calls </Link></li>
                          <li style={{margin:"0px 30px 0px 0px"}}><Link to={`/admin/acallhistory`} style={{color:"black"}}>Call history</Link></li>
                        </ul>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/admin/overview`} class="navbar-brand1" style={{color:"black"}}> Interpreters </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/admin/users`} class="navbar-brand1" style={{color:"black"}}> Users </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/admin/overview`} class="navbar-brand1" style={{color:"black"}}> Reports </Link>
                        <ul>
                          <li style={{margin:"0px 30px 0px 0px"}}><Link to={`/admin/overview`} style={{color:"black"}}>Download reports</Link></li>
                          <li style={{margin:"0px 30px 0px 0px"}}><Link to={`/admin/overview`} style={{color:"black"}}>Get reports by Email</Link></li>
                        </ul>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/admin/overview`} class="navbar-brand1" style={{color:"black"}}> Feedback </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/admin/overview`} class="navbar-brand1" style={{color:"black"}}> Profile </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/admin/overview`} class="navbar-brand1" style={{color:"black"}}> Help </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/logout`} class="navbar-brand1" style={{color:"black"}}> Logout </Link>
                    </li>
                  </ul>
                </div>
            </div>
          </div>
                
        </header>
      ) 
    }
 }    

export default Header;
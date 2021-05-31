import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import $ from 'jquery';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
        
    };
  }

  componentDidMount() {
    this.toggleMenuJquery();
    this.logoutMenu();
  }

  toggleMenuJquery(){
    $('.sidebarme').click(function() {
      $('.toggled').toggle(100)
    });
  }

  logoutMenu(){
    $('.picclick').click(function() {
      $('.openlog').toggle(100)
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
                 <img class="logosty" src="assets/img/logo.svg" alt="logo" style={{ }}/>                
                </div>
                <div class="col-md-1">
                </div>
                {localStorage.getItem('userData') ?
                 <div class="picclick"> 
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

          <div class="openlog">
            <div style={{textAlign:"left",padding:"5px 0px 5px 30px"}}>
              <img class="logpimg" src="assets/img/user-upload-512.png" 
              style={{}} />
              <h5>Company | Employee ID</h5>
              <h5>Site</h5>
              <h5>Manage Profile</h5>
              <Link to={`/logout`} style={{color:"black"}}> <h5>Logout</h5> </Link>
              <hr /> 
              <Link to={`/purpose`} style={{color:"black"}}> <h5 style={{textAlign:"center",margin:"-7px 25px -7px 0px"}}>Start Call</h5></Link>
              <hr />
              <h6 style={{textAlign:"center",margin:"-7px 15px 5px 0px"}}>Privacy Policy | Terms & Conditions</h6>
            </div>
          </div>

          <section class="container-fluid">
            <div class="row" style={{ backgroundColor:"#2760a3", height:"35px"}}>
                <div class="col-md-1">                    
                </div>
                <div class="col-md-7">  
                  <i class="fa fa-bars sidebarme" style={{ color:"white", size:"30px", marginTop:"10px" }}></i>                
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

          <div id="wrapper" class="toggled" style={{display:"none",marginTop:"-9px"}}>
            <div class="container-fluid">
                <div id="sidebar-wrapper" style={{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}>
                  <ul class="sidebar-nav">
                    <li class="sidebar-brand">
                      <img src="assets/img/Amazon_logo.svg" style={{marginTop:"35px", height:"25px"}}/>
                    </li>
                    <hr/>
                    <li class="sidebar-brand"> 
                      <Link to={`/callhistory`} class="navbar-brand" style={{color:"black"}}> Call History </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/profile`} class="navbar-brand" style={{color:"black"}}> Profile </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/purpose`} class="navbar-brand" style={{color:"black"}}> Start Call </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/help`} class="navbar-brand" style={{color:"black"}}> Help </Link>
                    </li>
                    <li class="sidebar-brand">
                      <Link to={`/logout`} class="navbar-brand" style={{color:"black"}}> Logout </Link>
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
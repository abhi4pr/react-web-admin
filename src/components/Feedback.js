import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../api/ApiServices";
import axios from 'axios';
import '../index.css';

class Feedback extends Component {

  constructor(props) {
    super(props);

    this.state = {
      purposeList: []
    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount() {
    
  }

  render() {
      return (
        <div>
         <Header />
          <section class="container-fluid">
            <div class="row">
              <div class="col-md-2">
              </div>
              <div class="col-md-8">
                <h2 style={{textAlign:"center"}}>We hope you enjoyed your call!</h2>
               <div class="mcnt" style={{ marginTop:"-5px", boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}> 
                <h4 style={{marginTop:"20px",textAlign:"center",padding:"20px 0 0 0"}}>Please tell us a little about your experience on this call.</h4>
                <hr style={{marginTop:"1px"}} />
                <div style={{margin:"-10px 0 0 0"}}>
                  <h4 style={{textAlign:"center"}}>
                  Rate call audio and video quality 
                  <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                  <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                  <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                  <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                  <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                  </h4> <hr style={{marginTop:"1px"}} />
                </div>

                <div class="row" style={{marginTop:"-5px"}}>
                  
                  <div class="col-md-4">
                    <div style={{margin:"0 0 0 30px",borderRight:"1px solid gray"}}>
                    <h4>You spoke with interpreter Paramveer</h4>
                     <div class="row" style={{marginTop:"25px"}}> 
                      <div class="col-md-6">
                      <img src="assets/img/param.jpg" style={{height:"65px",borderRadius:"50%"}}/>
                      </div>
                        <h5>Paramveer</h5>
                      <div class="col-md-6" style={{display:"flex"}}>
                        <span class="fa fa-star" style={{color:"yellow"}}></span>
                        <h5 style={{margin:"0px 0 0 15px"}}>4.6</h5>
                      </div>
                     </div>
                     <h6 style={{marginTop:"25px"}}>Call Date: 01 Mar, 2021</h6> 
                     <h6>Call Duration: 1h:03m:35s</h6> 
                     <h6>Call Language: Hindi</h6> 
                     <h6>Call Purpose: Attendance</h6> 
                    </div>
                  </div>

                  <div class="col-md-8">
                   <div style={{margin:"0 50px 15px 30px"}}>
                    <h5>Rate interpreter Paramveer</h5>
                    <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                    <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                    <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                    <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                    <span class="fa fa-star-o" style={{marginLeft:"10px"}}></span>
                    <h5>How can interpreter Paramveer improve? You can select multiple options.</h5>

                    <button type="button" class="btn btn-primary border border-primary" 
                      style={{ marginTop:"10px", borderRadius:"20px", fontSize: "10px", marginLeft: "10px",
                      backgroundColor: "white", color: "black", border: "1px solid blue"}}>
                      Business Purpose
                    </button>
                    <button type="button" class="btn btn-primary border border-primary" 
                      style={{ marginTop:"10px", borderRadius:"20px", fontSize: "10px", marginLeft: "10px",
                      backgroundColor: "white", color: "black", border: "1px solid blue"}}>
                      Professionalism
                    </button>
                    <button type="button" class="btn btn-primary border border-primary" 
                      style={{ marginTop:"10px", borderRadius:"20px", fontSize: "10px", marginLeft: "10px",
                      backgroundColor: "white", color: "black", border: "1px solid blue"}}>
                      Courteous
                    </button>
                    <button type="button" class="btn btn-primary border border-primary" 
                      style={{ marginTop:"10px", borderRadius:"20px", fontSize: "10px", marginLeft: "10px",
                      backgroundColor: "white", color: "black", border: "1px solid blue"}}>
                      Availability
                    </button>

                    <button type="button" class="btn btn-primary border border-primary" 
                      style={{ marginTop:"10px", borderRadius:"20px", fontSize: "10px", marginLeft: "10px",
                      backgroundColor: "white", color: "black", border: "1px solid blue"}}>
                      Sign Language
                    </button>
                    <button type="button" class="btn btn-primary border border-primary" 
                      style={{ marginTop:"10px", borderRadius:"20px", fontSize: "10px", marginLeft: "10px",
                      backgroundColor: "white", color: "black", border: "1px solid blue"}}>
                      Waiting Time
                    </button>
                    <button type="button" class="btn btn-primary border border-primary" 
                      style={{ marginTop:"10px", borderRadius:"20px", fontSize: "10px", marginLeft: "10px",
                      backgroundColor: "white", color: "black", border: "1px solid blue"}}>
                      Language Improvement
                    </button>
                    <button type="button" class="btn btn-primary border border-primary" 
                      style={{ marginTop:"10px", borderRadius:"20px", fontSize: "10px", marginLeft: "10px",
                      backgroundColor: "white", color: "black", border: "1px solid blue"}}>
                      Other
                    </button>

                    <div class="form-group" style={{marginTop:"15px"}}>
                      <textarea class="form-control" rows="3" value={this.state.comment} onChange={this.handleChange}
                       name="comment" style={{width:"80%"}} placeholder="Do you want to leave a comment?">
                      </textarea>                      
                    </div>
                    <div class="row" style={{margin:"0 85px 0 -30px"}}>
                      <div class="col-md-4">
                      </div>
                      <div class="col-md-2">
                        <button type="submit" class="btn btn-default" style={{color:"black", fontWeight:"bold"}}>Later</button>
                      </div>
                      <div class="col-md-2">
                        <button type="submit" class="btn btn-default" style={{backgroundColor:"#ff9d00", color:"black", fontWeight:"bold"}}>Submit</button>
                      </div>
                    </div>
                   </div> 
                  </div>

                </div>
               
               </div> 
              </div>
              <div class="col-md-2">
              </div>
            </div>
          </section>  
         <Footer /> 
        </div>
      )    
  }
}

export default Feedback;
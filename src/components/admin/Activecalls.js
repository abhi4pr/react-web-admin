import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Link, Redirect } from 'react-router-dom';
import * as ApiService from "../../api/ApiServices";
import * as SessionService from "../../api/SessionService";
import history from '../../history';
import axios from 'axios';
import './Aindex.css';

class Activecalls extends Component {

  constructor(props) {
    super(props);
      this.state = {

    };
  }   

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  componentDidMount(){
    
  }

  render() {
      return (
        <div>
         <Header />
          <section class="container-fluid" style={{marginTop:"-10px",backgroundColor:"#fafafa"}}>
            <div class="row">
              <div class="col-md-3">
              </div>
              <div class="col-md-9">

                <h3 style={{fontWeight:"bold"}}>Active Calls</h3>
                <div class="row">
                  <div class="col-md-3">
                   <div class="innclas">
                    <p>Calls in Session</p>
                    <p class="anspara">126</p>
                   </div>
                  </div>
                  <div class="col-md-3">
                   <div class="innclas">
                    <p>Available Interpreters</p>
                    <p class="anspara">135</p>
                   </div>
                  </div>
                </div>
                
                <h5 style={{fontWeight:"bold",marginTop:"35px"}}>By Location</h5>
                <div class="row">
                  <div class="col-md-4">
                    <div class="innclas" style={{height:"270px"}}>
                      <h5>Mile</h5>
                      <h5>Region</h5>
                      <h5>Site</h5>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="innclas">
                     <div class="row dechei">                      
                      <div class="col-md-2"><h5>BLR-A</h5></div>
                      <div class="col-md-8 md8style">
                       <div class="progress prgstyle">
                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                        </div>
                       </div>
                      </div>
                      <div class="col-md-2"><h5>8 calls</h5></div>
                     </div>
                     <div class="row dechei">                      
                      <div class="col-md-2"><h5>BLR-B</h5></div>
                      <div class="col-md-8 md8style">
                       <div class="progress prgstyle">
                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                        </div>
                       </div>
                      </div>
                      <div class="col-md-2"><h5>12 calls</h5></div>
                     </div>
                     <div class="row dechei">                      
                      <div class="col-md-2"><h5>BLR-C</h5></div>
                      <div class="col-md-8 md8style">
                       <div class="progress prgstyle">
                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                        </div>
                       </div>
                      </div>
                      <div class="col-md-2"><h5>11 calls</h5></div>
                     </div>
                     <div class="row dechei">                      
                      <div class="col-md-2"><h5>BLR-D</h5></div>
                      <div class="col-md-8 md8style">
                       <div class="progress prgstyle">
                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                        </div>
                       </div>
                      </div>
                      <div class="col-md-2"><h5>18 calls</h5></div>
                     </div>
                     <div class="row dechei">                      
                      <div class="col-md-2"><h5>BLR-E</h5></div>
                      <div class="col-md-8 md8style">
                       <div class="progress prgstyle">
                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                        </div>
                       </div>
                      </div>
                      <div class="col-md-2"><h5>20 calls</h5></div>
                     </div>
                     <div class="row dechei">                      
                      <div class="col-md-2"><h5>BLR-F</h5></div>
                      <div class="col-md-8 md8style">
                       <div class="progress prgstyle">
                        <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width:"70%"}}>
                        </div>
                       </div>
                      </div>
                      <div class="col-md-2"><h5>8 calls</h5></div>
                     </div>
                    </div>
                  </div>
                </div>

                <div class="row" style={{marginTop:"30px",marginBottom:"30px"}}>
                 <div class="col-md-10">
                 <h5 style={{fontWeight:"bold"}}>Active Calls</h5>
                  <table id="calllisting" class="table table-responsive" style={{backgroundColor:"white"}}>
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
                      <tr>
                        <td><img src="assets/img/tim_80x80.png" style={{height:"40px",marginLeft:"10px"}}/></td>
                        <td>John</td>
                        <td>David</td>
                        <td>French</td>
                        <td>Medical</td>
                        <td>Middle east</td>
                        <td>00:45:33</td>                        
                      </tr>
                      <tr>
                        <td><img src="assets/img/tim_80x80.png" style={{height:"40px",marginLeft:"10px"}}/></td>
                        <td>John</td>
                        <td>David</td>
                        <td>French</td>
                        <td>Medical</td>
                        <td>Middle east</td>
                        <td>00:45:33</td>                        
                      </tr>
                      <tr>
                        <td><img src="assets/img/tim_80x80.png" style={{height:"40px",marginLeft:"10px"}}/></td>
                        <td>John</td>
                        <td>David</td>
                        <td>French</td>
                        <td>Medical</td>
                        <td>Middle east</td>
                        <td>00:45:33</td>                        
                      </tr>
                    </tbody>
                  </table>
                 </div> 
                </div>

              </div>
              <div class="ttt">
              </div>
            </div>
          </section>  
         <Footer /> 
        </div>
      )    
  }
}

export default Activecalls;
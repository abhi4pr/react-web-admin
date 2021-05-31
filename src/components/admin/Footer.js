import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }   

  render() {
    return (
        <footer>
          <section class="container-fluid" style={{ zIndex:"9999",position: "fixed", left: "0px", bottom: "-7px", width:"100%" }}>
            <div class="row" style={{ backgroundColor:"#b7c1b7", height:"35px"}}>
                <div class="col-md-1">
                    
                </div>
                <div class="col-md-10">
                    <p style={{ marginTop: "2px" }}>Powered by Signable. Version 3.00.28 </p>
                </div>
            </div>
          </section>            
        </footer>        
      )
    }
 }    
 
export default Footer;
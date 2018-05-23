import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export class Contact extends Component {
    render() {
       return (
        <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="contact text-center wow fadeInUp animated" data-wow-duration="500ms" data-wow-delay="300ms" style={{visibility: 'visible', animationDuration: '500ms', animationDelay: '300ms', animationName: 'fadeInUp'}}>
                <h1 className="contact-title"> <span style={{color: '#f1bf45'}}><i>func</i></span> contact()</h1>
              </div>
              <div className="contact-logo wow fadeIn animated" data-wow-duration="1000ms" data-wow-delay="600ms" style={{visibility: 'visible', animationDuration: '1000ms', animationDelay: '600ms', animationName: 'fadeIn'}}>
                <div className="col-sm-12">
                  <form id="contactform" role="form" method="post">
                    <input type="text" placeholder="Name*" name="name" required /><br />
                    <input type="text" placeholder="Company (optional)" name="company" /><br />
                    <input type="text" placeholder="Email*" name="email" required /><br />
                    <textarea rows={10} placeholder="What can we do for you*" name="message" required defaultValue={""} /><br />
                    <center><input type="submit" name="submit" className="btn btn-submit" defaultValue="Let's Do This" /></center>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
       )
    }
}

export default Contact;
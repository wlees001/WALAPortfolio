import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Footer extends Component {
    render() {
       return (
        <div id="footer-wrapper">
        <div id="footer" className="container">
          <header className="major">
            <h2>Euismod aliquam vehicula lorem</h2>
            <p>Lorem ipsum dolor sit amet consectetur et sed adipiscing elit. Curabitur vel sem sit<br />
              dolor neque semper magna lorem ipsum feugiat veroeros lorem ipsum dolore.</p>
          </header>
          <div className="row">
            <section className="6u 12u(narrower)">
              <form method="post" action="#">
                <div className="row 50%">
                  <div className="6u 12u(mobile)">
                    <input name="name" placeholder="Name" type="text" />
                  </div>
                  <div className="6u 12u(mobile)">
                    <input name="email" placeholder="Email" type="text" />
                  </div>
                </div>
                <div className="row 50%">
                  <div className="12u">
                    <textarea name="message" placeholder="Message" defaultValue={""} />
                  </div>
                </div>
                <div className="row 50%">
                  <div className="12u">
                    <ul className="actions">
                      <li><input type="submit" defaultValue="Send Message" /></li>
                      <li><input type="reset" defaultValue="Clear form" /></li>
                    </ul>
                  </div>
                </div>
              </form>
            </section>
            <section className="6u 12u(narrower)">
              <div className="row 0%">
                <ul className="divided icons 6u 12u(mobile)">
                  <li className="icon fa-twitter"><a href="#"><span className="extra">twitter.com/</span>untitled</a></li>
                  <li className="icon fa-facebook"><a href="#"><span className="extra">facebook.com/</span>untitled</a></li>
                  <li className="icon fa-dribbble"><a href="#"><span className="extra">dribbble.com/</span>untitled</a></li>
                </ul>
                <ul className="divided icons 6u 12u(mobile)">
                  <li className="icon fa-instagram"><a href="#"><span className="extra">instagram.com/</span>untitled</a></li>
                  <li className="icon fa-youtube"><a href="#"><span className="extra">youtube.com/</span>untitled</a></li>
                  <li className="icon fa-pinterest"><a href="#"><span className="extra">pinterest.com/</span>untitled</a></li>
                </ul>
              </div>
            </section>
          </div>
        </div>
        <div id="copyright" className="container">
          <ul className="menu">
            <li>© 2018. All rights reserved.</li><li>Design: <a href="#">Wala Designs</a></li>
          </ul>
        </div>
      </div>

    )
}
}

export default Footer;